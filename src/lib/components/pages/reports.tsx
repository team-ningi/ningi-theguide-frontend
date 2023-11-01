/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
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
  ReportType,
  ReportsStateType,
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
import { getUserReports, chat, generateDocx } from "@/utils/api-helper";
import axios from "axios";
import moment from "moment";
/************TODO
PAGES:
 - LANDING ❌
    - REVIEW ❌
 - CREATE ❌
    - GIVE NAME ❌
    - SELECT FILES ❌
    - REPLACE TAGS ❌
    - GENERATE FILE ❌

1 Landing Page
  - Show all Reports generated before in a Table (similar to dashboard)
  - Can click into each report and provide feedback
    - This was accurate
    - Provide different reports and re generate (will keep existing one)
    - Hide (This will flag it and hide from the UI ... will have a button to show hidden ones)
    - Upload a corrected version (do some kind of comparison of the 2 reports)

2 Create New Report :
  - Give it a name
  - select reports to use as the context 
    - Client data
    - FactFinds
    - Personal statements etc
  - Upload a template with {{THIS WILL BE THE QUESTION FOR THE Ai}} THRUOUT 
  
  CLICK NEXT
  - Generates answers for all {{ QUESTIONS }} and put them into the template doc (using string replace)
  - Save Report to users profile / display on landing
*/

const defaultState = {
  user_id: "",
  reportType: "",
  mode: "start", // start | create
  searchReportName: "",
  searchFileType: "all",
  filters: false,
  reportsFound: false,
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
  if (searchReportType !== "all") {
    //@ts-ignore
    body.report_type = searchReportType;
  }

  const { data } = await axios({
    method: "post",
    url: "/api/db/search-reports",
    data: {
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
            title="Embedded"
            subtitle=""
          />
          <ReactSelect
            value={{
              value:
                state?.searchEmbedded !== "all"
                  ? state?.searchEmbedded
                    ? "true"
                    : "false"
                  : "all",
              label:
                state?.searchEmbedded !== "all"
                  ? state?.searchEmbedded
                    ? "true"
                    : "false"
                  : "all",
            }}
            onChange={async (values: any) => {
              const tempState = { ...state, searchEmbedded: values?.value };
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
              { value: false, label: "False" },
              { value: true, label: "True" },
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

const tagArray = [
  {
    tag: "first_name",
    prompt: "return me the users first name only with no other text",
  },
  {
    tag: "last_name",
    prompt: "return me the users last name only with no other text",
  },
  { tag: "meeting_date", prompt: "return me the meeting date" },
  { tag: "company_name", prompt: "return me the company name on its own." },
  {
    tag: "dob",
    prompt: "return me the users date of birth only with no other text",
  },
  {
    tag: "martial_status",
    prompt: "return me the users marital status only with no other text",
  },
  {
    tag: "dependants",
    prompt:
      "return me the number of dependants the user has as a number with no other text",
  },
  {
    tag: "tax_status",
    prompt:
      "return me the users tax status as simply as possible  with no additional text",
  },
  {
    tag: "uptodate_will",
    prompt:
      "Does the user have an uptodate will in place as simply as possible",
  },
  {
    tag: "state_of_health",
    prompt:
      "return me the users current state of health  only with no other text",
  },
  {
    tag: "investment_type",
    prompt: "return me the users investment type only with no other text",
  },
  {
    tag: "investment_provider",
    prompt: "return me the users investment provider",
  },
  { tag: "policy_number", prompt: "return me the users policy number" },
  {
    tag: "amount_invested",
    prompt:
      "return me the users amount invested in their investment as a number with no additional text",
  },
];

const createDocx = async (setLoading: any, session: any) => {
  setLoading(true);
  const docId = "6540f212b51c880e1ae48d3d";
  let tagResults: any = {};

  await Promise.all(
    tagArray?.map(async (item, i) => {
      const { data } = await chat(item.prompt, [docId], session?.authToken);
      const { answer } = data;
      tagResults[item.tag] = answer;
    })
  );
  setLoading(false);

  console.log({ tagResults });
  // generateDocx(tagResults, session?.authToken);
  return tagResults;
};

const IconMap = {
  docx: <FileDoc size={22} />,
  txt: <FileText size={22} />,
  pdf: <FilePdf size={22} />,
};

export const TableHeader = () => (
  <Flex
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #E2E8F0",
      height: "50px",
      fontSize: "15px",
      p: "0 20px 10px",
      backgroundColor: "#F8F8F8",
      color: "#444",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    }}
  >
    <Box
      sx={{
        textAlign: "left",
        pl: "27px",
        width: "100%",
        paddingTop: "15px",
        borderRight: "1px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Report Name
    </Box>
    <Box
      style={{
        textAlign: "center",
        width: "130px",
        paddingTop: "15px",
        borderRight: "1px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Type
    </Box>
    <Box
      style={{
        textAlign: "center",
        width: "130px",
        paddingTop: "15px",
        borderRight: "0px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Status
    </Box>
  </Flex>
);

const FileKeyValue = ({
  theKey,
  theValue,
  isLink,
}: {
  theKey: string;
  theValue?: string;
  isLink?: string;
}) => (
  <Flex sx={{ width: "100%", ml: "26px", mb: "8px" }}>
    <Paragraph
      sx={{
        fontWeight: "300",
        fontSize: "14px",
        minWidth: "130px",
        textAlign: "right",
      }}
    >
      {theKey} :
    </Paragraph>

    {!isLink && (
      <Paragraph sx={{ fontWeight: "300", fontSize: "14px", ml: "20px" }}>
        {theValue}
      </Paragraph>
    )}
    {isLink && (
      <>
        <Paragraph
          sx={{
            fontWeight: "300",
            fontSize: "14px",
            ml: "20px",
            mr: "5px",
            cursor: "pointer",
          }}
          onClick={() => window.location.assign(`${isLink}`)}
        >
          Click Here{" "}
        </Paragraph>
        <DownloadSimple size={13} style={{ margin: "0 0 0 0", padding: 0 }} />
      </>
    )}
  </Flex>
);

const TableItem = ({ item, i }: { item: any; i: number }) => {
  const [showDetails, toggleDetails] = useState<boolean>(false);

  const { file_type, report_name, embedding_created } = item;
  const isEven = i % 2 === 0;

  return (
    <Flex
      sx={{
        p: "0 20px",
        borderBottom: "1px solid #E2E8F0",
        minHeight: showDetails ? "230px" : "70px",
        backgroundColor: !isEven ? "#F8F8F8" : "white",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Flex
        sx={{
          flex: 1,
          height: "100px",
          fontSize: "14px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            textAlign: "left",
            ml: "30px",
            width: "100%",
            borderRight: "1px solid #E2E8F0",
            cursor: "pointer",
          }}
          onClick={() => toggleDetails(!showDetails)}
        >
          <Paragraph
            sx={{ fontWeight: "500", mr: "20px", textTransform: "capitalize" }}
          >
            {report_name}{" "}
          </Paragraph>
          {!showDetails && <CaretRight size={17} />}
          {showDetails && <CaretDown size={17} />}
        </Flex>
        <Box
          style={{
            textAlign: "center",
            width: "130px",
            borderRight: "1px solid #E2E8F0",
            fontWeight: "500",
            color: "#444",
          }}
        >
          {/* @ts-ignore */}
          {IconMap[file_type]}
        </Box>
        <Box
          style={{
            textAlign: "center",
            width: "130px",
            borderRight: "0px solid #E2E8F0",
            color: embedding_created ? "green" : "firebrick",
          }}
        >
          {embedding_created ? (
            <CheckCircle size={22} />
          ) : (
            <WarningCircle size={22} />
          )}
        </Box>
      </Flex>
      {showDetails && (
        <Flex sx={{ height: "160px", flexDirection: "column" }}>
          {/* moment */}
          <FileKeyValue
            theKey="Uploaded"
            theValue={moment(item.updated_at).format("dddd, MMMM Do YYYY")}
          />
          <FileKeyValue theKey="File Type" theValue={item.file_type} />
          <FileKeyValue theKey="Download Original" isLink={item.file_url} />
          <FileKeyValue
            theKey="Original Filename"
            theValue={item.original_filename}
          />
          <FileKeyValue
            theKey="Vector Embedded"
            theValue={
              item.embedding_created
                ? "yes"
                : "failed (try again by clicking the button below)"
            }
          />
        </Flex>
      )}
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
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await getUserReports(user._id, session?.authToken);
      console.log("reports ", reports);
      updateReports(data);
      updateState({
        ...state,
        user_id: user?._id,
        reportsFound: data?.length > 0,
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
            width: "100px",
            fontSize: "14px",
            zIndex: 9999,
          }}
          onClick={() => updateState({ ...state, mode: "create" })}
        >
          Create
        </Button>
      </Flex>
      {state?.reportsFound && state?.mode === "start" && (
        <Paragraph
          sx={{
            position: "absolute",
            top: "10px",
            left: "0px",
            fontWeight: "600",
            color: "#555",
          }}
        >
          Filter Reports
        </Paragraph>
      )}
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
              ? "No results found."
              : "You have not generated any reports."}
          </Paragraph>
          <Box sx={{ mt: "40px" }}>
            <Files size={50} color="#777" />
          </Box>
        </Flex>
      )}

      {state?.mode === "create" && <Paragraph>SHOW generate form</Paragraph>}
      {/* <Paragraph
        sx={{
          mt: "100px",
          fontSize: "40px",
          cursor: "pointer",
          "&:hover": { fontSize: "50px", color: "red" },
        }}
        onClick={async () => await createDocx(setLoading, session)}
      >
        Run the Test
      </Paragraph> */}
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
