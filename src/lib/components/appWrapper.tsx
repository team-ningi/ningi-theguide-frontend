import { Flex, Box } from "theme-ui";
import Sidebar from "@/lib/components/sidebar";
import Header from "@/lib/components/header";
import { connect } from "react-redux";
import { Spinner } from "@/lib/components/spinner";
import { ReactNode } from "react";
import { Dispatch } from "redux";

const Wrapper = ({
  children,
  darkMode,
  loading,
}: {
  children: ReactNode;
  darkMode: boolean;
  loading: boolean;
}) => {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#F2F2FF",
        position: "relative",
      }}
    >
      {/* <Box
        sx={{
          height: "100vh",
          width: "1050px",
          backgroundColor: "#F2F2FF",
          flexDirection: "column",
          backgroundImage: `url(/bg2.png)`,
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
      /> */}
      {loading && <Spinner />}

      <Header />

      <Flex>
        <Sidebar />
        <Box
          sx={{
            border: "0px solid green",
            ml: "auto",
            mr: "auto",
            width: "auto",
            height: "auto",
          }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
});

const mapStateToProps = (state: {
  account: { darkMode: boolean; loading: boolean };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
    loading: account.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
