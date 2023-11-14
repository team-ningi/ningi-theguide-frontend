/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
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
  ReportType,
  ReportsStateType,
  HideNotificationType,
  ShowNotificationType,
  DocType,
} from "@/lib/types";
import { Files, XCircle } from "phosphor-react";
import { getUserReports, getUserDocuments } from "@/utils/api-helper";
import { Title, Description } from "@/lib/components/TextItems";
import axios from "axios";
import CreateNewReport from "../reports/createReport";
import { TableHeader, TableItem } from "../reports/table";

const defaultState = {
  user_id: "",
  reportType: "",
  mode: "start", // start | create
  searchReportName: "",
  searchFileType: "all",
  searchReportType: "all",
  filters: false,
  reportsFound: false,
};

export const InputLabel = ({
  title,
  subtitle,
  fontWeight = "600",
  customSX = {},
}: {
  title: string;
  subtitle: string;
  fontWeight?: string;
  customSX: {};
}) => (
  <Paragraph
    sx={{
      color: "#444",
      fontSize: "14px",
      fontWeight,
      mb: "3px",
      mt: "10px",
      ...customSX,
    }}
  >
    {title}
    <span style={{ color: "firebrick" }}>{subtitle}</span>
  </Paragraph>
);

const filterReports = async (
  state: any,
  updateState: any,
  session: SessionType,
  updateReports: any
) => {
  const { searchReportName, searchFileType, searchReportType = "all" } = state;
  let body = {};
  if (searchFileType !== "all") {
    //@ts-ignore
    body.file_type = searchFileType;
  }

  //@ts-ignore
  body.report_type = searchReportType;

  const { data } = await axios({
    method: "post",
    url: "/api/db/search-reports",
    data: {
      user_id: state?.user_id,
      search: searchReportName,
      limit: 100,
      skip: 0,
      authToken: session?.authToken,
      ...body,
    },
  });

  updateReports(data);
};

const Filters = ({
  state,
  updateState,
  session,
  updateReports,
}: {
  state: any;
  updateState: any;
  session: SessionType;
  updateReports: any;
}) => {
  const handleLabelChange = debounce(async (e: any) => {
    const tempState = { ...state, searchReportName: e.target.value };
    updateState(tempState);
    await filterReports(tempState, updateState, session, updateReports);
  }, 500);
  return (
    <Flex
      sx={{
        border: "0px solid red",
        width: "800px",
        mt: "0px",
        height: "80px",
        alignItems: "flex-start",
      }}
    >
      <>
        <Box>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "200px",
            }}
            title="Label"
            subtitle=""
          />
          <Input
            sx={{
              backgroundColor: "white",
              height: "40px",
              borderRadius: 0,
              borderColor: "inputBorder",
              width: "200px",
              mt: "0px",
              mb: "20px",
              border: "1px solid lightgrey",
              fontSize: "14px",
              color: "rgb(128, 128, 128)",
              fontStyle: "normal",
            }}
            type="text"
            data-testid="searchReportName"
            id="searchReportName"
            name="searchReportName"
            placeholder=""
            onChange={handleLabelChange}
          />
        </Box>

        <Box>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "200px",
              marginLeft: "15px",
            }}
            title="File type"
            subtitle=""
          />
          <ReactSelect
            value={{
              value: state?.searchFileType,
              label: state?.searchFileType,
            }}
            onChange={async (values: any) => {
              const tempState = { ...state, searchFileType: values?.value };
              updateState(tempState);
              await filterReports(
                tempState,
                updateState,
                session,
                updateReports
              );
            }}
            placeholder="All"
            styles={{
              control: (provided) => ({
                ...provided,
                width: "200px",
                fontSize: "14px",
                outline: "none",
                minHeight: "40px",
                marginLeft: "15px",
                textAlign: "left",
              }),
            }}
            options={[
              { value: "all", label: "All" },
              { value: "txt", label: "Txt" },
              { value: "docx", label: "Docx" },
              { value: "pdf", label: "PDF" },
            ]}
          />
        </Box>
        <Box>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "200px",
              marginLeft: "15px",
            }}
            title="Report type"
            subtitle=""
          />
          <ReactSelect
            value={{
              value: state?.searchReportType,
              label: state?.searchReportType,
            }}
            onChange={async (values: any) => {
              const tempState = { ...state, searchReportType: values?.value };
              updateState(tempState);
              await filterReports(
                tempState,
                updateState,
                session,
                updateReports
              );
            }}
            placeholder="All"
            styles={{
              control: (provided) => ({
                ...provided,
                width: "200px",
                fontSize: "14px",
                outline: "none",
                minHeight: "40px",
                marginLeft: "15px",
                textAlign: "left",
              }),
            }}
            options={[
              { value: "all", label: "All" },
              { value: "test", label: "Test" },
            ]}
          />
        </Box>
        <Paragraph
          sx={{
            ml: "20px",
            mt: "40px",
            color: "#666",
            fontSize: "13px",
            cursor: "pointer",
          }}
          onClick={async () => {
            const tempState = {
              ...state,
              searchReportName: "",
              searchEmbedded: "all",
              searchFileType: "all",
              searchReportType: "all",
              filters: false,
            };
            updateState(tempState);
            await filterReports(tempState, updateState, session, updateReports);
            // @ts-ignore
            document.getElementById("searchReportName").value = null;
          }}
        >
          clear
        </Paragraph>
      </>
    </Flex>
  );
};

const ReportsComponent = ({
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
  const [state, updateState] = useState<ReportsStateType>(defaultState);
  const [reports, updateReports] = useState<ReportType[]>([]);
  const [docs, updateDocs] = useState<DocType[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      let mode = "start";
      const search = searchParams.get("mode");
      if (search) {
        mode = search;
      }
      const { data } = await getUserReports(user._id, session?.authToken);
      updateReports(data);

      const { data: docs } = await getUserDocuments(
        user._id,
        session?.authToken,
        "all"
      );
      updateDocs(docs);

      updateState({
        ...state,
        user_id: user?._id,
        reportsFound: data?.length > 0,
        mode,
      });
      setLoading(false);
    })();
  }, []);

  if (loading) return;

  return (
    <Box
      className="sectionContainer"
      sx={{
        width: "800px",
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
        <Title text="Generated Reports" />
        <Description
          text={`
          Generate personalized reports by importing a base template and utilizing data from your uploaded documents.`}
        />
      </Box>
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          height: "40px",
        }}
      >
        <Button
          variant="primary"
          sx={{
            color: "white",
            cursor: "pointer",
            mt: "0px",
            alignSelf: "flex-end",
            mb: "10px",
            height: "40px",
            width: "140px",
            fontSize: "14px",
            zIndex: 9999,
          }}
          onClick={() =>
            updateState({
              ...state,
              mode: state?.mode === "start" ? "create" : "start",
            })
          }
        >
          {state?.mode === "start" ? "Create Report" : "View Reports"}
        </Button>
      </Flex>

      {state.mode === "start" && state?.reportsFound && (
        <Filters
          state={state}
          updateState={updateState}
          session={session}
          updateReports={updateReports}
        />
      )}
      {reports?.length > 0 && state?.mode === "start" && (
        <>
          <Box
            style={{
              marginTop: "10px",
              border: "1px #E2E8F0 solid",
              width: "800px",
              minHeight: "50px",
              marginBottom: "20px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <TableHeader />
            {reports?.map((item: ReportType, i: number) => (
              <TableItem item={item} i={i} key={`${item.report_name}`} />
            ))}
          </Box>
        </>
      )}
      {reports?.length < 1 && state?.mode === "start" && (
        <Flex
          sx={{
            width: "700px",
            flexDirection: "column",
            mt: state?.reportsFound ? "30px" : "50px",
          }}
        >
          <Paragraph
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "500",
              mt: "30px",
              color: "#555",
            }}
          >
            {state?.reportsFound
              ? "No reports found."
              : "You have not generated any reports."}
          </Paragraph>
          <Box sx={{ mt: "40px" }}>
            <Files size={50} color="#777" />
          </Box>
        </Flex>
      )}

      {state?.mode === "create" && (
        <CreateNewReport
          state={state}
          updateState={updateState}
          session={session}
          docs={docs}
          reports={reports}
          setLoading={setLoading}
          showNotification={showNotification}
          hideNotification={hideNotification}
        />
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ReportsComponent);
