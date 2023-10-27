// @ts-nocheck
import { Box, Flex, Paragraph, Image, Textarea, Button } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import ReactSelect from "react-select";
import { Spinner } from "./spinner";
import Identicon from "identicon.js";
import { PaperPlaneTilt } from "phosphor-react";
import {
  chat,
  getUserDocuments,
  getUserHistory,
  createHistory,
  updateHistory as updateHistoryAPI,
} from "@/utils/api-helper";

type ChatItem = {
  question: string;
  answer: string;
};

const InputLabel = ({ title, subtitle, customSX = {} }: any) => (
  <Paragraph
    sx={{
      fontSize: "13px",
      color: "#555",
      mb: "3px",
      ml: "2px",
      mt: [0, "5px"],
      ...customSX,
    }}
  >
    {title}
    <span style={{ color: "red" }}>{subtitle}</span>
  </Paragraph>
);

const defaultState = {
  loading: false,
  isReady: false,
  text: "",
  documentIds: [],
};

const callChatAPI = async (
  state: any,
  updateState: any,
  history: any,
  updateHistory: any,
  session: any,
  user_id: string
) => {
  const { text, documentIds } = state;

  if (!documentIds?.length) {
    // TODO
    // show MSG ... 'select at least one doc'
    return;
  }
  updateState({ ...state, loading: true });

  const { data } = await chat(text, documentIds, session?.authToken);
  const { question, answer } = data;

  const updatedHistory = [
    ...history,
    { document_ids: documentIds, question, answer },
  ];

  if (!history?.length) {
    await createHistory(
      user_id,
      documentIds,
      question,
      answer,
      session?.authToken
    );
  } else {
    await updateHistoryAPI(user_id, updatedHistory, session?.authToken);
  }

  updateHistory(updatedHistory);

  updateState({ ...state, loading: false, text: "" });
};

const Item = ({
  item,
  type,
  documents,
}: {
  item: ChatItem;
  type: string;
  documents: any;
}) => (
  <Flex
    sx={{
      alignSelf: type === "question" ? "flex-start" : "flex-end",
      p: "15px 10px 15px 15px ",
      width: "400px",
      textAlign: type === "question" ? "left" : "right",
      backgroundColor: type === "question" ? "white" : "#9999ff",
      background:
        type === "question"
          ? "white"
          : "linear-gradient(180deg, rgba(139,132,255,1) 10%, rgba(73,64,255,1) 100%)",
      borderRadius: "20px",
      borderBottomLeftRadius: type === "question" ? "0" : "20px",
      borderBottomRightRadius: type === "question" ? "20px" : "0",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      height: "auto",
      mb: "20px",
      justifyItems: "stretch",
    }}
  >
    {type === "question" && (
      <Box
        sx={{
          width: "30px",
          height: "30px",
          border: "0px solid green",
          mr: "10px",
          mt: "-2px",
        }}
      >
        <Image
          alt="user avatar"
          width="25"
          height="25"
          src={`data:image/png;base64,${new Identicon(
            "1701232456563689454891",
            50
          )}`}
        />
      </Box>
    )}

    <Paragraph
      sx={{
        width: "100%",
        fontWeight: "500",
        fontSize: "14px",
        color: type === "question" ? "#444" : "white",
        minHeight: "50px",
        mb: "10px",
        border: "0px solid red",
        height: "max-content",
      }}
    >
      {type === "question" ? `${item?.question} ?` : item?.answer}
      {type === "question" && (
        <span style={{ fontSize: "11px", color: "grey" }}>
          <br />
          {item?.document_ids?.map((doc) => {
            const Doc = documents?.find((el) => el?._id === doc);
            return Doc?.label || Doc?.saved_filename;
          })}
        </span>
      )}
    </Paragraph>

    {type === "answer" && (
      <Box
        sx={{
          width: "30px",
          height: "30px",
          border: "0px solid red",
          ml: "10px",
          mt: "-5px",
        }}
      >
        <Image
          src="/ningi-logo-light-small.png"
          width="30px"
          height="auto"
          alt=" logo"
        />
      </Box>
    )}
  </Flex>
);

const ChatItem = ({
  item,
  i,
  documents,
}: {
  item: any;
  i: any;
  documents: any;
}) => (
  <Flex
    key={`chat-${i}`}
    sx={{
      flexDirection: "column",
      mb: "0px",
      mt: i === 0 ? "0" : "0px",
    }}
  >
    <Item item={item} type="question" documents={documents} />
    <Item item={item} type="answer" documents={documents} />
  </Flex>
);

const ChatInterface = ({ session, user }: { session: any; user: any }) => {
  const [history, updateHistory] = useState([]);
  const [documents, updateDocuments] = useState([]);
  const [state, updateState] = useState(defaultState);
  const bottomRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (!state?.isReady) {
        const { _id } = user;
        const { authToken } = session;
        const { data: docs } = await getUserDocuments(_id, authToken, true);
        updateDocuments(docs);
        let selectedDocIds = [];

        const { data: history } = await getUserHistory(_id, authToken);
        const historyArr = history?.history || [];
        if (historyArr?.length) {
          updateHistory(historyArr);

          selectedDocIds = historyArr[historyArr.length - 1]?.document_ids;
        }
        updateState({ ...state, isReady: true, documentIds: selectedDocIds });
      }
    })();
  });

  useEffect(() => {
    if (history?.length) {
      bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <Flex sx={{ width: "870px", margin: "60px 0 0 0" }}>
      {state.loading && <Spinner />}
      {state.isReady && (
        <>
          <Flex
            sx={{
              width: "650px",
              border: "0px blue solid",
              backgroundColor: "transparent",
              borderRadius: "6px",
              minHeight: "500px",
              margin: "0",
              flexDirection: "column",
              justifyContent: "space-between",
              p: "0px",
            }}
          >
            <Box>
              <InputLabel
                customSX={{ textAlign: "left", width: "300px" }}
                title="Select Documents"
                subtitle=""
              />
              <ReactSelect
                value={documents.map((doc) => {
                  if (state.documentIds?.includes(doc?._id)) {
                    return {
                      value: doc?._id,
                      label: doc?.label ? doc?.label : doc?.saved_filename,
                    };
                  }
                })}
                onChange={(values: any) => {
                  const idsOnly = values?.map((doc) => doc?.value);
                  updateState({
                    ...state,
                    documentIds: idsOnly,
                  });
                }}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: "100%",
                    outline: "none",
                    minHeight: "45px",
                    marginBottom: "20px",
                  }),
                }}
                isMulti={true}
                options={documents?.map((doc) => {
                  return {
                    value: doc?._id,
                    label: doc?.label ? doc?.label : doc?.saved_filename,
                  };
                })}
              />
            </Box>
            <Flex
              sx={{
                border: "0px solid red",
                p: "10px 5px",
                backgroundColor: "transparent",
                height: "460px",
                borderRadius: "5px",
                flexDirection: "column",
                overflow: "scroll",
                pb: "20px",
              }}
            >
              {history.map((item: ChatItem, i: number) => (
                <ChatItem
                  key={`chat-item-${i}`}
                  item={item}
                  i={i}
                  documents={documents}
                />
              ))}
              {!history?.length && (
                <Paragraph
                  sx={{
                    color: "#888",
                    fontWeight: "500",
                    mt: "200px",
                    width: "100%",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Select a document & ask a question 💬 🚀
                  <br /> you may select upto 10 documents
                </Paragraph>
              )}
              <Box ref={bottomRef} id="scrollToDiv" sx={{ height: 1 }} />
            </Flex>

            <Flex
              sx={{
                height: "70px",
                mt: "20px",
                flexDirection: "row",
                backgroundColor: "white",
                border: "0px solid red",
                borderRadius: "20px",
              }}
            >
              <Textarea
                id="chat-input"
                sx={{
                  border: "0px solid red",
                  outline: "0px",
                  ml: "8px",
                  mt: "10px",
                  mr: "10px",
                  height: "50px",
                  width: "100%",
                  backgroundColor: "white",
                  resize: "none",
                }}
                placeholder="Type your question..."
                value={state?.text}
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {
                    if (state?.text === "") return;
                    await callChatAPI(
                      state,
                      updateState,
                      history,
                      updateHistory,
                      session,
                      user?._id
                    );
                  }
                }}
                onChange={(e) =>
                  updateState({ ...state, text: e.target.value })
                }
              />
              <Flex
                sx={{
                  width: "50px",
                  border: "0px green solid",
                  mr: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: state?.text === "" ? "lightgrey" : "#333366",
                }}
              >
                <Flex
                  sx={{
                    width: "50px",
                    height: "40px",
                    border: ` 1px ${
                      state?.text !== "" ? "lightgrey" : "#F9F9F9"
                    } solid`,
                    borderRadius: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      state?.text === ""
                        ? "#F9F9F9"
                        : "linear-gradient(180deg, rgba(139,132,255,1) 10%, rgba(73,64,255,1) 100%)",
                    cursor: state?.text === "" ? "not-allowed" : "pointer",
                    color: state?.text === "" ? "inherit" : "white",
                  }}
                  onClick={async () => {
                    if (state?.text !== "") {
                      await callChatAPI(
                        state,
                        updateState,
                        history,
                        updateHistory,
                        session,
                        user?._id
                      );
                    }
                  }}
                >
                  <PaperPlaneTilt
                    size={24}
                    weight={`${state?.text === "" ? "regular" : "fill"}`}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export { ChatInterface };
