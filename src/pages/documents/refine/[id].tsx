/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import Wrapper from "../../../lib/components/appWrapper";
import { RefineText } from "../../../lib/components/addContent/refine-text";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import serverSidePropsWithAuth from "../../../utils/server_side_props_with_auth";
import { SessionType, UserType, RefinePageTypes } from "../../../lib/types";
import { Title, Description } from "../../../lib/components/TextItems";
import { Box, Paragraph, Flex, Input } from "theme-ui";
import { getSingleDocument } from "@/utils/api-helper";

const defaultState = {
  user_id: "",
  document_id: "",
  refineText: "",
  isEmbedded: false,
  originalText: "",
};

const RefinePage = ({
  session,
  setCoreData,
  user,
  setLoading,
  hideNotification,
  showNotification,
  loading,
}: RefinePageTypes) => {
  const [content, updateContent] = useState<{ ready: boolean; user: UserType }>(
    {
      ready: false, //@ts-ignore
      user: null,
    }
  );
  const [state, updateState] = useState(defaultState);
  const params = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (session?.email) {
        if (!user) {
          await setCoreData(session.email, session, false);
        } else {
          try {
            const { id } = params;
            const { data } = await getSingleDocument(
              `${id}`,
              session?.authToken
            );

            console.log(data[0]);

            const {
              image_to_text_content,
              image_to_text_content_original,
              user_id,
              embedding_created,
            } = data[0];

            updateState({
              ...state,
              user_id,
              document_id: `${id}`,
              refineText: image_to_text_content,
              isEmbedded: embedding_created,
              originalText: image_to_text_content_original,
            });
            updateContent({ ...content, ready: true, user });
            setLoading(false);
          } catch (e) {
            window.location.assign("/documents");
          }
        }
      } else {
        window.location.assign("/");
      }
    })();
  }, [user]);

  return (
    <>
      <Head>
        <title>Refine Text</title>
        <meta name="description" content={`The Guide - Refine Text`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Box
          className="sectionContainer"
          sx={{
            width: "900px",
            opacity: 1,
            mt: "30px",
            minHeight: "600px",
            textAlign: "center",
            backgroundColor: "transparent",
            border: "0px solid blue",
            ml: "0px",
            "@media screen and (max-width: 1275px)": { width: "600px" },
            "@media screen and (max-width: 700px)": {
              width: "100%",
              border: "0px solid red",
              ml: "auto",
              mr: "auto",
            },
            "@media screen and (max-width: 550px)": {
              width: "250px",
              ml: "60px",
            },
            position: "relative",
          }}
        >
          <Box sx={{ border: "0px red solid", mb: "40px", width: "800px" }}>
            <Title text="Refine The Extracted Text" />
            <Description
              text={`
          Please review the extracted text, change any information which is incorrect and save.`}
            />
          </Box>
          {content?.ready && !loading && (
            <RefineText
              state={state}
              updateState={updateState}
              setLoading={setLoading}
              user={user}
              session={session}
              hideNotification={hideNotification}
              showNotification={showNotification}
            />
          )}
        </Box>
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
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
  hideNotification: () => dispatch({ type: "HIDE_NOTIFICATION" }),
  showNotification: (data: any) =>
    dispatch({ type: "SHOW_NOTIFICATION", data }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; user: UserType; loading: boolean };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
    user: account.user,
    loading: account.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RefinePage);
export const getServerSideProps = serverSidePropsWithAuth({ redirect: true });
