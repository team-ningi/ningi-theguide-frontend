import Link from "next/link";
import { Flex, Image, Box, Paragraph, Input } from "theme-ui";

import { connect } from "react-redux";
import Identicon from "identicon.js";
import { usePathname } from "next/navigation";
import { Dispatch } from "redux";

const Header = ({
  updateDarkMode,
  darkMode,
  loggedIn,
  user,
  logoType = "light",
}: {
  updateDarkMode: (type: boolean) => {
    type: string;
  };
  darkMode: boolean;
  loggedIn: boolean;
  logoType?: string;
  user: [
    {
      _id: string;
    }
  ];
}) => {
  const pathname = usePathname();

  return (
    <Flex
      sx={{
        height: "70px",
        borderBottom: "0px solid lightgrey",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 999,
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "transparent", //`${darkMode ? "#323741" : "#FDFDFE"}`,
      }}
    >
      <Box
        sx={{
          height: "31px",
          width: "120px",
          mt: "25px",
          ml: "50px",
          justifyContent: "center",
          cursor: "pointer",
          "@media screen and (max-width: 1050px)": {
            ml: "20px",
          },
        }}
      >
        <Image
          src={`/ningi-logo${logoType === "dark" ? "" : "-light"}.webp`}
          width="120px"
          height="auto"
          alt=" logo"
        />
      </Box>
      {loggedIn && (
        <>
          {/* 
            //TOTO implement > Search
          <Flex
            sx={{
              width: "600px",
              height: "40px",
              border: "1px solid lightgrey",
              borderRadius: "12px",
              alignItems: "center",
              color: darkMode ? "#FFF" : "#555",
              "@media screen and (max-width: 1050px)": {
                display: "none",
              },
            }}
          >
            <MagnifyingGlass
              color={`${darkMode ? "#FFF" : "grey"}`}
              size={25}
              style={{ marginLeft: "10px" }}
            />
            <Input
              sx={{
                ml: "5px",
                border: "0px",
                outline: "0px",
                color: darkMode ? "#FFF" : "#555",
              }}
              placeholder="search..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("search for type of " + pathname);
                }
              }}
            />
          </Flex> 

          <Flex sx={{ mr: "15px", cursor: "pointer" }}>
            <Flex
              sx={{
                mr: "14px",
                height: "40px",
                width: "40px",
                borderRadius: "100px",
                backgroundColor: "transparent", //#F9FAFB",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => updateDarkMode(!darkMode)}
            >
              {darkMode ? "dark" : "light"}
            </Flex>
            <Flex
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "100px",
                border: "1px solid #FFF",
                backgroundColor: "#F9F9F9",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
              onClick={() => alert("profile")}
            >
              {user && user[0]?._id && (
                <Image
                  src={`data:image/png;base64,${new Identicon( //@ts-ignore
                    (user && user[0]?._id) || "1701232456563689454891",
                    50
                  )}`}
                  width="40px"
                  height="auto"
                  alt="user"
                />
              )}
            </Flex>
          </Flex>
            */}
        </>
      )}
    </Flex>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
});

const mapStateToProps = (state: {
  account: {
    darkMode: boolean;
    loggedIn: boolean;
    user: [
      {
        _id: string;
      }
    ];
  };
}) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
    loggedIn: account.loggedIn,
    user: account.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
