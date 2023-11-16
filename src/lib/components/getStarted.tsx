import { Box, Paragraph, Flex, Button } from "theme-ui";
import ReactSelect from "react-select";
import { CaretCircleRight } from "phosphor-react";

const textMap = {
  createReport:
    "Before creating a report, it is important that you have uploaded your base template along with all the necessary supporting documents.",
  uploadTemplate:
    "Base templates are used for report creation should include tags in the format of {first_name}, as these tags serve as placeholders for dynamic content.",
  uploadDocument:
    "Supporting documents contain all the necessary information that can be extracted for report creation.",
  queryDocuments:
    "After the processing of your uploaded documents, you can query them and extract information. It is possible to select multiple documents and interrogate them for the required data.",
  tagsAndPrompts:
    "Tags and prompts play a crucial role in generating reports. Your templates must include {tag references}, you must create tags & prompts to facilitate the extraction of the necessary data for populating your report.",
};

const InputLabel = ({ title, subtitle, customSX = {} }: any) => (
  <Paragraph
    sx={{
      fontSize: "14px",
      color: "#555",
      mb: "3px",
      ml: "2px",
      mt: [0, "5px"],
      ...customSX,
    }}
  >
    {title}
    <span style={{ color: "red" }}>{subtitle}</span>
  </Paragraph>
);

const Step1Options = [
  { label: "Create A Report", value: "createReport" },
  { label: "Upload A Base Template", value: "uploadTemplate" },
  { label: "Upload A Supporting Document", value: "uploadDocument" },
  { label: "Query Uploaded Documents", value: "queryDocuments" },
  { label: "Create Tags & Prompts", value: "tagsAndPrompts" },
];

export const GetStarted = ({ state, updateState, router }: any) => {
  return (
    <Flex
      sx={{
        border: "0px red solid",
        width: "500px",
        flexDirection: "column",
        ml: "150px",
        mb: "60px",
      }}
    >
      <Box sx={{ width: "500px", mt: "20px" }}>
        <InputLabel
          customSX={{ textAlign: "left", width: "500px" }}
          title="What would you like to do?"
          subtitle=""
        />
        <ReactSelect
          value={Step1Options.map((item) => {
            if (state.step1 === item.value) {
              return {
                value: item.value,
                label: item.label,
              };
            }
          })}
          onChange={(value: any) => {
            updateState({
              ...state,
              step1: value?.value,
            });
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: "100%",
              outline: "none",
              minHeight: "45px",
              marginBottom: "20px",
            }),
          }}
          options={Step1Options?.map((item) => {
            return {
              value: item?.value,
              label: item?.label,
            };
          })}
        />
      </Box>

      {state?.step1 !== "" && (
        <Paragraph
          sx={{
            color: "#555",
            fontSize: "16px",
            textAlign: "left",
            p: "20px",
            border: "1px dashed #666",
            background: "transparent",
          }}
        >
          {/* @ts-ignore */}
          {textMap[state.step1]}
        </Paragraph>
      )}
      <Button
        variant="primary"
        sx={{
          color: "white",
          cursor: state.step1 === "" ? "not-allowed !important" : "pointer",
          background:
            state.step1 === ""
              ? "lightgrey"
              : "linear-gradient(180deg, rgba(139,132,255,1) 10%, rgba(73,64,255,1) 100%)",
          mt: "25px",
          alignSelf: "flex-end",
          height: "40px",
          width: "150px",
          fontSize: "14px",
        }}
        onClick={async () => {
          if (state?.step1 === "uploadTemplate") {
            router.push("/templates?mode=add");
          } else if (state?.step1 === "uploadDocument") {
            router.push("/documents?mode=add");
          } else if (state?.step1 === "createReport") {
            router.push("/reports?mode=create");
          } else if (state?.step1 === "queryDocuments") {
            router.push("/chat");
          } else if (state?.step1 === "tagsAndPrompts") {
            router.push("/tags");
          }
        }}
      >
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <Paragraph sx={{ mr: "3px" }}>Next</Paragraph>

          <CaretCircleRight size={16} />
        </Flex>
      </Button>
    </Flex>
  );
};
