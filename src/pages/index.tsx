/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { Flex, Box } from "theme-ui";
import { useRouter } from "next/navigation";
import Header from "../lib/components/header";
import { Spinner } from "../lib/components/spinner";
import { connect } from "react-redux";
import { LoginForm, Waiting, Verify } from "../lib/components/login";
import { LoginTypes } from "../lib/types";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";

/*
TODO
FOR ALPHA
*** 1
          WHEN REPORT IS CREATED BUT NOT GENERATED ALLOW USER TO CONTINUE EDITING IT ❌

NOT FOR ALPHA 
**** 1
          - UPLOAD AUDIO FILES ❌
            - IF MP3 -> TRANSCRIBE AND CREATE EMBED
          
          - UPLOAD IMAGE FILES ❌    
            - TEXTRACT   CHAT
              https://medium.com/@hatemalimam/extract-text-and-data-from-any-document-using-amazon-textract-in-node-js-9a72136c6e64

**** 2
          - PAGINATION ON LISTS
            - API already supports it ... 

**** 3
          - WHEN LOG IN ❌
            -> IF NO NAME SET SHOW UI TO ADD NAME + UPLOAD AVATAR

***** 4
          - LIVE BLOCKS HOW CAN WE USE IT?
            https://vercel.com/templates/next.js/liveblocks-starter-kit


****** 5
          - Look into function calling
            https://platform.openai.com/docs/guides/function-calling

*/

const defaultState = {
  username: "",
  mode: "login", //  login || verify || waiting
};

const Login = ({ setCoreData, darkMode, session }: LoginTypes) => {
  const [currentState, updateState] = useState(defaultState);
  const [loading, toggleLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      toggleLoading(true);
      try {
        if (session?.email && session.email !== "test@ningi.co.uk") {
          router.push("/dashboard");
        } else {
          const queryString = window.location.href;
          const decodedQueryString = decodeURIComponent(queryString);
          const url = new URL(decodedQueryString);
          const mode = url.searchParams.get("mode");
          const encoded = url?.search?.split("=")[2];

          if (encoded) {
            if (mode === "verify") {
              updateState({ ...currentState, mode: "verify" });
              await setCoreData(atob(encoded), session, false);

              if (atob(encoded) === "test@ningi.co.uk") {
                window.location.assign("/dashboard");
              } else {
                window.location.assign("/chat");
              }
            }
          }
        }
      } catch (e) {
        //  swallow
      }
      toggleLoading(false);
    })();
  }, []);

  return (
    <Flex
      sx={{
        height: "100vh",
        backgroundColor: "#f9f9f9",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header logoType="dark" />

      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "#F9F9F9",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "1050px",
            backgroundColor: darkMode ? "#23242A" : "#f9f9f9",
            flexDirection: "column",
            backgroundImage: `url(/bg.png)`,
            backgroundSize: "cover",
            position: "absolute",
            right: "0",

            "@media screen and (max-width: 1450px)": {
              width: "750px",
              backgroundPosition: "left",
            },
            "@media screen and (max-width: 1150px)": {
              width: "650px",
              backgroundPosition: "left",
            },
            "@media screen and (max-width: 950px)": {
              width: "600px",
            },
            "@media screen and (max-width: 550px)": {
              backgroundImage: "unset",
            },
          }}
        />

        {loading && <Spinner />}

        {currentState?.mode === "login" && (
          <LoginForm
            currentState={currentState}
            updateState={updateState}
            toggleLoading={toggleLoading}
          />
        )}

        {currentState?.mode === "verify" && (
          <Verify currentState={currentState} updateState={updateState} />
        )}

        {currentState?.mode === "waiting" && (
          <Waiting currentState={currentState} updateState={updateState} />
        )}
      </Flex>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCoreData: (
    email: string,
    session: { email: string; authToken: string },
    keepLoadingSpinner: boolean
  ) =>
    dispatch({
      type: "REFRESH_CORE_DATA",
      action: { email, session, keepLoadingSpinner },
    }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; loading: boolean };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
export const getServerSideProps = serverSidePropsWithAuth({ redirect: false });
