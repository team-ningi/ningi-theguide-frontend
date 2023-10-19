/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Wrapper from "@/lib/components/appWrapper";
import { Spinner } from "../lib/components/spinner";
import { ChatInterface } from "@/lib/components/chatInterface";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";
import { PageTypes, SessionType, UserType } from "@/lib/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const Chat = ({ session, setCoreData, user }: PageTypes) => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (session?.email) {
        if (!user) {
          await setCoreData(session.email, session, false);
        }
      } else {
        window.location.assign("/");
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Ningi playground Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ChatInterface session={session} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
export const getServerSideProps = serverSidePropsWithAuth({ redirect: true });
