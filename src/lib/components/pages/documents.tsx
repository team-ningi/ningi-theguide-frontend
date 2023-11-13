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
import { getUserDocuments, getSignedURL } from "@/utils/api-helper";
import { AddNewForm } from "@/lib/components/addContent/add-new-document";
import { Title, Description } from "@/lib/components/TextItems";
import moment from "moment";
import axios from "axios";

const IconMap = {
  docx: <FileDoc size={22} />,
  txt: <FileText size={22} />,
  pdf: <FilePdf size={22} />,
};

const createEmbedding = async (
  user_id: string,
  document_id: string,
  file_url: string,
  file_type: string,
  authToken: string
) => {
  await axios({
    method: "post",
    url: "/api/db/create-embeddings",
    data: {
      user_id,
      document_id,
      file_url,
      file_type,
      authToken,
    },
  });
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
      Label
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
  saved_filename,
  userId,
  authToken,
}: {
  theKey: string;
  theValue?: string;
  isLink?: string;
  saved_filename?: string;
  userId?: string;
  authToken?: string;
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
          onClick={async () => {
            const { data } = await getSignedURL(
              userId!,
              saved_filename!,
              authToken!
            );
            window.location.assign(`${data?.signedURL}`);
          }}
        >
          Click Here{" "}
        </Paragraph>
        <DownloadSimple size={13} style={{ margin: "0 0 0 0", padding: 0 }} />
      </>
    )}
  </Flex>
);

const TableItem = ({
  item,
  i,
  authToken,
  setLoading,
  userId,
}: {
  item: any;
  i: number;
  authToken: string;
  setLoading: SetLoadingType;
  userId?: string;
}) => {
  const [showDetails, toggleDetails] = useState<boolean>(false);

  const { file_type, label, embedding_created, saved_filename } = item;
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
            {label}{" "}
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

          <FileKeyValue
            theKey="Download Original"
            isLink={item.file_url}
            saved_filename={saved_filename}
            userId={userId}
            authToken={authToken}
          />
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
          {!item.embedding_created && (
            <Paragraph
              sx={{
                fontWeight: "500",
                width: "200px",
                mt: "10px",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={async () => {
                setLoading(true);
                await createEmbedding(
                  item.user_id,
                  item._id,
                  item.file_url,
                  item.file_type,
                  authToken
                );
                setLoading(false);
                window.location.reload();
              }}
            >
              Embed document
            </Paragraph>
          )}
        </Flex>
      )}
    </Flex>
  );
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

const filterDocuments = async (
  state: any,
  updateState: any,
  session: SessionType,
  updateDocs: any
) => {
  const { searchLabel, searchEmbedded, searchFileType } = state;
  let body = {};
  if (searchFileType !== "all") {
    //@ts-ignore
    body.file_type = searchFileType;
  }
  //@ts-ignore
  body.embedded = searchEmbedded;

  const { data } = await axios({
    method: "post",
    url: "/api/db/search-documents",
    data: {
      search: searchLabel,
      limit: 100,
      skip: 0,
      authToken: session?.authToken,
      ...body,
    },
  });

  updateDocs(data);
};

const Filters = ({
  state,
  updateState,
  session,
  updateDocs,
}: {
  state: any;
  updateState: any;
  session: SessionType;
  updateDocs: any;
}) => {
  const handleLabelChange = debounce(async (e: any) => {
    const tempState = { ...state, searchLabel: e.target.value };
    updateState(tempState);
    await filterDocuments(tempState, updateState, session, updateDocs);
  }, 500);
  return (
    <Flex
      sx={{
        border: "0px solid red",
        width: "800px",
        mt: "0px",
        height: "80px",
        alignItems: "flex-start",
        position: "relative",
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
            data-testid="searchLabel"
            id="searchLabel"
            name="searchLabel"
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
              await filterDocuments(
                tempState,
                updateState,
                session,
                updateDocs
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
              await filterDocuments(
                tempState,
                updateState,
                session,
                updateDocs
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
              searchLabel: "",
              searchEmbedded: "all",
              searchFileType: "all",
              filters: false,
            };
            updateState(tempState);
            await filterDocuments(tempState, updateState, session, updateDocs);
            // @ts-ignore
            document.getElementById("searchLabel").value = null;
          }}
        >
          clear
        </Paragraph>
      </>
    </Flex>
  );
};

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
      <Box sx={{ border: "0px red solid", mb: "40px", width: "800px" }}>
        <Title text="Supporting Documents" />
        <Description
          text={`
          Please upload the necessary support documents for data extraction in order to generate your reports.`}
        />
      </Box>

      <AddNewForm
        state={state}
        updateState={updateState}
        setLoading={setLoading}
        user={user}
        session={session}
        hideNotification={hideNotification}
        showNotification={showNotification}
      />

      {state.mode === "start" && state?.docsFound && (
        <Filters
          state={state}
          updateState={updateState}
          session={session}
          updateDocs={updateDocs}
        />
      )}
      {docs?.length > 0 && (
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
            {docs?.map((item: DocType, i: number) => (
              <TableItem
                item={item}
                i={i}
                key={`${item.label}`}
                authToken={session?.authToken}
                setLoading={setLoading}
                userId={user._id}
              />
            ))}
          </Box>
        </>
      )}
      {docs?.length < 1 && (
        <Flex
          sx={{
            width: "700px",
            flexDirection: "column",
            mt: state?.docsFound ? "30px" : "100px",
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
            {state?.docsFound
              ? "No results found."
              : "You currently have no documents uploaded."}
          </Paragraph>
          <Box sx={{ mt: "40px" }}>
            <Files size={50} color="#777" />
          </Box>
        </Flex>
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
