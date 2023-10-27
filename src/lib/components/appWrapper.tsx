import { Flex, Box } from "theme-ui";
import Sidebar from "@/lib/components/sidebar";
import Header from "@/lib/components/header";
import { connect } from "react-redux";
import { Spinner } from "@/lib/components/spinner";
import { ReactNode } from "react";
import { Dispatch } from "redux";
import NotificationWidget from "./notifications";

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
      {loading && <Spinner />}
      <NotificationWidget />

      <Header />

      <Flex>
        <Sidebar />
        <Box
          sx={{
            border: "0px solid green",
            // ml: "auto",
            // mr: "auto",
            ml: "270px",
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
