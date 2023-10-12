/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex } from "theme-ui";
import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Title } from "@/lib/components/title";

import { Dispatch } from "redux";
import { useRouter } from "next/navigation";
import { ContentType, ListItemType, UserType } from "@/lib/types";

const defaultState = {
  initialLoad: true,
  data: [{ _id: "", author: "", title: "", image_url: "", updated_at: "" }],
};

const PageDataComponent = ({
  darkMode,
  user,
}: {
  darkMode: boolean;
  user: UserType;
}) => {
  const [showAddIcon, toggleAddIcon] = useState(false);
  const [state, updateState] = useState(defaultState);
  const router = useRouter();

  // useEffect(() => {
  //   if (state.initialLoad) {
  //     const userRole = user && user[0] ? user[0]?.role : "readOnly";
  //     toggleAddIcon(userRole === "admin" || false);
  //     updateState({ ...state, data: content, initialLoad: false });
  //   }
  // }, []);

  return (
    <Box
      className="sectionContainer"
      sx={{
        width: "900px",
        opacity: 1,
        mt: "20px",
        minHeight: "600px",
        textAlign: "center",
        backgroundColor: "transparent",
        border: "0px solid blue",
        ml: "50px",
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
      }}
    >
      ...
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logUserIn: () => dispatch({ type: "LOG_USER_IN" }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; discussions: {} };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
    discussions: account.discussions,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageDataComponent);
