import { Paragraph, Flex, Box, Input, Button } from "theme-ui";
import { AddContentStateType, AddContentErrorStateType } from "@/lib/types";
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
  updateState,
  errorState,
  updateErrorState,
  handleFileChange,
  handleUpload,
  router,
}: {
  state: AddContentStateType;
  updateState: (value: SetStateAction<AddContentStateType>) => void;
  errorState: AddContentErrorStateType;
  updateErrorState: Dispatch<SetStateAction<AddContentErrorStateType>>;
  handleFileChange: ChangeEventHandler<HTMLInputElement>;
  handleUpload: MouseEventHandler<HTMLButtonElement>;
  router: AppRouterInstance;
}) => (
  <Box
    className="sectionContainer"
    sx={{
      width: "400px",
      maxWidth: "400px",
      opacity: 1,
      mt: "100px",
      minHeight: "600px",
      textAlign: "center",
      backgroundColor: "transparent",
      border: "0px solid blue",
      ml: "50px",
      "@media screen and (max-width: 1275px)": { width: "600px" },
      "@media screen and (max-width: 700px)": {
        width: "100%",
        border: "0px solid firebrick",
        ml: "auto",
        mr: "auto",
      },
      "@media screen and (max-width: 550px)": {
        width: "250px",
        ml: "60px",
      },
    }}
  >
    <Paragraph
      sx={{
        textAlign: "center",
        fontWeight: "500",
        fontSize: "19px",
        mb: "30px",
        color: "#444",
      }}
    >
      Add a document to your library
    </Paragraph>

    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputLabel
        customSX={{
          textAlign: "left",
          width: "400px",
        }}
        title="Label"
        subtitle=" *"
      />
      <Input
        sx={{
          backgroundColor: "white",
          height: "45px",
          borderRadius: 0,
          borderColor: "inputBorder",
          width: "400px",
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

      <Flex
        sx={{
          alignItems: "flex-start",
          width: "400px",
          mb: "20px",
          border: errorState.document_url ? "1px firebrick solid" : "unset",
        }}
      >
        <input
          style={{ width: "100%", color: "#444" }}
          type="file"
          onChange={handleFileChange}
        />
      </Flex>

      {errorState?.error_msg !== "" && (
        <Paragraph sx={{ mb: "20px", color: "firebrick" }}>
          {errorState?.error_msg}
        </Paragraph>
      )}
      <Button
        variant="primary"
        sx={{
          color: "white",
          cursor: "pointer",
          mt: "0px",
          alignSelf: "flex-end",
          mr: "0px",
          width: "150px",
        }}
        onClick={handleUpload}
      >
        Create
      </Button>
      <Button
        variant="primary"
        sx={{
          color: "#444",
          border: "1px solid grey",
          backgroundColor: "white",
          background: "white",
          cursor: "pointer",
          mt: "20px",
          alignSelf: "flex-end",
          mr: "0px",
          width: "150px",
        }}
        onClick={() => router.push(`/dashboard`)}
      >
        Cancel
      </Button>
    </Flex>
  </Box>
);
