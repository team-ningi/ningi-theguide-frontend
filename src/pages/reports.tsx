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
  SuitabilityReportExample,
  FactFindExample,
} from "../lib/components/reports/tags";
import { SessionType, UserType, PageTypes, TagItemType } from "../lib/types";
import { v4 as uuidv4 } from "uuid";

const Page = ({ session, setCoreData, user }: PageTypes) => {
  const [state, updateContent] = useState<{
    ready: boolean;
    user: UserType;
  }>({
    ready: false, //@ts-ignore
    user: null,
  });
  const params = useParams();

  const [tagList, updateTagList] = useState<TagItemType[]>([]);

  useEffect(() => {
    (async () => {
      if (session?.email) {
        if (!user) {
          await setCoreData(session.email, session, false);
        } else {
          // get tags put into state
          const { data } = await getTags(user._id, session?.authToken);
          console.log(
            "SuitabilityReportExample ",
            SuitabilityReportExample?.length
          );

          let TagsToDisplay = [
            { id: "0", _id: "static", label: "Custom", tags: [] },
            {
              id: "2",
              _id: "static",
              label: "Suitability Report Example",
              tags: SuitabilityReportExample,
            },
            {
              id: "3",
              _id: "static",
              label: "Fact Find Example",
              tags: FactFindExample,
            },
          ];
          const UsersTags = data?.map((item: TagItemType) => ({
            _id: item._id,
            id: uuidv4(),
            label: item.label,
            tags: item.tags,
          }));
          await new Promise((resolve) => setTimeout(resolve, 300));
          updateTagList([...TagsToDisplay, ...UsersTags]);
          // /11.79 ---> 12.98 -> 11 tags per chunk
          //  13.83 --->  ???? -> 12 tags per chunk ->
          updateContent({
            ...state,
            ready: true,
            user,
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
          <Reports user={state?.user} session={session} tagList={tagList} />
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
