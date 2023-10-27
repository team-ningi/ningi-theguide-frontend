import { Paragraph, Flex, Box, Input, Button } from "theme-ui";
import { v4 as uuidv4 } from "uuid";
import {
  DashboardStateType,
  AddContentErrorStateType,
  UserType,
  SetLoadingType,
  SessionType,
} from "@/lib/types";
import { XCircle } from "phosphor-react";
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { S3 } from "aws-sdk";
import { useRouter } from "next/navigation";
import axios from "axios";

const s3 = new S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_KEY_REGION,
});

const supportedDocTypes = ["txt", "pdf", "docx"];

const defaultErrorState = {
  document_url: false,
  label: false,
  customFilename: false,
  error_msg: "",
};

const validateForm = async (
  state: DashboardStateType,
  errorState: AddContentErrorStateType,
  updateErrorState: (value: SetStateAction<AddContentErrorStateType>) => void,
  file: File | null,
  setLoading: (loading: boolean) => {
    type: string;
    loading: boolean;
  }
) => {
  let errors = 0;
  const errObject = {
    title: false,
    content: false,
    image_url: false,
  };

  if (!state.label || state.label.length < 3) {
    errors++;
    errObject.title = true;
  }

  if (!file) {
    errors++;
    errObject.image_url = true;
  }

  if (errors > 0) {
    updateErrorState({
      ...errorState,
      ...errObject,
      error_msg: "There are errors in your data",
    });
    await setLoading(false);
  } else {
    updateErrorState({ ...defaultErrorState });
  }

  return errors < 1;
};

const addDocument = async (
  user_id: string,
  label: string,
  file_url: string,
  file_type: string,
  original_filename: string,
  saved_filename: string,
  custom_filename: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-document",
    data: {
      user_id,
      label,
      file_url,
      file_type,
      original_filename,
      saved_filename,
      custom_filename,
      metadata: {},
      authToken,
    },
  });

const createEmbeddings = async (
  user_id: string,
  file_url: string,
  document_id: string,
  file_type: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-embeddings",
    data: {
      user_id,
      file_url,
      document_id,
      file_type,
      authToken,
    },
  });

const InputLabel = ({
  title,
  subtitle,
  customSX = {},
}: {
  title: string;
  subtitle: string;
  customSX: {};
}) => (
  <Paragraph
    sx={{
      color: "#444",
      fontSize: "14px",
      mb: "3px",
      mt: "10px",
      ...customSX,
    }}
  >
    {title}
    <span style={{ color: "firebrick" }}>{subtitle}</span>
  </Paragraph>
);

export const AddNewForm = ({
  state,
  setLoading,
  updateState,
  user,
  session,
}: {
  setLoading: SetLoadingType;
  state: DashboardStateType;
  updateState: (value: SetStateAction<DashboardStateType>) => void;
  user: UserType;
  session: SessionType;
}) => {
  const [errorState, updateErrorState] =
    useState<AddContentErrorStateType>(defaultErrorState);
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);

  const router = useRouter();

  useEffect(() => {
    setUpload(null);
  }, [file]);

  useEffect(() => {
    updateState({ ...state, user_id: user?._id });
    return upload?.abort();
  }, []);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setFile(e.target.files![0]);
  };

  const handleUpload: MouseEventHandler<HTMLButtonElement> = async (e) => {
    try {
      await setLoading(true);
      e.preventDefault();
      const validatedForm = await validateForm(
        state,
        errorState,
        updateErrorState,
        file,
        setLoading
      );

      if (validatedForm) {
        const orginalFileName = file?.name || "";
        const customFileName = state.customFilename;
        const fileType = orginalFileName.substring(
          orginalFileName.lastIndexOf(".") + 1
        );
        const savedFileName = `${uuidv4()}.${fileType}`;

        const params = {
          Bucket: `${process.env.NEXT_PUBLIC_AWS_BUCKET}`,
          Key: savedFileName,
          Body: file !== null ? file : undefined,
        };

        const options = { partSize: 10 * 1024 * 1024, queueSize: 1 };
        const upload = s3.upload(params, options);
        setUpload(upload);

        await upload.promise();

        const { data } = await addDocument(
          state?.user_id,
          state?.label,
          `${process.env.NEXT_PUBLIC_AWS_CDN_URL}/${savedFileName}`,
          fileType,
          orginalFileName,
          savedFileName,
          customFileName,
          session?.authToken
        );

        const doc = data?.document || {};
        const { user_id, file_url, _id, file_type } = doc;
        console.log(user_id, file_url, _id, file_type);

        try {
          if (supportedDocTypes.includes(file_type)) {
            await createEmbeddings(
              user_id,
              file_url,
              _id,
              file_type,
              session?.authToken
            );
            console.log("create embedding");
          } else {
            console.log("invalid filetype for an embedding");
          }
        } catch (e) {
          // swallow
          console.log("embeddings failed");
        }

        //@ts-ignore
        // document.getElementById("add-content-label").value = null;
        setUpload(null);
        updateState({
          ...state,
          mode: "success",
        });
        await setLoading(false);

        setTimeout(() => updateState({ ...state, mode: "start" }), 3000);
      }
    } catch (err) {
      updateState({
        ...state,
      });
      updateErrorState({
        ...errorState,
        error_msg: `Your new document has NOT been saved.`,
      });

      await setLoading(false);
      console.error(err);
    }
  };

  return (
    <Flex
      className="sectionContainer"
      sx={{
        width: "800px",
        opacity: 1,
        mt: "50px",
        minHeight: "50px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        "@media screen and (max-width: 1275px)": { width: "600px" },
      }}
    >
      {state?.mode === "success" && (
        <>
          <Paragraph
            sx={{
              mt: "0px",
              color: "green",
              fontWeight: "500",
              textAlign: "center",
              width: "100%",
            }}
          >
            Your content has been successfully created 🚀
          </Paragraph>
        </>
      )}

      {state?.mode === "start" && (
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            height: "80px",
          }}
        >
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "5px",
              height: "40px",
              width: "100px",
              fontSize: "14px",
            }}
            onClick={() => updateState({ ...state, mode: "add" })}
          >
            Add File
          </Button>
        </Flex>
      )}

      {state?.mode === "add" && (
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "80px",
            border: "0px solid red",
            position: "relative",
          }}
        >
          <Paragraph
            sx={{
              position: "absolute",
              top: "-10px",
              right: 0,
              fontWeight: "400",
              color: "#555",
              cursor: "pointer",
              zIndex: 999,
            }}
            onClick={() => updateState({ ...state, mode: "start" })}
          >
            <XCircle size={18} weight="fill" />
          </Paragraph>
          <Box>
            <InputLabel
              customSX={{
                textAlign: "left",
                width: "300px",
              }}
              title="Label"
              subtitle=" *"
            />
            <Input
              sx={{
                backgroundColor: "white",
                height: "40px",
                borderRadius: 0,
                borderColor: "inputBorder",
                width: "300px",
                mt: "10px",
                mb: "20px",
                border: errorState.label
                  ? "1px firebrick solid"
                  : "1px solid #E8E8E8",
              }}
              type="text"
              data-testid="add-content-label"
              id="add-content-label"
              name="add-content-label"
              placeholder=""
              value={state.label}
              onChange={(e: { target: { value: string } }) => {
                updateState({ ...state, label: e.target.value });
                updateErrorState({ ...errorState, label: false });
              }}
            />
          </Box>
          <Box
            sx={{
              width: "300px",
              ml: "20px",
              border: errorState.document_url ? "1px firebrick solid" : "unset",
            }}
          >
            <InputLabel
              customSX={{
                textAlign: "left",
                width: "300px",
              }}
              title="File"
              subtitle=" *"
            />
            <input
              style={{ width: "100%", color: "#444", marginTop: "7px" }}
              type="file"
              onChange={handleFileChange}
            />
          </Box>

          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "5px",
              height: "40px",
              width: "100px",
              fontSize: "14px",
            }}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
