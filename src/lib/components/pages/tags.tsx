/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SessionType,
  SetLoadingType,
  UserType,
  TagsStateType,
  HideNotificationType,
  ShowNotificationType,
  TagItemType,
} from "../../../lib/types";
import { CaretRight } from "phosphor-react";
import {
  getTags,
  updateTagsAndPrompts,
  addTagsAndPrompts,
  deleteTagsAndPrompts,
} from "../../../utils/api-helper";
import { Title, Description } from "../../../lib/components/TextItems";
import { BasicReportExample, SuitabilityReportExample } from "../reports/tags";
import { TagAndPromptItem } from "../reports/createReport";
import { v4 as uuidv4 } from "uuid";

const defaultState = {
  showSuccess: false,
  authToken: "",
  newLabel: "",
  user_id: "",
  customFilename: "",
  label: "",
  mode: "start", // start | add
  searchLabel: "",
  searchEmbedded: "all",
  searchFileType: "all",
  filters: false,
  tagsFound: true,
  tagsToEdit: {
    userId: "",
    label: "",
    id: "",
    tags: [],
    authToken: "",
  },
};

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

export const TableHeader = () => (
  <Flex
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E2E8F0",
      height: "50px",
      fontSize: "15px",
      p: "0 20px 10px",
      backgroundColor: "#F8F8F8",
      color: "#444",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    }}
  >
    <Box
      sx={{
        textAlign: "left",
        pl: "27px",
        width: "100%",
        paddingTop: "15px",
        borderRight: "1px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Label
    </Box>

    <Box
      style={{
        textAlign: "center",
        width: "130px",
        paddingTop: "15px",
        borderRight: "0px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Amount
    </Box>
  </Flex>
);

const TableItem = ({
  item,
  i,
  authToken,
  setLoading,
  userId,
  state,
  updateState,
  updateTagsInView,
}: {
  item: any;
  i: number;
  authToken: string;
  setLoading: SetLoadingType;
  userId: string;
  state: any;
  updateState: any;
  updateTagsInView: any;
}) => {
  const { label, id, tags } = item;
  const isEven = i % 2 === 0;

  return (
    <Flex
      sx={{
        p: "0 20px",
        borderBottom: "1px solid #E2E8F0",
        minHeight: "70px",
        backgroundColor: !isEven ? "#F8F8F8" : "white",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Flex
        sx={{
          flex: 1,
          height: "100px",
          fontSize: "14px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            textAlign: "left",
            ml: "30px",
            width: "100%",
            borderRight: "1px solid #E2E8F0",
            cursor: "pointer",
          }}
          onClick={() => {
            updateState({
              ...state,
              mode: "edit",
              tagsToEdit: { userId, label, id, tags, authToken },
            });
            updateTagsInView(tags);
          }}
        >
          <Paragraph
            sx={{ fontWeight: "500", mr: "20px", textTransform: "capitalize" }}
          >
            {label}{" "}
          </Paragraph>
          <CaretRight size={17} />
        </Flex>

        <Box
          style={{
            textAlign: "center",
            width: "130px",
            borderRight: "0px solid #E2E8F0",
            color: "green",
          }}
        >
          {tags?.length}
        </Box>
      </Flex>
    </Flex>
  );
};

const TagComponent = ({
  user,
  session,
  setLoading,
  hideNotification,
  showNotification,
  loading,
}: {
  user: UserType;
  session: SessionType;
  setLoading: SetLoadingType;
  hideNotification: HideNotificationType;
  showNotification: ShowNotificationType;
  loading: boolean;
}) => {
  const [state, updateState] = useState<TagsStateType>(defaultState);
  const [tags, updateTags] = useState<TagItemType[]>([]);
  const [tagsInView, updateTagsInView] = useState<TagItemType[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data } = await getTags(user._id, session?.authToken);

      let TagsToDisplay = [
        { id: "0", label: "Basic Example", tags: BasicReportExample },
        {
          id: "1",
          label: "Suitability Report Example",
          tags: SuitabilityReportExample,
        },
      ];

      const UsersTags = data?.map((item: TagItemType) => ({
        id: item._id,
        label: item.label,
        tags: item.tags,
      }));
      updateTags([...UsersTags, ...TagsToDisplay]);

      updateState({
        ...state,
        authToken: session?.authToken,
        user_id: user?._id,
        tagsFound: data?.length > 0,
      });
      setLoading(false);
    })();
  }, []);

  if (loading) return;
  return (
    <Box
      className="sectionContainer"
      sx={{
        width: "900px",
        opacity: 1,
        mt: "30px",
        minHeight: "600px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        ml: "0px",
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
        position: "relative",
      }}
    >
      <Box sx={{ border: "0px red solid", mb: "40px", width: "800px" }}>
        <Title text="Tags & Prompts" />
        <Description
          text={`
          This is where you can view, create and edit collections of tags & prompts, ready for when you generate a report.`}
        />
      </Box>

      {state.mode === "start" && tags?.length > 0 && (
        <>
          <Box
            style={{
              marginTop: "10px",
              border: "1px #E2E8F0 solid",
              width: "800px",
              minHeight: "50px",
              marginBottom: "20px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <TableHeader />
            {tags?.map((item: TagItemType, i: number) => (
              <TableItem
                item={item}
                i={i}
                key={`${item.label}-${i}`}
                authToken={session?.authToken}
                setLoading={setLoading}
                userId={user._id}
                state={state}
                updateState={updateState}
                updateTagsInView={updateTagsInView}
              />
            ))}
          </Box>
        </>
      )}
      {state.mode === "start" && (
        <Flex sx={{ justifyContent: "flex-start" }}>
          <Paragraph
            sx={{
              cursor: "pointer",
              color: "green",
              fontWeight: "500",
              fontSize: "14px",
            }}
            onClick={() => {
              updateState({ ...state, mode: "add" });
            }}
          >
            + Create tags & prompts
          </Paragraph>
        </Flex>
      )}

      {state.mode === "add" && (
        <Flex sx={{ flexDirection: "column" }}>
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "20px",
              height: "40px",
              width: "100px",
              fontSize: "14px",
            }}
            onClick={async () => {
              updateState({ ...state, newLabel: "", mode: "start" });
              updateTagsInView([]);
            }}
          >
            Go Back
          </Button>
          <Paragraph
            sx={{
              fontSize: "18px",
              color: "#777",
              textAlign: "left",
              mb: "20px",
            }}
            onClick={() => updateState({ ...state, mode: "start" })}
          >
            Create New set of Tags & prompts
          </Paragraph>

          <Box sx={{ width: "140px" }}>
            <InputLabel
              customSX={{
                textAlign: "left",
                width: "140px",
                fontWeight: "500",
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
                mt: "0px",
                mb: "50px",
                border: "1px solid lightgrey",
                fontSize: "14px",
                color: "#555",
                fontStyle: "normal",
              }}
              type="text"
              data-testid="tagName"
              id="tagName"
              name="tagName"
              placeholder=""
              value={state.newLabel}
              onChange={(e) => {
                updateState({ ...state, newLabel: e.target.value });
              }}
            />
          </Box>
          {tagsInView?.map((item: any, i) => (
            <TagAndPromptItem //@ts-ignore
              key={`${item.uuid}`} //@ts-ignore
              uuid={item.uuid}
              data={item.data}
              tag={item.tag}
              prompt={item.prompt}
              tags={tagsInView}
              updateTags={updateTagsInView}
            />
          ))}
          <Flex sx={{ justifyContent: "flex-start" }}>
            <Paragraph
              sx={{
                cursor: "pointer",
                color: "green",
                fontWeight: "500",
                fontSize: "14px",
              }}
              onClick={() => {
                let newTags = [...tagsInView];
                //@ts-ignore
                newTags.push({ tag: "", data: "", prompt: "", uuid: uuidv4() });
                updateTagsInView(newTags);
              }}
            >
              + add tag
            </Paragraph>
          </Flex>
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "50px",
              alignSelf: "flex-start",
              mb: "20px",
              height: "40px",
              width: "140px",
              fontSize: "14px",
            }}
            onClick={async () => {
              const { user_id, newLabel, authToken } = state;

              if (
                user_id &&
                authToken &&
                newLabel !== "" &&
                tagsInView?.length > 0
              ) {
                setLoading(true);
                await addTagsAndPrompts(
                  user_id,
                  newLabel,
                  tagsInView,
                  authToken
                );
                window.location.reload();
              } else {
                //TODO SHOW ERROR MSG
                console.log("show error msg");
              }
            }}
            data-testid="save-btn"
          >
            Save Tags
          </Button>
        </Flex>
      )}

      {state.mode === "edit" && (
        <Flex sx={{ flexDirection: "column", mb: "100px" }}>
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-end",
              mb: "20px",
              height: "40px",
              width: "100px",
              fontSize: "14px",
            }}
            onClick={async () => {
              updateState({ ...state, newLabel: "", mode: "start" });
              updateTagsInView([]);
            }}
          >
            Go Back
          </Button>
          <Paragraph
            sx={{
              fontSize: "18px",
              color: "#777",
              textAlign: "left",
              mb: "20px",
            }}
            onClick={() => updateState({ ...state, mode: "start" })}
          >
            {state.tagsToEdit.label} ({tagsInView?.length})
          </Paragraph>

          {tagsInView?.map((item: any, i) => (
            <TagAndPromptItem //@ts-ignore
              key={`${item.uuid}`} //@ts-ignore
              uuid={item.uuid}
              data={item.data}
              tag={item.tag}
              prompt={item.prompt}
              tags={tagsInView}
              updateTags={updateTagsInView}
            />
          ))}
          {!["0", "1", "2"].includes(state.tagsToEdit.id) && (
            <>
              <Flex sx={{ justifyContent: "flex-start" }}>
                <Paragraph
                  sx={{
                    cursor: "pointer",
                    color: "green",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                  onClick={() => {
                    let newTags = [...tagsInView];

                    newTags.push({
                      //@ts-ignore
                      tag: "",
                      data: "",
                      prompt: "",
                      uuid: uuidv4(),
                    });
                    updateTagsInView(newTags);
                  }}
                >
                  + add tag
                </Paragraph>
              </Flex>

              <Button
                variant="primary"
                sx={{
                  color: "white",
                  cursor: "pointer",
                  mt: "30px",
                  alignSelf: "flex-start",
                  mb: "20px",
                  height: "40px",
                  width: "140px",
                  fontSize: "14px",
                }}
                onClick={async () => {
                  setLoading(true);
                  const { authToken, id, label } = state.tagsToEdit;
                  await updateTagsAndPrompts(id, label, tagsInView, authToken);

                  window.location.reload();
                }}
              >
                Update Tags
              </Button>

              <Paragraph
                sx={{
                  color: "firebrick",
                  alignSelf: "flex-end",
                  mt: "100px",
                  mb: "100px",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
                onClick={async () => {
                  setLoading(true);
                  const { authToken } = state;
                  const { id } = state?.tagsToEdit;
                  await deleteTagsAndPrompts(id, authToken);
                  window.location.reload();
                }}
              >
                delete tags
              </Paragraph>
            </>
          )}
        </Flex>
      )}
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
  hideNotification: () => dispatch({ type: "HIDE_NOTIFICATION" }),
  showNotification: (data: any) =>
    dispatch({ type: "SHOW_NOTIFICATION", data }),
});

const mapStateToProps = (state: { account: { loading: boolean } }) => {
  const { account } = state;
  return {
    loading: account.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TagComponent);
