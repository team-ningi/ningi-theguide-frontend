// @ts-nocheck
import { Box, Flex, Paragraph, Image, Textarea, Button } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import ReactSelect from "react-select";
import { Spinner } from "./spinner";
import Identicon from "identicon.js";
import { PaperPlaneTilt } from "phosphor-react";
import { chat } from "@/utils/api-helper";

/*
TODO 

- GET DOCUMENTS
- GET HISTORY

- SHOW DOCUMENTS ABILITY TO SELECT WHICH ONES TO USE FOR CONTEXT
- LOAD HISTORY INTO CHAT WINDOW
  - CREATE HISTORY ON FIRST MESSAGE



*/

type ChatItem = {
  question: string;
  answer: string;
};

const InputLabel = ({ title, subtitle, customSX = {} }: any) => (
  <Paragraph sx={{ fontSize: "13px", mb: "3px", mt: [0, "5px"], ...customSX }}>
    {title}
    <span style={{ color: "red" }}>{subtitle}</span>
  </Paragraph>
);

const defaultState = {
  loading: false,
  text: "",
  documentIds: ["652d3be157c1833f0f918f7f", "652d2926578a740f76271a16"],
};

// TODO
// these cud be listed based on uploads
// you could select one and it wud pass the document id:
// the document id wud need to be stored in teh vector db
// when we so a similarity search on the VDB we can say only search data with this doc id
const documents = [
  { label: "Gary Fiction", value: "ai/example.txt" },
  { label: "Ningi", value: "ai/ningi.txt" },
];

const callChatAPI = async (
  state: any,
  updateState: any,
  history: any,
  updateHistory: any,
  session: any
) => {
  const { text, documentIds } = state;
  updateState({ ...state, loading: true });

  const { data } = await chat(text, documentIds, session?.authToken);

  const { question, answer } = data;

  const updatedHistory = [...history, { question, answer }];
  updateHistory(updatedHistory);

  updateState({ ...state, loading: false, text: "" });
};

const exampleHistory = [
  { question: "gary 123", answer: "ahh yeh absolutely" },
  {
    question:
      "Oh yes absolutely. I get it now. a longer question. Oh yes absolutely. I get it now. a longer question. Oh yes absolutely. I get it now. a longer question , what is going on,a longer question , what is going on, what is going on , what is going on , what is going on what is going on,a longer question END",
    answer: "no thatnk you",
  },
  {
    question: "where was gary from",
    answer:
      "Gary was from the city of Coventry. Gary was from the city of Coventry. Gary was from the city of Coventry. Gary was from the city of Coventry.",
  },
];

const Item = ({ item, type }: { item: ChatItem; type: string }) => (
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

const ChatItem = ({ item, i }: { item: any; i: any }) => (
  <Flex
    key={`chat-${i}`}
    sx={{
      flexDirection: "column",
      mb: "0px",
      mt: i === 0 ? "0" : "0px",
    }}
  >
    <Item item={item} type="question" />
    <Item item={item} type="answer" />
  </Flex>
);

const ChatInterface = ({ session }: { session: any }) => {
  const [history, updateHistory] = useState([]);
  const [state, updateState] = useState(defaultState);
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    if (history?.length) {
      bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <Flex sx={{ width: "870px", margin: "60px 0 0 0" }}>
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
        {state.loading && <Spinner />}
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
            <ChatItem key={`chat-item-${i}`} item={item} i={i} />
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
              Ask a question to begin 💬 🚀
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
                  session
                );
              }
            }}
            onChange={(e) => updateState({ ...state, text: e.target.value })}
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
                    session
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
      <Flex
        sx={{
          width: "200px",
          height: "500px",
          border: "1px solid red",
          ml: "20px",
        }}
      ></Flex>
    </Flex>
  );
};

export { ChatInterface };

/*
       <Flex sx={{ mt: "20px", justifyContent: "space-between" }}>
          <Box>
            <InputLabel
              customSX={{ textAlign: "left", width: "300px" }}
              title="Personality"
              subtitle=""
            />
            <ReactSelect
              value={personalities.find(
                (item) => item.value === state.personality
              )}
              onChange={(value: any) => {
                updateState({
                  ...state,
                  personality: value?.value,
                });
              }}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "300px",
                  outline: "none",
                  minHeight: "45px",
                  marginBottom: "0px",
                }),
              }}
              isMulti={false}
              options={personalities}
            />
          </Box>
          <Box>
            <InputLabel
              customSX={{ textAlign: "left", width: "300px" }}
              title="File to query"
              subtitle=""
            />
            <ReactSelect
              value={documents.find((item) => item.value === state.fileToUse)}
              onChange={(value: any) => {
                updateState({
                  ...state,
                  fileToUse: value?.value,
                });
              }}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "300px",
                  outline: "none",
                  minHeight: "45px",
                  marginBottom: "0px",
                }),
              }}
              isMulti={false}
              options={documents}
            />
          </Box>
        </Flex>
        
*/
