import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { InputLabel } from "../pages/reports";
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
import { getSignedURL } from "../../../utils/api-helper";

/*
TODO

LIST OUT ALL TAGS IN INPUTS WITH BUTTON TO SAVE ALL

PUT TAGS INTO STATE BEFORE RENDERING THIS PAGE

ALLOW CHANGING

BUTTON CLICKED
SENDS UPDATED STATE TO NEW API ROUTE WHICH WILL STORE THEM AGAINST tagResults
before this it will store the original tagResults in tagResultsOriginal

*/

export const TagsForGeneration = ({ reportData }: any) => (
  <Flex
    sx={{
      flexDirection: "column",
      borderTop: "1px solid lightgrey",
      mt: "10px",
      pt: "10px",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    <Paragraph
      sx={{
        fontSize: "17px",
        fontWeight: "300",
        textAlign: "left",
        color: "#444",
        mb: "30px",
        mt: "25px",
      }}
    >
      {/* Edit the tag values and regenerate your report */}
      Review the Tag values
    </Paragraph>
    <Flex sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      {Object.entries(reportData?.tagResults).map(([theKey, theValue]) => (
        <Box sx={{ width: "340px" }} key={theKey}>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "340px",
              fontWeight: "500",
            }}
            title={theKey}
            subtitle=" "
          />
          <Input
            sx={{
              backgroundColor: "white",
              height: "40px",
              borderRadius: 0,
              borderColor: "inputBorder",
              width: "340px",
              mt: "0px",
              mb: "20px",
              border: "1px solid lightgrey",
              fontSize: "14px",
              color: "#555",
              fontStyle: "normal",
            }}
            type="text"
            data-testid="tagName"
            id="tagName"
            name="tagName"
            placeholder="" //@ts-ignore
            value={theValue}
            onChange={(e) => {
              // let tmpTags = tags;
              // tmpTags[idx].theKey = e.target.value;
              // updateTags(tmpTags);
              // updateTheTag(e.target.value);
            }}
          />
          {/* {`${theKey}=> ${theKey}`} */}
        </Box>
      ))}
    </Flex>
  </Flex>
);
