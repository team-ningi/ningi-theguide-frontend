// @ts-nocheck
import { Box, Flex, Paragraph, Image, Textarea, Button } from "theme-ui";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import getChatResponse from "../../pages/api/chat";
import { Spinner } from "./spinner";
import Identicon from "identicon.js";

const InputLabel = ({ title, subtitle, customSX = {} }: any) => (
  <Paragraph sx={{ fontSize: "13px", mb: "3px", mt: [0, "5px"], ...customSX }}>
    {title}
    <span style={{ color: "red" }}>{subtitle}</span>
  </Paragraph>
);

const defaultState = {
  loading: false,
  text: "",
  personality: "neutral", // neutral / unhappy / happy
  fileToUse: "ai/example.txt", // example / ningi
};

const personalities = [
  { label: "Neutral", value: "neutral" },
  { label: "Negative", value: "negative" },
  { label: "Positive", value: "positive" },
];

const documents = [
  { label: "Gary Fiction", value: "ai/example.txt" },
  { label: "Ningi", value: "ai/ningi.txt" },
];

const callChatAPI = async (
  state: any,
  updateState: any,
  history: any,
  updateHistory: any
) => {
  const { text, personality, fileToUse } = state;
  updateState({ ...state, loading: true });
  const res = await getChatResponse(text, personality, fileToUse);
  const { question, answer } = res;

  const updatedHistory = [...history, { question, answer }];
  updateHistory(updatedHistory);

  updateState({ ...state, loading: false });
};

const exampleHistory = [
  { question: "gary 123?", answer: "ahh yeh absolutely" },
  { question: "a longer question , what is going on", answer: "no thatnk you" },
  {
    question: "where was gary from",
    answer: "Gary was from the city of Coventry.",
  },
];
const ChatInterface = () => {
  const [history, updateHistory] = useState([]);
  const [state, updateState] = useState(defaultState);

  return (
    <Flex
      sx={{
        width: "650px",
        minHeight: "500px",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {state.loading && <Spinner />}
      <Flex
        sx={{
          border: "1px solid lightgrey",
          p: "10px 5px",
          backgroundColor: "#FFF",
          height: "400px",
          borderRadius: "5px",
          flexDirection: "column",
          overflow: "scroll",
        }}
      >
        {history.map((item, i) => (
          <Flex key={`chat-${i}`} sx={{ flexDirection: "column" }}>
            <Flex
              sx={{
                alignSelf: "flex-start",
                p: "10px ",
                width: "400px",
                textAlign: "left",
              }}
            >
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
              <Paragraph sx={{ width: "100%", fontWeight: "500" }}>
                {item?.question} ?
              </Paragraph>
            </Flex>
            <Flex
              sx={{
                alignSelf: "flex-end",
                p: "20px",
                width: "400px",
                textAlign: "right",
              }}
            >
              <Paragraph sx={{ width: "100%" }}>{item?.answer}</Paragraph>
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
                  src="/ningi-logo-small.png"
                  width="30px"
                  height="auto"
                  alt=" logo"
                />
              </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Flex sx={{ minHeight: "110px", mt: "20px", flexDirection: "column" }}>
        <InputLabel
          customSX={{ textAlign: "left", width: "300px" }}
          title="Question"
          subtitle=""
        />
        <Textarea
          sx={{
            border: "1px solid lightgrey",
            height: "90px",
            backgroundColor: "white",
            resize: "none",
          }}
          value={state?.text}
          onChange={(e) => updateState({ ...state, text: e.target.value })}
        />

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
        <Button
          variant="primary"
          sx={{
            color: "white",
            cursor: "pointer",
            mt: "25px",
            alignSelf: "flex-end",
          }}
          onClick={async () => {
            await callChatAPI(state, updateState, history, updateHistory);
          }}
        >
          Submit{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export { ChatInterface };
