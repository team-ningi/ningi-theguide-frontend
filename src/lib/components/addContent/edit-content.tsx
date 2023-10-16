/* eslint-disable react-hooks/exhaustive-deps */
import { Paragraph, Flex, Box, Input, Button, Image } from "theme-ui";
import {
  EditContentStateType,
  AddContentErrorStateType,
  SetLoadingType,
  UserType,
  SessionType,
} from "@/lib/types";
import "react-quill/dist/quill.snow.css";
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import { getContentById } from "@/utils/api-helper";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useParams } from "next/navigation";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const InputLabel = ({
  title,
  subtitle,
  customSX = {},
  darkMode,
}: {
  title: string;
  subtitle: string;
  customSX: {};
  darkMode: boolean;
}) => (
  <Paragraph
    sx={{
      color: darkMode ? "white" : "#444",
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

export const EditForm = ({
  state,
  updateState,
  errorState,
  updateErrorState,
  handleFileChange,
  handleEdit,
  darkMode,
  router,
  setLoading,
  session,
  user,
}: {
  state: EditContentStateType;
  updateState: (value: SetStateAction<EditContentStateType>) => void;
  errorState: AddContentErrorStateType;
  updateErrorState: Dispatch<SetStateAction<AddContentErrorStateType>>;
  handleFileChange: ChangeEventHandler<HTMLInputElement>;
  handleEdit: MouseEventHandler<HTMLButtonElement>;
  darkMode: boolean;
  router: AppRouterInstance;
  setLoading: SetLoadingType;
  user: UserType;
  session: SessionType;
}) => {
  const params = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await getContentById(
        `${params?.id}`,
        session?.authToken
      );

      if (data && data?.length > 0) {
        updateState({ ...state, data: data[0] });

        if (data[0]?.user_id !== state?.user_id) {
          router.push(`/${params.type}s`);
        }
      } else {
        router.push(`/${params.type}s`);
      }

      setLoading(false);
    })();
  }, []);

  if (state?.data?._id !== "") {
    return (
      <Box
        className="sectionContainer"
        sx={{
          width: "400px",
          maxWidth: "400px",
          opacity: 1,
          mt: "20px",
          mb: "100px",
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
            fontWeight: "600",
            fontSize: "19px",
            mb: "30px",
            color: darkMode ? "white" : "#444",
          }}
        >
          Edit {state?.data?.type}
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
            title="Title"
            subtitle=" *"
            darkMode={darkMode}
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
              border: errorState.title
                ? "1px firebrick solid"
                : "1px solid #E8E8E8",
            }}
            type="text"
            data-testid="add-content-title"
            id="add-content-title"
            name="add-content-title"
            placeholder=""
            value={state.data?.title}
            onChange={(e: { target: { value: string } }) => {
              updateState({
                ...state,
                data: { ...state?.data, title: e.target.value },
              });
              updateErrorState({ ...errorState, title: false });
            }}
          />
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "400px",
            }}
            title="Content"
            subtitle=" *"
            darkMode={darkMode}
          />
          <Box
            sx={{
              height: "300px",
              width: "400px",
              marginBottom: "35px",
              backgroundColor: "white",
              outline: "unset",
              border: errorState.content
                ? "1px firebrick solid"
                : "0px solid #E8E8E8",
            }}
          >
            <ReactQuill
              theme="snow"
              style={{
                height: "255px",
                width: "100%",
                border: "0px solid white !important",
                outline: "0px solid white !important",
              }}
              value={state.data?.content}
              onChange={(val: string) =>
                updateState({
                  ...state,
                  data: { ...state?.data, content: val },
                })
              }
            />
          </Box>
          {state?.change_image && (
            <>
              <Paragraph
                sx={{
                  fontSize: "13px",
                  color: "#444",
                  mb: "10px",
                  textAlign: "left",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                onClick={() => updateState({ ...state, change_image: false })}
              >
                <CaretLeft
                  style={{ paddingTop: "8px", fontWeight: "600" }}
                  size={19}
                />
                Keep existing image
              </Paragraph>
              <Flex
                sx={{
                  alignItems: "flex-start",
                  width: "400px",
                  mb: "20px",
                  border: errorState.image_url
                    ? "1px firebrick solid"
                    : "unset",
                }}
              >
                <input
                  style={{ width: "100%", color: darkMode ? "white" : "#444" }}
                  type="file"
                  onChange={handleFileChange}
                />
              </Flex>
            </>
          )}

          {!state?.change_image && (
            <>
              <Paragraph
                sx={{
                  fontSize: "14px",
                  color: "#444",
                  mb: "10px",
                  textAlign: "left",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                onClick={() => updateState({ ...state, change_image: true })}
              >
                Replace image
                <CaretRight
                  style={{ paddingTop: "8px", fontWeight: "600" }}
                  size={19}
                />
              </Paragraph>
              <Image
                sx={{ width: "400px", height: "auto" }}
                src={state.data?.image_url}
                alt="content-image"
              />
            </>
          )}

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
              mt: "40px",
              alignSelf: "flex-end",
              mr: "0px",
              width: "150px",
            }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            sx={{
              color: darkMode ? "white" : "#444",
              border: "1px solid grey",
              backgroundColor: "transparent",
              cursor: "pointer",
              mt: "20px",
              alignSelf: "flex-end",
              mr: "0px",
              width: "150px",
            }}
            onClick={() => router.push(`/${state?.data?.type}s`)}
          >
            Go back
          </Button>
        </Flex>
      </Box>
    );
  }
};
