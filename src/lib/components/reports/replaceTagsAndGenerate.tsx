/* eslint-disable react-hooks/exhaustive-deps */
import { Paragraph, Flex, Button } from "theme-ui";
import { ThreeCircles } from "react-loader-spinner";
import {
  generateDocx,
  updateReportTagsProcessed,
  getSingleReport,
  getTagsSingleChunk,
} from "../../../utils/api-helper";
import { useEffect, useState } from "react";
import { CheckCircle } from "phosphor-react";

import { TagsForGeneration } from "./tagsForGeneration";
import { v4 as uuidv4 } from "uuid";
import { getSignedURL } from "../../../utils/api-helper";
import ConfettiExplosion from "react-confetti-explosion";

const defaultState = {
  file_type: "",
  _id: "",
  base_template_url: "",
  tag_chunks_to_process: [],
  tag_chunks_processed: [],
};

const ChunkItem = ({
  item,
  processed,
  tagsToProcess,
  updateTagsToProcess,
  tagsProcessed,
  updateTagsProcessed,
  state,
  session,
  updateState,
}: {
  item: any;
  processed: boolean;
  tagsToProcess: any;
  updateTagsToProcess: any;
  tagsProcessed: any;
  updateTagsProcessed: any;
  state: any;
  session: any;
  updateState: any;
}) => (
  <Flex
    sx={{
      border: "1px solid lightgrey",
      borderRadius: "12px",
      p: "12px 10px",
      mb: "13px",
      width: "350px",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Paragraph sx={{ color: "#444", fontSize: "14px" }}>
      {item?.length} tags{" "}
      {processed ? "sucessfully processed" : "not processed"}
    </Paragraph>
    <CheckCircle
      size={22}
      weight="fill"
      color={`${processed ? "#00A36C" : "#AAA"}`}
    />
  </Flex>
);

const processTags = async (
  tagsToProcess: any,
  updateTagsToProcess: any,
  tagsProcessed: any,
  updateTagsProcessed: any,
  reportData: any,
  authToken: string,
  updateReportData: any,
  updateThrowConfetti: any,
  showNotification: any,
  hideNotification: any
) => {
  const toProcess = [...tagsToProcess];
  const updatedProcessed = [...tagsProcessed];
  try {
    while (toProcess.length > 0) {
      let tag = toProcess.shift();

      updateTagsToProcess([...toProcess]);
      updatedProcessed.push(tag);
      updateTagsProcessed([...updatedProcessed]);

      const { data } = await getTagsSingleChunk(
        tag,
        reportData?.document_ids,
        reportData?.initial_prompt,
        authToken,
        reportData?._id
      );

      if (data?.error) {
        throw new Error("Failed to generate tags for report");
      }

      await updateReportTagsProcessed(
        reportData?.user_id,
        reportData?._id,
        [...toProcess],
        [...updatedProcessed],
        authToken
      );
      await new Promise((resolve) => setTimeout(resolve, 700));
    }

    const { data } = await getSingleReport(reportData._id, authToken);
    const report = data[0];
    const outputName = `${uuidv4()}.${report?.file_type}`;
    updateReportData(report);

    await generateDocx(
      report?.tagResults,
      report?._id,
      report?.base_template_url,
      outputName,
      authToken
    );

    const { data: dataR } = await getSingleReport(report?._id, authToken);
    const reportAfterGen = dataR[0];
    updateReportData(reportAfterGen);

    updateThrowConfetti(true);
    setTimeout(() => {
      updateThrowConfetti(false);
    }, 3000);
  } catch (e) {
    showNotification({
      text: "Failed to generate data, try again later",
      type: "error",
    });
    setTimeout(() => hideNotification(), 5500);
  }
};

const ReplaceTagsAndGenerateComponent = ({
  state,
  updateState,
  session,
  showNotification,
  hideNotification,
}: any) => {
  const [tagsToProcess, updateTagsToProcess] = useState<
    { [key: string]: string }[]
  >([]);
  const [tagsProcessed, updateTagsProcessed] = useState<
    { [key: string]: string }[]
  >([]);
  const [reportData, updateReportData] = useState<{
    file_type: string;
    tagResults?: any;
    _id: string;
    base_template_url: string;
    tag_chunks_to_process: string[];
    tag_chunks_processed: string[];
    generated_report_url?: string;
    tagResultsOriginal?: any;
  }>(defaultState);
  const [loading, updateLoading] = useState(false);
  const [throwConfetti, updateThrowConfetti] = useState(false);

  useEffect(() => {
    (async () => {
      if (state.reportId) {
        const { data } = await getSingleReport(
          state.reportId,
          session?.authToken
        );
        const report = data[0];
        console.log({ report });
        updateReportData(report);
        updateTagsToProcess(report?.tag_chunks_to_process);
        updateTagsProcessed(report?.tag_chunks_processed);
      } else {
        window.location.assign("/reports");
      }
    })();
  }, []);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        mb: "200px",
      }}
    >
      {loading && (
        <Flex
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0)",
            zIndex: 9999999,
          }}
        >
          <ThreeCircles
            height="100"
            width="100"
            color="#564DFE"
            wrapperStyle={{ marginTop: "150px" }}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#564DFE"
            innerCircleColor="#8A84FF"
            middleCircleColor="#564DFE"
          />
        </Flex>
      )}
      {throwConfetti && (
        <ConfettiExplosion
          particleCount={350}
          duration={3000}
          width={1600}
          force={0.8}
        />
      )}

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
        Data chunks processed:{" "}
        <span style={{ color: "#00A36C", fontWeight: "600" }}>
          {tagsProcessed?.length} /{" "}
          {tagsProcessed.length + tagsToProcess?.length}
        </span>
      </Paragraph>

      {!!tagsToProcess?.length && (
        <>
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "0px",
              alignSelf: "flex-start",
              mb: "30px",
              height: "40px",
              width: "190px",
              fontSize: "14px",
              zIndex: 9999,
            }}
            onClick={async () => {
              updateLoading(true);

              await processTags(
                tagsToProcess,
                updateTagsToProcess,
                tagsProcessed,
                updateTagsProcessed,
                reportData,
                session?.authToken,
                updateReportData,
                updateThrowConfetti,
                showNotification,
                hideNotification
              );

              updateLoading(false);
            }}
          >
            {tagsProcessed.length > 0
              ? "Continue processing"
              : "Start processing"}
          </Button>
          <Paragraph
            sx={{
              mb: "30px",
              fontSize: "16px",
              textAlign: "left",
              fontWeight: "300",
              height: "20px",
            }}
          >
            {loading
              ? "🤖 ... Please wait while we generate the data for your report ... 🤖"
              : ""}
          </Paragraph>
        </>
      )}

      {!tagsToProcess?.length && !loading && (
        <Flex>
          {reportData?.tagResultsOriginal && (
            <Button
              variant="primary"
              sx={{
                color: "#555",
                border: "1px solid grey",
                cursor: "pointer",
                background: "transparent",
                mt: "0px",
                alignSelf: "flex-start",
                mb: "30px",
                mr: "15px",
                height: "40px",
                width: "140px",
                fontSize: "14px",
                zIndex: 9999,
              }}
              onClick={async () => {
                updateLoading(true);

                const { data } = await getSingleReport(
                  state.reportId,
                  session?.authToken
                );
                const report = data[0];
                const outputName = `${uuidv4()}.${report?.file_type}`;
                updateReportData(report);

                await generateDocx(
                  report?.tagResults,
                  report?._id,
                  report?.base_template_url,
                  outputName,
                  session?.authToken
                );

                const { data: dataR } = await getSingleReport(
                  state.reportId,
                  session?.authToken
                );
                const reportAfterGen = dataR[0];
                updateReportData(reportAfterGen);

                updateThrowConfetti(true);
                setTimeout(() => {
                  updateThrowConfetti(false);
                }, 3000);

                updateLoading(false);
              }}
            >
              Regenerate
            </Button>
          )}
          {reportData?.generated_report_url && (
            <Button
              variant="primary"
              sx={{
                color: "white",
                cursor: "pointer",
                mt: "0px",
                alignSelf: "flex-start",
                mb: "30px",
                height: "40px",
                width: "140px",
                fontSize: "14px",
                zIndex: 9999,
              }}
              onClick={async () => {
                updateLoading(true);

                const { data: dataR } = await getSingleReport(
                  state.reportId,
                  session?.authToken
                );
                const report = dataR[0];
                updateReportData(report);

                const { data } = await getSignedURL(
                  report?.user_id!,
                  report?.generated_report_url!,
                  session?.authToken!
                );

                updateThrowConfetti(true);
                setTimeout(() => {
                  updateThrowConfetti(false);
                }, 3000);
                updateLoading(false);
                window.location.assign(`${data?.signedURL}`);
              }}
            >
              Download
            </Button>
          )}
        </Flex>
      )}

      {reportData?.generated_report_url && (
        <TagsForGeneration reportData={reportData} />
      )}

      {!reportData?.generated_report_url && (
        <Flex
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {tagsProcessed?.map((item, i) => (
            <ChunkItem
              key={i}
              item={item}
              processed
              tagsToProcess={tagsToProcess}
              updateTagsToProcess={updateTagsToProcess}
              tagsProcessed={tagsProcessed}
              updateTagsProcessed={updateTagsProcessed}
              state={state}
              session={session}
              updateState={updateState}
            />
          ))}
          {tagsToProcess?.map((item, i) => (
            <ChunkItem
              key={i}
              item={item}
              processed={false}
              tagsToProcess={tagsToProcess}
              updateTagsToProcess={updateTagsToProcess}
              tagsProcessed={tagsProcessed}
              updateTagsProcessed={updateTagsProcessed}
              state={state}
              session={session}
              updateState={updateState}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ReplaceTagsAndGenerateComponent;
