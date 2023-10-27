/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import Wrapper from "@/lib/components/appWrapper";
import PageData from "@/lib/components/pages/dashboard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";
import { SessionType, UserType, PageTypes } from "../lib/types";
// import { getContent } from "@/utils/api-helper";

const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [state, updateContent] = useState({ ready: true, content: [] });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (session?.email) {
        updateContent({ ...state, ready: false });
        if (!user) {
          await setCoreData(session.email, session, false);
        }

        updateContent({ ...state, ready: true });
      } else {
        window.location.assign("/");
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>{params.type}</title>
        <meta name="description" content={`Community - ${params.type}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {state?.ready && (
          <PageData
            // @ts-ignore
            user={user}
          />
        )}
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
