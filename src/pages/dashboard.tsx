/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import Wrapper from "@/lib/components/appWrapper";
import Documents from "@/lib/components/pages/documents";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";
import { SessionType, UserType, PageTypes } from "../lib/types";

const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [state, updateContent] = useState<{ ready: boolean; user: UserType }>({
    ready: false, //@ts-ignore
    user: null,
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (session?.email) {
        if (!user) {
          await setCoreData(session.email, session, false);
        } else {
          updateContent({ ...state, ready: true, user });
        }
      } else {
        window.location.assign("/");
      }
    })();
  }, [user]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content={`The Guide - Dashboard`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {/* {state?.ready && <Documents user={state?.user} session={session} />} */}
        DASHBOARD
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
