/* eslint-disable react-hooks/exhaustive-deps */
import { Paragraph, Flex, Box, Input, Button, Textarea } from "theme-ui";
import { v4 as uuidv4 } from "uuid";
import {
  DashboardStateType,
  AddContentErrorStateType,
  UserType,
  SetLoadingType,
  SessionType,
} from "@/lib/types";
import { XCircle } from "phosphor-react";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { refineTheText } from "@/utils/api-helper";

const embedRefinedText = async (
  user_id: string,
  document_id: string,
  textToEmbed: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/embed-refined-text",
    data: {
      user_id,
      document_id,
      textToEmbed,
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

export const RefineText = ({
  state,
  setLoading,
  updateState,
  user,
  session,
  hideNotification,
  showNotification,
}: {
  setLoading: SetLoadingType;
  state: {
    user_id: string;
    document_id: string;
    refineText: string;
    isEmbedded: boolean;
    originalText: string;
  };
  updateState: (
    value: SetStateAction<{
      user_id: string;
      document_id: string;
      refineText: string;
      isEmbedded: boolean;
      originalText: string;
    }>
  ) => void;
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
  useEffect(() => {
    setLoading(false);
  }, []);

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
        flexDirection: "column",
      }}
    >
      <InputLabel
        customSX={{
          textAlign: "left",
          width: "300px",
          mt: "10px",
          mb: "10px",
        }}
        title="Refined text extracted from your image"
        subtitle=" *"
      />
      <Textarea
        id="chat-input"
        sx={{
          border: "0px solid red",
          outline: "0px",
          mt: "10px",
          p: "20px",
          fontSize: "14px",
          minHeight: "500px",
          height: "auto",
          width: "100%",
          backgroundColor: "white",
        }}
        placeholder="Type your question..."
        value={state?.refineText}
        onChange={(e) => updateState({ ...state, refineText: e.target.value })}
      />

      <Flex>
        {!state?.isEmbedded && (
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "70px",
              mr: "25px",
              mb: "10px",
              height: "40px",
              width: "140px",
              fontSize: "14px",
              zIndex: 9999,
            }}
            onClick={async () => {
              if (state?.refineText !== "") {
                setLoading(true);

                await embedRefinedText(
                  state?.user_id,
                  state?.document_id,
                  state?.refineText,
                  session?.authToken
                );

                window.location.assign("/documents");
              }
            }}
          >
            Save & Embed
          </Button>
        )}
        <Button
          variant="primary"
          sx={{
            color: "#444",
            background: "transparent",
            border: "1px solid #444",
            cursor: "pointer",
            mt: "70px",
            mb: "10px",
            height: "40px",
            width: "140px",
            fontSize: "14px",
            zIndex: 9999,
          }}
          onClick={async () => {
            window.location.assign("/documents");
          }}
        >
          Go Back
        </Button>
      </Flex>

      {!state?.isEmbedded && (
        <Paragraph
          sx={{
            mt: "50px",
            textAlign: "left",
            fontSize: "15px",
            color: "#555",
            fontWeight: "300",
            cursor: "pointer",
          }}
          onClick={async () => {
            setLoading(true);
            const { originalText, document_id } = state;
            await refineTheText(originalText, document_id, session?.authToken);
            window.location.reload();
          }}
        >
          Click HERE if you would like to completely regenerate this text .
        </Paragraph>
      )}
    </Flex>
  );
};
