/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Input } from "theme-ui";
import ReactSelect from "react-select";
import { debounce } from "debounce";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useRouter, useSearchParams } from "next/navigation";
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
  FilePdf,
  FileText,
  FileDoc,
  CheckCircle,
  WarningCircle,
  CaretRight,
  CaretDown,
  DownloadSimple,
  Files,
} from "phosphor-react";
import { getUserTemplates, getSignedURL } from "@/utils/api-helper";
import { Title, Description } from "@/lib/components/TextItems";
import { AddNewForm } from "@/lib/components/addContent/add-new-template";
import moment from "moment";
import axios from "axios";

/*
 ABILITY TO VIEW / EDIT TAGS FOR AN UPLOADED TEMPLATE
   -> ON REPORTS SCREEN WHEN USER PICKS TEMPLATE - PULL TAGS FROM DB
        -> WHEN THEY CLICK CREATE IT OVERRIDES THE TAGS IN DB
*/
const IconMap = {
  docx: <FileDoc size={22} />,
  txt: <FileText size={22} />,
  pdf: <FilePdf size={22} />,
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
  docsFound: true,
};

const InputLabel = ({
  title,
  subtitle,
  customSX = {},
}: {
  title: string;
  subtitle: string;
  customSX: {};
}) => (
  <Paragraph
    sx={{
      color: "#444",
      fontSize: "14px",
      mb: "3px",
      mt: "10px",
      ...customSX,
    }}
  >
    {title}
    <span style={{ color: "firebrick" }}>{subtitle}</span>
  </Paragraph>
);

const TagComponent = ({
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
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      // setLoading(true);
      // let mode = "start";
      // const search = searchParams.get("mode");
      // if (search) {
      //   mode = search;
      // }
      // const { data } = await getUserTemplates(user._id, session?.authToken);
      // updateDocs(data);
      // updateState({
      //   ...state,
      //   user_id: user?._id,
      //   docsFound: data?.length > 0,
      //   mode,
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
      <Box sx={{ border: "0px red solid", mb: "40px", width: "800px" }}>
        <Title text="Report Tags" />
        <Description
          text={`
          This is where you can create collections of tags, ready for when you generate a report.`}
        />
      </Box>
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
export default connect(mapStateToProps, mapDispatchToProps)(TagComponent);
