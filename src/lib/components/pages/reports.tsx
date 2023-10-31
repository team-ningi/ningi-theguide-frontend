/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex, Input } from "theme-ui";
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
import { getUserDocuments, chat, generateDocx } from "@/utils/api-helper";
import { AddNewForm } from "@/lib/components/addContent/add-new-document";
import axios from "axios";
/*

*/

/*
TODO
format of the tag data
loop over this and once answer is returned put it in as the value 
SEND THIS to the endpoint in the body
[
  {
    tag: "NINumber",
    prompt:
      "client 1's national insurance number, which might be called NI number and would be in the format of AB123456C",
    value: "Answer provided by LLM",
  },
];


 - LANDING ❌
    - REVIEW ❌
 - CREATE ❌
    - GIVE NAME ❌
    - SELECT FILES ❌
    - REPLACE TAGS ❌
    - GENERATE FILE ❌


PAGES:
  - LANDING
    - LIST ALL REPORTS
    - CREATE NEW BUTTON
  - CREATE
    - ADD FILES
    - GENERATE


1 Landing Page
  - Show all Reports generated before in a Table (similar to dashboard)
  - Can click into each report and provide feedback
    - This was accurate
    - Provide different docs and re generate (will keep existing one)
    - Hide (This will flag it and hide from the UI ... will have a button to show hidden ones)
    - Upload a corrected version (do some kind of comparison of the 2 docs)

2 Create New Report :
  - Give it a name
  - select docs to use as the context 
    - Client data
    - FactFinds
    - Personal statements etc
  - Upload a template with {{THIS WILL BE THE QUESTION FOR THE Ai}} THRUOUT 
  
  CLICK NEXT
  - Generates answers for all {{ QUESTIONS }} and put them into the template doc (using string replace)
  - Save Report to users profile / display on landing





*/
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

/*
TODO FIRST
REFINE THIS , MAKE PROMPTS RETURN ACTUAL ITEM AND NOT A SENTENCE
*/
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
  const [docs, updateDocs] = useState<DocType[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await getUserDocuments(
        user._id,
        session?.authToken,
        "all"
      );

      updateDocs(data);
      updateState({
        ...state,
        user_id: user?._id,
        docsFound: data?.length > 0,
      });
      setLoading(false);
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
      Reports
      <Paragraph
        sx={{
          mt: "100px",
          fontSize: "40px",
          cursor: "pointer",
          "&:hover": { fontSize: "50px", color: "red" },
        }}
        onClick={async () => await createDocx(setLoading, session)}
      >
        Run the Test
      </Paragraph>
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
