import { Flex, Box, Paragraph } from "theme-ui";
import {
  House,
  FilePdf,
  Chat,
  UploadSimple,
  SignOut,
  CaretRight,
  List,
} from "phosphor-react";
import {
  ReactNode,
  SetStateAction,
  useState,
  Dispatch as DispatchReact,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { connect } from "react-redux";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch } from "redux";
import axios from "axios";

const destroySession = async () => {
  try {
    await axios({
      method: "post",
      url: `/api/auth/destroy`,
    });
  } catch (e) {
    console.log("failed to destroy session");
  }
};

const items = [
  {
    name: "Dashboard",
    icon: <House size={24} />,
    url: "/dashboard",
    testId: "sidebar-dashboard",
  },
  {
    name: "Chat",
    icon: <Chat size={24} />,
    url: "/chat",
    testId: "sidebar-chat",
  },
  {
    name: "Reports",
    icon: <FilePdf size={24} />,
    url: "/events",
    testId: "sidebar-reports",
  },
  {
    name: "Upload",
    icon: <UploadSimple size={24} />,
    url: "/upload",
    testId: "sidebar-upload",
  },
  {
    name: "Logout",
    icon: <SignOut size={24} />,
    url: "/",
    logout: true,
    testId: "sidebar-logout",
  },
];

const MenuItem = ({
  item,
  router,
  darkMode,
  pathname,
  logUserOut,
  toggleSidebar,
}: {
  item: {
    name: string;
    icon: ReactNode;
    url: string;
    testId: string;
    logout?: boolean;
  };
  router: AppRouterInstance;
  darkMode: boolean;
  pathname: string;
  logUserOut: () => {
    type: string;
  };
  toggleSidebar: DispatchReact<SetStateAction<SetStateAction<boolean>>>;
}) => (
  <Flex
    sx={{
      height: "30px",
      mb: "20px",
      color: "#FFF",
      justifyContent: "center",
      pt: "8px",
      cursor: "pointer",
    }}
    onClick={async () => {
      if (item.logout) {
        await logUserOut();
        toggleSidebar(false);
        await destroySession();
        router.push("/");
      } else {
        toggleSidebar(false);
        router.push(`${item.url}`);
      }
    }}
  >
    <Flex
      sx={{
        width: "145px",
        justifyContent: "flex-start",
        justifySelf: "center",
      }}
    >
      <Box sx={{ width: "25px" }}>{item.icon}</Box>
      <Paragraph
        sx={{
          ml: "13px",
          mt: "3px",
          fontSize: "17px",
          fontWeight: pathname?.includes(`${item.name.toLowerCase()}`)
            ? "600"
            : "400",
          "&:hover": {
            fontWeight: "600",
          },
        }}
      >
        {item.name}
      </Paragraph>
      {pathname?.includes(`${item.name.toLowerCase()}`) && (
        <CaretRight size={24} style={{ marginLeft: "10px" }} />
      )}
    </Flex>
  </Flex>
);

const ReturnMenuItems = ({
  router,
  darkMode,
  pathname,
  logUserOut,
  toggleSidebar,
}: {
  router: AppRouterInstance;
  darkMode: boolean;
  pathname: string;
  logUserOut: () => {
    type: string;
  };
  toggleSidebar: DispatchReact<SetStateAction<SetStateAction<boolean>>>;
}) => (
  <Flex
    sx={{
      width: "100%",
      alignSelf: "center",
      height: "100%",
      border: "0px solid red",
      mt: "120px",
      justifyContent: "space-between",
      flexDirection: "column",
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item) => {
        return (
          <MenuItem
            key={`${item.name}`}
            item={item}
            router={router}
            darkMode={darkMode}
            pathname={pathname}
            logUserOut={logUserOut}
            toggleSidebar={toggleSidebar}
          />
        );
      })}
    </Flex>
  </Flex>
);

const Sidebar = ({
  darkMode,
  logUserOut,
}: {
  darkMode: boolean;
  logUserOut: () => {
    type: string;
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, toggleSidebar] = useState<SetStateAction<boolean>>(false);
  return (
    <>
      <Flex
        sx={{
          height: "100vh",
          width: "220px",
          borderRight: "0px solid red",
          backgroundColor: "#9999ff",
          background:
            "linear-gradient(180deg, rgba(139,132,255,1) 10%, rgba(73,64,255,1) 100%)",
          flexDirection: "column",
          position: "absolute",
          boxShadow: "5px 0 6px -1px rgba(0,0,0,0.3)",
          "@media screen and (max-width: 1050px)": {
            display: "none",
          },
        }}
      >
        <ReturnMenuItems
          router={router}
          darkMode={darkMode}
          pathname={pathname}
          logUserOut={logUserOut}
          toggleSidebar={toggleSidebar}
        />
      </Flex>

      <Flex
        sx={{
          height: "100vh",
          width: sidebarOpen ? "300px" : "40px",
          backgroundColor: darkMode
            ? sidebarOpen
              ? "#222"
              : "#23242A"
            : "#FBFAFF",
          flexDirection: "column",
          borderRight: sidebarOpen ? "1px solid lightgrey" : "unset",
          borderBottom: sidebarOpen ? "1px solid lightgrey" : "unset",
          boxShadow: !sidebarOpen
            ? "unset"
            : darkMode
            ? " 0px 0px 4px rgba(255,255,255,0.3)"
            : " 0px 0px 4px rgba(0,0,0,0.1)",

          display: "none",
          "@media screen and (max-width: 1050px)": {
            display: "block",
          },
          color: darkMode ? "white" : "#444",
        }}
      >
        <List size={24} />
        {sidebarOpen && (
          <ReturnMenuItems
            router={router}
            darkMode={darkMode}
            pathname={pathname}
            logUserOut={logUserOut}
            toggleSidebar={toggleSidebar}
          />
        )}
      </Flex>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
  logUserOut: () => dispatch({ type: "LOG_USER_OUT" }),
});

const mapStateToProps = (state: { account: { darkMode: boolean } }) => {
  const { account } = state;
  return {
    darkMode: account.darkMode,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
