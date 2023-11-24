import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { useEffect, useState } from "react";
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
import moment from "moment";
import { getSignedURL } from "../../../utils/api-helper";

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
      p: "0 20px 10px ",
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
        width: "180px",
        paddingTop: "15px",
        borderRight: "1px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Template
    </Box>
    <Box
      style={{
        textAlign: "center",
        width: "120px",
        margin: "0 auto",
        paddingTop: "15px",
        border: "0px solid #E2E8F0",
        fontWeight: "600",
      }}
    >
      Type
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
        minWidth: "140px",
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

export const TableItem = ({
  item,
  i,
  userId,
  authToken,
}: {
  item: any;
  i: number;
  userId: string;
  authToken: string;
}) => {
  const [showDetails, toggleDetails] = useState<boolean>(false);
  const { file_type, report_name, report_type, saved_filename, status } = item;
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
            width: "180px",
            borderRight: "1px solid #E2E8F0",
            borderLeft: "1px solid #E2E8F0",
            textTransform: "capitalize",
          }}
        >
          {/* {report_type} */}
          {status}
        </Box>
        <Box
          style={{
            textAlign: "center",
            width: "120px",
            fontWeight: "500",
            color: "#444",
          }}
        >
          {/* @ts-ignore */}
          {IconMap[file_type]}
        </Box>
      </Flex>
      {showDetails && (
        <Flex sx={{ height: "160px", flexDirection: "column" }}>
          {/* moment */}
          <FileKeyValue
            theKey="Uploaded"
            theValue={moment(item.updated_at).format("dddd, MMMM Do YYYY")}
          />
          <FileKeyValue
            theKey="Download Report"
            isLink={item.generated_report_url}
            saved_filename={item.generated_report_url}
            userId={userId}
            authToken={authToken}
          />
          <FileKeyValue theKey="File Type" theValue={item.file_type} />
          <FileKeyValue
            theKey="Download Template"
            isLink={item.base_template_url}
            saved_filename={item.base_template_url}
            userId={userId}
            authToken={authToken}
          />

          {/* <FileKeyValue theKey="Documents Used" theValue={item.document_ids} /> */}
          {/* <Flex
            sx={{
              width: "auto",
              textAlign: "right",
              pr: "20px",
              fontSize: "14px",
              color: "#444",
              fontWeight: "600",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
            onClick={() => alert("edit report ")}
          >
            Edit Report
          </Flex> */}
        </Flex>
      )}
    </Flex>
  );
};
