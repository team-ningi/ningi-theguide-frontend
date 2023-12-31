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

/*
TODO

This is not in use, only used for prototyping how it may work
*/
const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const user = `?uuid=12345678966${new Date()}`;
    const wsDomain = `://staging-the-guide-edd0476aac0d.herokuapp.com`;
    // const wsDomain = `://localhost:5002`;
    const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";
    const wsUrl = `${wsScheme}${wsDomain}${user}`;
    const socket = new WebSocket(wsUrl);

    socket.addEventListener("open", function (event) {
      console.log("Connected to the WebSocket server.");
    });

    socket.onmessage = function (event) {
      const msg = event.data;
      console.log("Message from server:", event.data);
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.onerror = function (error) {
      console.error("WebSocket Error:", error);
    };

    socket.onclose = function (event) {
      console.log("WebSocket connection closed:", event);
    };
    setWs(socket);

    return () => {
      socket.close();
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
        <div style={{ marginTop: "100px" }}>
          <h1 style={{ color: "#777" }}>WebSocket Test</h1>
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
