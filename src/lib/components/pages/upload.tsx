/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex } from "theme-ui";
import { v4 as uuidv4 } from "uuid";
import {
  ChangeEventHandler,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { S3 } from "aws-sdk";
import { connect } from "react-redux";
import { AddNewForm } from "@/lib/components/addContent/add-new-document";
import { BackBtn } from "@/lib/components/items";
import { Dispatch } from "redux";
import {
  SetLoadingType,
  UserType,
  AddContentErrorStateType,
  AddContentStateType,
  SessionType,
} from "@/lib/types";
import axios from "axios";

const s3 = new S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_KEY_REGION,
});

const defaultState = {
  customFilename: "",
  user_id: "",
  label: "",
  showSuccess: false,
};

const defaultErrorState = {
  document_url: false,
  label: false,
  customFilename: false,
  error_msg: "",
};

const validateForm = async (
  state: AddContentStateType,
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

  if (!state.label || state.label.length < 5) {
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

const UploadComponent = ({
  user,
  setLoading,
  session,
}: {
  user: UserType;
  setLoading: SetLoadingType;
  session: SessionType;
}) => {
  const [state, updateState] = useState(defaultState);
  const [errorState, updateErrorState] =
    useState<AddContentErrorStateType>(defaultErrorState);
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);

  const router = useRouter();

  useEffect(() => {
    setUpload(null);
  }, [file]);

  useEffect(() => {
    updateState({ ...state, user_id: user[0]?._id });
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
          if (["txt", "pdf"].includes(file_type)) {
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
          showSuccess: true,
        });
        await setLoading(false);
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
    <Box
      className="sectionContainer"
      sx={{
        width: "900px",
        opacity: 1,
        mt: "20px",
        minHeight: "600px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        ml: "50px",
        "@media screen and (max-width: 1275px)": { width: "600px" },
        "@media screen and (max-width: 700px)": {
          width: "100%",
          border: "0px solid red",
          ml: "auto",
          mr: "auto",
        },
        "@media screen and (max-width: 550px)": {
          width: "250px",
          ml: "60px",
        },
      }}
    >
      {!state?.showSuccess && (
        <AddNewForm
          state={state}
          updateState={updateState}
          errorState={errorState}
          updateErrorState={updateErrorState}
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
          router={router}
        />
      )}

      {state?.showSuccess && (
        <>
          <Paragraph sx={{ mt: "100px", color: "green" }}>
            Your content has been successfully created 🚀
          </Paragraph>
          <BackBtn url={`/dashboard`} router={router} />
        </>
      )}
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; discussions: {} };
}) => {
  const { account } = state;
  return {
    discussions: account.discussions,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent);
