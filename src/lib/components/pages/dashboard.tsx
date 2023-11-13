/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Button } from "theme-ui";
import ReactSelect from "react-select";
import { debounce } from "debounce";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useRouter } from "next/navigation";
import {
  SessionType,
  SetLoadingType,
  UserType,
  DocType,
  DashboardStateType,
  HideNotificationType,
  ShowNotificationType,
} from "@/lib/types";
import {
  FileDotted,
  FileCode,
  Chat,
  Files,
  UploadSimple,
  ArrowCircleRight,
} from "phosphor-react";
import { getUserDocuments } from "@/utils/api-helper";
import { Title } from "@/lib/components/TextItems";
import moment from "moment";
import axios from "axios";

const itemMap = {
  Documents: <Files size={24} />,
  Templates: <FileDotted size={24} />,
  Reports: <FileCode size={24} />,
  Chat: <Chat size={24} />,
};

const itemMapSmall = {
  Documents: <Files size={16} />,
  Templates: <FileDotted size={16} />,
  Reports: <FileCode size={16} />,
  Chat: <Chat size={16} />,
};

const defaultState = {
  showSuccess: false,
  user_id: "",
  customFilename: "",
  label: "",
  mode: "start", // start | add | success | error
  searchLabel: "",
  searchEmbedded: "all",
  searchFileType: "all",
  filters: false,
  docsFound: false,
};

const Item = ({ icon, title }: { icon: string; title: string }) => (
  <Box
    sx={{
      border: "1px lightgrey dashed",
      borderRadius: "12px",
      backgroundColor: "transparent",
      // backgroundColor: "#9999ff",
      // background:
      //   "linear-gradient(180deg, rgba(139,132,255,1) 60%, rgba(73,64,255,1) 100%)",
      // boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
      width: "160px",
      height: "200px",
      mb: "40px",
    }}
  >
    <Flex
      sx={{
        width: "100%",
        border: "0px solid green",
        height: "30px",
        mt: "10px",
        pl: "0px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paragraph
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "300",
          fontSize: "16px",
        }}
      >
        {title}
      </Paragraph>
    </Flex>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="primary"
        sx={{
          color: "white",
          cursor: "pointer",
          mt: "25px",

          height: "40px",
          width: "110px",
          fontSize: "14px",
        }}
        onClick={async () => {}}
      >
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <Paragraph sx={{ mr: "3px" }}>View</Paragraph>

          {
            // @ts-ignore
            itemMapSmall[icon]
          }
        </Flex>
      </Button>
      <Button
        variant="primary"
        sx={{
          color: "#444",
          border: "1px solid #444",
          background: "transparent",
          cursor: "pointer",
          mt: "20px",
          height: "40px",
          width: "110px",
          fontSize: "14px",
        }}
        onClick={async () => {}}
      >
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <Paragraph sx={{ mr: "3px" }}>Upload</Paragraph>
          <UploadSimple size={16} />
        </Flex>
      </Button>
    </Flex>
  </Box>
);

const DashboardComponent = ({
  user,
  session,
  setLoading,
  hideNotification,
  showNotification,
  loading,
}: {
  user: UserType;
  session: SessionType;
  setLoading: SetLoadingType;
  hideNotification: HideNotificationType;
  showNotification: ShowNotificationType;
  loading: boolean;
}) => {
  const [state, updateState] = useState<DashboardStateType>(defaultState);
  const [docs, updateDocs] = useState<DocType[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // setLoading(true);
      // const { data } = await getUserDocuments(
      //   user._id,
      //   session?.authToken,
      //   "all"
      // );
      // updateDocs(data);
      // updateState({
      //   ...state,
      //   user_id: user?._id,
      //   docsFound: data?.length > 0,
      // });
      // setLoading(false);
    })();
  }, []);
  if (loading) return;

  return (
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
      <Title text="Welcome Back" />

      <Flex
        sx={{
          height: "450px",
          width: "100%",
          borderBottom: "1px lightgrey dashed",
          mt: "20px",
          mb: "40px",
        }}
      >
        <Paragraph
          sx={{
            fontWeight: "500",
            fontSize: "18px",
            textAlign: "left",
            color: "#555",
            mt: "8px",
          }}
        ></Paragraph>
      </Flex>

      <Title text="Quick Links" />
      <Flex
        sx={{
          width: "900px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: "20px",
        }}
      >
        <Item icon="Documents" title="Documents" />
        <Item icon="Reports" title="Reports" />
        <Item icon="Templates" title="Templates" />
        <Item icon="Chat" title="Chat" />
      </Flex>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
  hideNotification: () => dispatch({ type: "HIDE_NOTIFICATION" }),
  showNotification: (data: any) =>
    dispatch({ type: "SHOW_NOTIFICATION", data }),
});

const mapStateToProps = (state: { account: { loading: boolean } }) => {
  const { account } = state;
  return {
    loading: account.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
