import { Box, Paragraph, Flex, Checkbox, Button, Switch } from "theme-ui";

export const defaultDefinitions = {
  show_cfm_timeline: false,
  show_cfm_cashcalc: false,
  show_client_making_contributions: false,
  show_recommended_inv_saltus: false,
  show_recommended_inv_prudential: false,
  show_recommended_inv_ruffer: false,
  show_recommended_inv_bespoke: false,
  show_recommended_inv_clever_mps: false,
  show_recommended_inv_clever_adviser: false,
  show_recommended_product_isa_advantage: false,
  show_recommended_product_gia_advantage: false,
  show_recommended_product_inv_bond_advantage: false,
  show_recommended_product_pension_advantage: false,
  show_recommended_product_gia_disadvantage: false,
  show_recommended_product_inv_bond_disadvantage: false,
  show_recommended_product_pension_disadvantage: false,
  show_declaration_saltus_dec: false,
  show_declaration_saltus_sig: false,
  show_declaration_elsewhere: false,
  show_recommended_provider_prudential: false,
  show_recommended_provider_fundment: false,
  show_recommended_provider_saltus: false,
  show_recommended_provider_quilter: false,
};

export const definitionQuestions = [
  {
    question: "Which cfm have you used",
    options: [
      { title: "timeline", key: "show_cfm_timeline" },
      { title: "cash calc", key: "show_cfm_cashcalc" },
    ],
  },
  {
    question: "Is the client going to be making contributions",
    options: [{ title: "yes", key: "show_client_making_contributions" }],
  },
  {
    question: "What is the recommended investment",
    options: [
      { title: "saltus (mps / gmp)", key: "show_recommended_inv_saltus" },
      { title: "prudential", key: "show_recommended_inv_prudential" },
      { title: "ruffer", key: "show_recommended_inv_ruffer" },
      { title: "bespoke dfm", key: "show_recommended_inv_bespoke" },
      { title: "clever mps", key: "show_recommended_inv_clever_mps" },
      { title: "clever adviser", key: "show_recommended_inv_clever_adviser" },
    ],
  },
  {
    question: "What product are you recommending",
    options: [
      { title: "isa advantage", key: "show_recommended_product_isa_advantage" },
      { title: "gia advantage", key: "show_recommended_product_gia_advantage" },
      {
        title: "investment bond advantage",
        key: "show_recommended_product_inv_bond_advantage",
      },
      {
        title: "pension advantage",
        key: "show_recommended_product_pension_advantage",
      },
      {
        title: "gia disadvantage",
        key: "show_recommended_product_gia_disadvantage",
      },
      {
        title: "investment bond disadvantage",
        key: "show_recommended_product_inv_bond_disadvantage",
      },
      {
        title: "pension disadvantage",
        key: "show_recommended_product_pension_disadvantage",
      },
    ],
  },
  {
    question: "Declaration / next steps",
    options: [
      { title: "saltus declaration", key: "show_declaration_saltus_dec" },
      { title: "saltus signature", key: "show_declaration_saltus_sig" },
      { title: "elsewhere", key: "show_declaration_elsewhere" },
    ],
  },
  {
    question: "Who is the recommended provider",
    options: [
      { title: "prudential", key: "show_recommended_provider_prudential" },
      { title: "fundment", key: "show_recommended_provider_fundment" },
      { title: "saltus", key: "show_recommended_provider_saltus" },
      { title: "quilter", key: "show_recommended_provider_quilter" },
    ],
  },
];

export const DefinitionSwitches = ({
  reportState,
  updateReportState,
  definitionQuestions,
  templateDefinitionKey = "templateDefinition",
}: any) => {
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        mt: "20px",
        color: "#555",
        border: "0px red solid",
        justifyContent: "space-between",
      }}
    >
      {definitionQuestions?.map((item: any, i: number) => (
        <Flex
          sx={{
            width: "380px",
            mb: "25px",
            borderRight: i % 2 === 0 ? "1px solid lightgrey" : "",
            flexDirection: "column",
          }}
          key={`${item?.key}-${i}`}
        >
          <Paragraph
            sx={{
              fontWeight: "600",
              mb: "20px",
              color: "#444",
              textAlign: "left",
            }}
          >
            {item?.question}
          </Paragraph>

          {item?.options?.map((option: any, i: number) => {
            return (
              <Flex
                key={`${option?.title}-${i}`}
                onClick={() => {
                  const newDef = {
                    ...reportState?.[templateDefinitionKey],
                    [option?.key]:
                      !reportState?.[templateDefinitionKey]?.[option?.key],
                  };
                  updateReportState({
                    ...reportState,
                    changes_made: true,
                    [templateDefinitionKey]: newDef,
                  });
                }}
              >
                <Paragraph
                  sx={{ fontSize: "15px", textAlign: "left", mr: "14px" }}
                >
                  {option?.title}
                </Paragraph>
                <Checkbox
                  checked={reportState?.[templateDefinitionKey]?.[option?.key]}
                  onChange={() => {}}
                />
              </Flex>
            );
          })}
        </Flex>
      ))}
    </Flex>
  );
};
