/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paragraph, Flex } from "theme-ui";
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
} from "phosphor-react";
import { getUserDocuments } from "@/utils/api-helper";
import { AddNewForm } from "@/lib/components/addContent/add-new-document";
import moment from "moment";

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

  const { file_type, label, embedding_created } = item;
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
          {!item.embedding_created && (
            <Paragraph
              sx={{
                fontWeight: "500",
                width: "200px",
                mt: "10px",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={() => alert(item?._id)}
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
};

const DashboardComponent = ({
  user,
  session,
  setLoading,
}: {
  user: UserType;
  session: SessionType;
  setLoading: SetLoadingType;
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

      // TODO - PUT BACK IN
      updateDocs(data);
      updateState({ ...state, user_id: user?._id });
      setLoading(false);
    })();
  }, []);

  return (
    <Box
      className="sectionContainer"
      sx={{
        width: "900px",
        opacity: 1,
        mt: "20px",
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
      }}
    >
      <AddNewForm
        state={state}
        updateState={updateState}
        setLoading={setLoading}
        user={user}
        session={session}
      />

      {docs?.length > 0 && (
        <Box
          style={{
            marginTop: "30px",
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
            <TableItem item={item} i={i} key={`${item.label}`} />
          ))}
        </Box>
      )}

      {docs?.length < 1 && (
        <Paragraph
          sx={{
            width: "100%",
            textAlign: "left",
            fontSize: "16px",
            fontWeight: "500",
            mt: "30px",
            color: "#555",
          }}
        >
          You currently have no documents uploaded.
          {/* TODO ADD NICE IMAGE HERE */}
        </Paragraph>
      )}
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", loading }),
});

const mapStateToProps = (state: { account: {} }) => {
  const { account } = state;
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
