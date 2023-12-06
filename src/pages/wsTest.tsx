/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import Head from "next/head";
import Wrapper from "../lib/components/appWrapper";
import Documents from "../lib/components/pages/documents";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";
import { SessionType, UserType, PageTypes } from "../lib/types";

const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const newWebSocket = new WebSocket("ws://localhost:5002");

    newWebSocket.onmessage = (event) => {
      const msg = event.data;
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    newWebSocket.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    setWs(newWebSocket);

    // Cleanup on unmount
    return () => {
      newWebSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && inputMessage.trim()) {
      ws.send(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content={`The Guide - Dashboard`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <div>
          <h1>WebSocket Chat</h1>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          <input
            style={{ width: "300px", height: "50px" }}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
  setCoreData: (
    email: string,
    session: SessionType,
    keepLoadingSpinner: boolean
  ) =>
    dispatch({
      type: "REFRESH_CORE_DATA",
      action: { email, session, keepLoadingSpinner },
    }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; user: UserType };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
    user: account.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
export const getServerSideProps = serverSidePropsWithAuth({ redirect: true });
