/* eslint-disable react-hooks/exhaustive-deps */
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
import axios from "axios";
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.NEXT_PUBLIC_AWS_KEY_REGION,
});

const supportedDocTypes = ["txt", "pdf", "docx"];

const defaultErrorState = {
  file_url: false,
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
  },
  hideNotification: () => {
    type: string;
  },
  showNotification: (data: any) => {
    type: string;
    data: any;
  }
) => {
  let errors = 0;
  const errObject = {
    label: false,
    content: false,
    file_url: false,
  };

  if (!state.label || state.label.length < 3) {
    errors++;
    errObject.label = true;
  }

  if (!file) {
    errors++;
    errObject.file_url = true;
  }

  if (errors > 0) {
    updateErrorState({
      ...errorState,
      ...errObject,
    });

    console.log({ errObject });

    showNotification({
      text: "There are errors in your data.",
      type: "error",
    });
    setTimeout(() => hideNotification(), 3000);
    await setLoading(false);
  } else {
    updateErrorState({ ...defaultErrorState });
  }

  return errors < 1;
};

const addTemplate = async (
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
    url: "/api/db/create-template",
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
  hideNotification,
  showNotification,
}: {
  setLoading: SetLoadingType;
  state: DashboardStateType;
  updateState: (value: SetStateAction<DashboardStateType>) => void;
  user: UserType;
  session: SessionType;
  hideNotification: () => {
    type: string;
  };
  showNotification: (data: any) => {
    type: string;
    data: any;
  };
}) => {
  const [errorState, updateErrorState] =
    useState<AddContentErrorStateType>(defaultErrorState);
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<any>(null);

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
      e.preventDefault();
      if (state.label === "") return;
      await setLoading(true);
      const validatedForm = await validateForm(
        state,
        errorState,
        updateErrorState,
        file,
        setLoading,
        hideNotification,
        showNotification
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

        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        const { data } = await addTemplate(
          state?.user_id,
          state?.label,
          `${process.env.NEXT_PUBLIC_AWS_CDN_URL}/${savedFileName}`,
          fileType,
          orginalFileName,
          savedFileName,
          customFileName,
          session?.authToken
        );

        const template = data?.template || {};
        const { user_id, file_url, _id, file_type } = template;

        window.location.reload();
      }
    } catch (err) {
      showNotification({
        text: "Your new template has NOT been saved.",
        type: "error",
      });
      setTimeout(() => hideNotification(), 3000);

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
        mt: "0px",
        minHeight: "40px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        "@media screen and (max-width: 1275px)": { width: "600px" },
      }}
    >
      {state?.mode === "start" && (
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            height: "40px",
          }}
        >
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "10px",
              height: "40px",
              width: "140px",
              fontSize: "14px",
              zIndex: 9999,
            }}
            onClick={() => updateState({ ...state, mode: "add" })}
          >
            Add Template
          </Button>
        </Flex>
      )}

      {state?.mode === "add" && (
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            height: "90px",
            mt: "30px",
            border: "0px solid red",
            position: "relative",
          }}
        >
          <Paragraph
            sx={{
              position: "absolute",
              top: "-20px",
              right: 0,
              fontWeight: "400",
              color: "#555",
              cursor: "pointer",
              zIndex: 999,
            }}
            onClick={() => {
              updateState({ ...state, mode: "start" });
              updateErrorState({ ...defaultErrorState });
            }}
          >
            <XCircle size={18} weight="fill" />
          </Paragraph>
          <Box
            sx={{
              border: errorState.label ? "1px firebrick solid" : "unset",
            }}
          >
            <InputLabel
              customSX={{
                textAlign: "left",
                width: "300px",
                mt: "20px",
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

                mb: "20px",
                border: "1px solid #E8E8E8",
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
              width: "380px",
              ml: "20px",
              border: errorState.file_url ? "1px firebrick solid" : "unset",
            }}
          >
            <InputLabel
              customSX={{
                textAlign: "left",
                width: "300px",
                mt: "20px",
              }}
              title="File (pdf, txt, docx)"
              subtitle=" *"
            />
            <input
              style={{ width: "100%", color: "#444" }}
              type="file"
              onChange={handleFileChange}
            />
          </Box>
          <Box
            sx={{
              height: "40px",
              width: "100px",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "20px",
            }}
          >
            <Button
              variant="primary"
              sx={{
                color: "white",
                cursor:
                  state.label === "" ? "not-allowed !important" : "pointer",
                height: "40px",
                width: "100px",
                fontSize: "14px",
              }}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
