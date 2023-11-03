import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { chat, generateDocx } from "@/utils/api-helper";
import { useState } from "react";
import ReactSelect from "react-select";
import { XCircle } from "phosphor-react";
import { InputLabel } from "../pages/reports";
import { DocType } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";

const baseTemplates = ["test"];

const defaultTags = [
  {
    tag: "first_name",
    data: "first name",
    prompt: "return {{data}} only with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "last_name",
    data: "last name",
    prompt: "return {{data}} only with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "meeting_date",
    data: "company join date",
    prompt: "return {{data}}",
    uuid: uuidv4(),
  },
  {
    tag: "company_name",
    data: "company name",
    prompt: "return {{data}} on its own.",
    uuid: uuidv4(),
  },
  {
    tag: "dob",
    data: "date of birth",
    prompt: "return {{data}} only with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "martial_status",
    data: "martial status",
    prompt: "return {{data}} only with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "dependants",
    data: "number of dependants",
    prompt: "return {{data}} as a number with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "tax_status",
    data: "tax status",
    prompt: "return {{data}} as simply as possible with no additional text",
    uuid: uuidv4(),
  },
  {
    tag: "uptodate_will",
    data: "uptodate will in place",
    prompt: "return {{data}} as a boolean with no additional text",
    uuid: uuidv4(),
  },
  {
    tag: "state_of_health",
    data: "current state of health",
    prompt: "return {{data}} as simply as possible with no additional text",
    uuid: uuidv4(),
  },
  {
    tag: "investment_type",
    data: "investment type",
    prompt: "return {{data}} only with no other text",
    uuid: uuidv4(),
  },
  {
    tag: "investment_provider",
    data: "investment provider",
    prompt: "return {{data}}",
    uuid: uuidv4(),
  },
  {
    tag: "policy_number",
    data: "policy number",
    prompt: "return {{data}} as simply as possible with no additional text",
    uuid: uuidv4(),
  },
  {
    tag: "amount_invested",
    data: "amount invested in their investment",
    prompt: "return {{data}} as a number with no other text",
    uuid: uuidv4(),
  },
];

const promptTypes = [
  "return {{data}}",
  "return {{data}} on its own.",
  "return {{data}} only with no other text",
  "return {{data}} as a number with no other text",
  "return {{data}} as simply as possible with no additional text",
  "return {{data}} as a boolean with no additional text",
];

const createDocx = async (setLoading: any, session: any, tags: any) => {
  setLoading(true);
  const docId = "6540f212b51c880e1ae48d3d";
  let tagResults: any = {};

  await Promise.all(
    //@ts-ignore
    tags?.map(async (item, i) => {
      const { data } = await chat(
        item.prompt?.replace("{{data}}", item?.data),
        [docId],
        session?.authToken
      );
      const { answer } = data;
      tagResults[item.tag] = answer;
    })
  );
  setLoading(false);

  console.log({ tagResults });
  generateDocx(tagResults, session?.authToken);
  return tagResults;
};

const defaultState = {
  reportName: "",
  documentIds: [],
  baseTemplate: "",
  tags: [],
};

const TagAndPromptItem = ({
  uuid,
  tag,
  data,
  prompt,
  tags,
  updateTags,
}: any) => {
  const idx = tags?.findIndex((item: any) => item.uuid === uuid);
  const [thePrompt, updatePrompt] = useState(prompt);
  const [theTag, updateTheTag] = useState(tag);
  const [theData, updateTheData] = useState(data);
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        width: "650px",
        border: "0px solid red",
      }}
    >
      <Box sx={{ width: "140px" }}>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "140px",
            fontWeight: "500",
          }}
          title="Tag in template"
          subtitle=" *"
        />
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "140px",
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
          placeholder=""
          value={theTag}
          onChange={(e) => {
            // const idx = tags?.findIndex((item: any) => item.uuid === uuid);
            let tmpTags = tags;
            tmpTags[idx].tag = e.target.value;
            updateTags(tmpTags);
            updateTheTag(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "140px" }}>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "140px",
            fontWeight: "500",
          }}
          title="Data to extract"
          subtitle=" *"
        />
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "140px",
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
          placeholder=""
          value={theData}
          onChange={(e) => {
            // const idx = tags?.findIndex((item: any) => item.uuid === uuid);
            let tmpTags = tags;
            tmpTags[idx].data = e.target.value;
            updateTags(tmpTags);
            updateTheData(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "300px" }}>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "300px",
            fontWeight: "500",
          }}
          title="Prompt to use"
          subtitle=" *"
        />
        <ReactSelect
          value={{
            value: thePrompt,
            label: thePrompt?.replace("{{data}}", theTag),
          }}
          onChange={(values: any) => {
            // const idx = tags?.findIndex((item: any) => item.uuid === uuid);
            let tmpTags = tags;
            tmpTags[idx].prompt = values.value;
            updateTags(tmpTags);
            updatePrompt(values.value);
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: "300px",
              textAlign: "left",
              fontSize: "13px",
              outline: "none",
              minHeight: "40px",
              marginBottom: "20px",
            }),
          }}
          options={promptTypes?.map((item: any) => {
            return {
              value: item,
              label: item?.replace("{{data}}", theTag),
            };
          })}
        />
      </Box>
      <Flex
        sx={{
          width: "50px",
          border: "0px green solid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paragraph
          sx={{ cursor: "pointer", color: "firebrick" }}
          onClick={() => {
            const newArr = tags.filter((item: any) => item.uuid !== uuid);
            updateTags(newArr);
          }}
        >
          <XCircle size={24} />
        </Paragraph>
      </Flex>
    </Flex>
  );
};

const CreateNewReport = ({
  state,
  updateState,
  session,
  docs,
  reports,
  setLoading,
}: any) => {
  const [reportState, updateReportState] = useState(defaultState);
  const [tags, updateTags] = useState(defaultTags);

  return (
    <Flex sx={{ flexDirection: "column", width: "650px", mb: "200px" }}>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "650px",
          }}
          title="Report Name"
          subtitle=" *"
        />
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "650px",
            mt: "0px",
            mb: "20px",
            border: "1px solid lightgrey",
            fontSize: "14px",
            color: "#555",
            fontStyle: "normal",
          }}
          type="text"
          data-testid="reportName"
          id="reportName"
          name="reportName"
          placeholder=""
          onChange={(e) =>
            updateReportState({ ...reportState, reportName: e?.target?.value })
          }
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "650px",
          }}
          title="Select Documents"
          subtitle=" *"
        />
        <ReactSelect
          value={docs.map((doc: any) => {
            //@ts-ignore
            if (reportState.documentIds?.includes(doc?._id)) {
              return {
                value: doc?._id,
                label: doc?.label ? doc?.label : doc?.saved_filename,
              };
            }
          })}
          onChange={(values: any) => {
            const idsOnly = values?.map((doc: any) => doc?.value);
            updateReportState({
              ...reportState,
              documentIds: idsOnly,
            });
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: "650px",
              outline: "none",
              minHeight: "45px",
              marginBottom: "20px",
            }),
          }}
          isMulti={true}
          options={docs?.map((doc: any) => {
            return {
              value: doc?._id,
              label: doc?.label ? doc?.label : doc?.saved_filename,
            };
          })}
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "650px",
          }}
          title="Base Template"
          subtitle=" *"
        />
        <ReactSelect
          value={baseTemplates.map((item: any) => {
            if (reportState.baseTemplate === item) {
              return {
                value: item,
                label: item,
              };
            }
          })}
          onChange={(values: any) => {
            updateReportState({
              ...reportState,
              baseTemplate: values?.value,
            });
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: "650px",
              outline: "none",
              minHeight: "45px",
              marginBottom: "20px",
            }),
          }}
          options={baseTemplates?.map((item: any) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "650px",
          }}
          title="Tag Replacements"
          subtitle=""
        />

        <Box>
          {tags?.map((item, i) => (
            <TagAndPromptItem //@ts-ignore
              key={`${item.uuid}`} //@ts-ignore
              uuid={item.uuid}
              data={item.data}
              tag={item.tag}
              prompt={item.prompt}
              tags={tags}
              updateTags={updateTags}
            />
          ))}
        </Box>
        <Flex sx={{ justifyContent: "flex-start" }}>
          <Paragraph
            sx={{
              cursor: "pointer",
              color: "green",
              fontWeight: "500",
              fontSize: "14px",
            }}
            onClick={() => {
              let newTags = [...tags];
              //@ts-ignore
              newTags.push({ tag: "", data: "", prompt: "", uuid: uuidv4() });
              updateTags(newTags);
            }}
          >
            + add row
          </Paragraph>
        </Flex>

        <Flex sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "40px",
              mr: "60px",
              mb: "10px",
              height: "40px",
              width: "150px",
              fontSize: "14px",
              zIndex: 9999,
            }}
            onClick={async () => await createDocx(setLoading, session, tags)}
          >
            Generate
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CreateNewReport;
