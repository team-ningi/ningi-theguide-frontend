import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { InputLabel } from "../pages/reports";
import { useEffect, useState } from "react";
import { CheckCircle } from "phosphor-react";
import { getSignedURL } from "../../../utils/api-helper";
import { updateReportTagsAndDefinitions } from "../../../utils/api-helper";

const SingleItem = ({
  theKey,
  theValue,
  reportData,
  updateReportData,
  updateLoading,
  session,
}: any) => {
  const [changed, updateTick] = useState(false);

  return (
    <>
      <InputLabel
        customSX={{
          textAlign: "left",
          width: "340px",
          fontWeight: "500",
        }}
        title={theKey}
        subtitle=" "
      />
      <Flex sx={{ width: "340px" }}>
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "305px",
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
            let tmpTags = {
              ...reportData?.tagResults,
              [theKey]: e.target.value,
            };
            updateReportData({
              ...reportData,
              tagResults: tmpTags,
            });
            if (!changed) {
              updateTick(true);
            }
          }}
        />

        <Box
          sx={{
            width: "30px",
            ml: "5px",
            mt: "5px",
            height: "30px",
            border: "0px red solid",
            color: changed ? "#00A36C" : "lightgrey",
            cursor: changed ? "pointer" : "not-allowed",
          }}
          onClick={async () => {
            if (changed) {
              updateLoading(true);

              await updateReportTagsAndDefinitions(
                reportData?.user_id,
                reportData?._id,
                reportData?.template_definition,
                reportData?.tagResults || {},
                session?.authToken
              );
              await new Promise((resolve) =>
                setTimeout(() => resolve(true), 500)
              );
              updateTick(false);

              updateReportData({ ...reportData, changes_made: false });
              updateLoading(false);
            }
          }}
        >
          <CheckCircle size={24} />
        </Box>
      </Flex>
    </>
  );
};

export const TagsForGeneration = ({
  reportData,
  updateReportData,
  updateLoading,
  session,
}: any) => {
  return (
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
        Review the tag values, make changes & regenerate your report
      </Paragraph>
      <Flex sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        {Object.entries(reportData?.tagResults).map(([theKey, theValue]) => (
          <Box sx={{ width: "340px" }} key={theKey}>
            <SingleItem
              theKey={theKey}
              theValue={theValue}
              reportData={reportData}
              updateReportData={updateReportData}
              updateLoading={updateLoading}
              session={session}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
