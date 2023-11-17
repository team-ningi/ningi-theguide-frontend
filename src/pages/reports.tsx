/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import Wrapper from "../lib/components/appWrapper";
import Reports from "../lib/components/pages/reports";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";
import { getTags } from "../utils/api-helper";
import {
  BasicReportExample,
  SuitabilityReportExample,
} from "../lib/components/reports/tags";
import { SessionType, UserType, PageTypes, TagItemType } from "../lib/types";

const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [state, updateContent] = useState<{
    ready: boolean;
    user: UserType;
    tags: TagItemType[];
  }>({
    ready: false, //@ts-ignore
    user: null,
    tags: [],
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (session?.email) {
        if (!user) {
          await setCoreData(session.email, session, false);
        } else {
          // get tags put into state
          const { data } = await getTags(user._id, session?.authToken);
          console.log("data ", data);

          let TagsToDisplay = [
            { id: "0", label: "Reset", tags: [] },
            { id: "1", label: "Basic Example", tags: BasicReportExample },
            {
              id: "2",
              label: "Suitability Report Example",
              tags: SuitabilityReportExample,
            },
          ];
          const UsersTags = data?.map((item: TagItemType) => ({
            id: item._id,
            label: item.label,
            tags: item.tags,
          }));

          updateContent({
            ...state,
            ready: true,
            user,
            tags: [...TagsToDisplay, ...UsersTags],
          });
        }
      } else {
        window.location.assign("/");
      }
    })();
  }, [user]);

  return (
    <>
      <Head>
        <title>Reports</title>
        <meta name="description" content={`The Guide - Reports`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {state?.ready && (
          <Reports user={state?.user} session={session} tagList={state.tags} />
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
