import { Box, Paragraph, Flex, Input, Button } from "theme-ui";
import { chat, generateDocx } from "@/utils/api-helper";

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

const CreateNewReport = ({ stat, updateState, session }: any) => {
  return <Flex>CREATE</Flex>;
};

{
  /* <Paragraph
        sx={{
          mt: "100px",
          fontSize: "40px",
          cursor: "pointer",
          "&:hover": { fontSize: "50px", color: "red" },
        }}
        onClick={async () => await createDocx(setLoading, session)}
      >
        Run the Test
      </Paragraph> */
}
export default CreateNewReport;
