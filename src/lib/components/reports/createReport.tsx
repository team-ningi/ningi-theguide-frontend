import { Box, Paragraph, Flex, Input, Button, Switch } from "theme-ui";
import {
  chat,
  createTheTags,
  generateDocx,
  createNewReport,
} from "../../../utils/api-helper";
import { useState } from "react";
import ReactSelect from "react-select";
import { XCircle } from "phosphor-react";
import { InputLabel } from "../pages/reports";
import { DocType, SessionType, SetLoadingType } from "../../../lib/types";
import { v4 as uuidv4 } from "uuid";
import { select } from "redux-saga/effects";

const returnPrePrompt = (clientNames: {
  client1Name: string;
  client1NameAlias: string;
  client2Name: string;
  client2NameAlias: string;
}) => {
  const { client1Name, client1NameAlias, client2Name, client2NameAlias } =
    clientNames;
  const Client1Name = client1Name ? client1Name : "";
  const Client1NameAlias =
    client1NameAlias !== "" ? `aka ${client1NameAlias} ` : "";
  const Client2Name = client2Name ? client2Name : "";
  const Client2NameAlias =
    client2NameAlias !== "" ? `aka ${client2NameAlias} ` : "";

  const client2Info = Client2Name
    ? `, client 2 is ${Client2Name} ${Client2NameAlias}.`
    : ".";

  return `Client 1 is ${Client1Name} ${Client1NameAlias} ${client2Info}`;
};

const chunkArrayInGroups = (arr: any, size: number) => {
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, size));
  }
  return results;
};

const saveReport = async (
  reportState: any,
  setLoading: SetLoadingType,
  session: SessionType,
  tags: { theKey: string; theValue: string }[],
  generateDoc: boolean,
  showNotification: any,
  hideNotification: any,
  user_id: string,
  clientNames: any
) => {
  const docId = reportState?.documentIds;

  const initialPrompt = returnPrePrompt(clientNames);
  console.log(tags);
  if (
    !tags?.length ||
    clientNames?.Client1Name === "" ||
    !reportState?.reportName ||
    !reportState?.documentIds?.length ||
    !reportState?.baseTemplateURL
  ) {
    showNotification({
      text: "You must complete all required fields.",
      type: "error",
    });
    setTimeout(() => hideNotification(), 5500);
    return false;
  }
  setLoading(true);

  const chunks = chunkArrayInGroups(tags, 11);

  const tag_chunks_to_process: any[] = chunks;
  const tag_chunks_processed: any[] = [];
  const { data } = await createNewReport(
    user_id,
    reportState?.reportName,
    tags,
    {},
    reportState?.documentIds,
    reportState?.baseTemplateURL,
    tag_chunks_to_process,
    tag_chunks_processed,
    initialPrompt,
    session?.authToken
  );
  const reportId = data?.report?._id;

  console.log(reportId);
  setLoading(false);
  return reportId;
};

const defaultState = {
  reportName: "",
  documentIds: [],
  baseTemplate: "",
  baseTemplateURL: "",
  tagsSelected: "Custom",
  tags: [],
  docSelectMode: "individual", // individual || grouped
  groupSelected: "",
};

export const TagAndPromptItem = ({
  TheUuid,
  tag,
  data,
  prompt,
  tags,
  updateTags,
}: any) => {
  const idx = tags?.findIndex((item: any) => item.id === TheUuid);
  const { theKey, theValue, id } = tag;
  const [theTag, updateTheTag] = useState(theKey);
  const [theData, updateTheData] = useState(theValue);

  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        width: "100%",
        border: "0px solid red",
      }}
    >
      <Box sx={{ width: "200px" }}>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "200px",
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
            width: "200px",
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
            let tmpTags = tags;
            tmpTags[idx].theKey = e.target.value;
            updateTags(tmpTags);
            updateTheTag(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "440px" }}>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "440px",
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
            width: "440px",
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
          value={theData}
          onChange={(e) => {
            let tmpTags = tags;
            tmpTags[idx].theValue = e.target.value;
            updateTags(tmpTags);
            updateTheData(e.target.value);
          }}
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
            const newArr = tags.filter((item: any) => item.id !== id);
            updateTags(newArr);
          }}
        >
          <XCircle size={24} />
        </Paragraph>
      </Flex>
    </Flex>
  );
};

const CreateNewReportComponent = ({
  state,
  updateState,
  session,
  docs,
  reports,
  setLoading,
  showNotification,
  hideNotification,
  tagList,
  baseTemplates = [],
  docGroups,
}: any) => {
  const [reportState, updateReportState] = useState(defaultState);
  const [clientNames, updateClientNames] = useState({
    client1Name: "",
    client1NameAlias: "",
    client2Name: "",
    client2NameAlias: "",
  });
  const [tags, updateTags] = useState([]);
  console.log(docGroups);
  return (
    <Flex sx={{ flexDirection: "column", width: "100%", mb: "200px" }}>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Client 1 Full Name"
          subtitle=" *"
        />
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "100%",
            mt: "0px",
            mb: "20px",
            border: "1px solid lightgrey",
            fontSize: "14px",
            color: "#555",
            fontStyle: "normal",
          }}
          type="text"
          data-testid="client1Name"
          id="client1Name"
          name="client1Name"
          placeholder=""
          onChange={(e) =>
            updateClientNames({ ...clientNames, client1Name: e?.target?.value })
          }
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Client 1 Alias"
          subtitle=""
        />
        <Paragraph
          sx={{ fontSize: "13px", color: "#666", textAlign: "left", mb: "5px" }}
        >
          leave empty if they dont have an alias
        </Paragraph>
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "100%",
            mt: "0px",
            mb: "20px",
            border: "1px solid lightgrey",
            fontSize: "14px",
            color: "#555",
            fontStyle: "normal",
          }}
          type="text"
          data-testid="client1NameAlias"
          id="client1NameAlias"
          name="client1NameAlias"
          placeholder=""
          onChange={(e) =>
            updateClientNames({
              ...clientNames,
              client1NameAlias: e?.target?.value,
            })
          }
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Client 2 Full Name"
          subtitle=" "
        />
        <Paragraph
          sx={{ fontSize: "13px", color: "#666", textAlign: "left", mb: "5px" }}
        >
          leave empty if there is no client 2 for this report
        </Paragraph>
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "100%",
            mt: "0px",
            mb: "20px",
            border: "1px solid lightgrey",
            fontSize: "14px",
            color: "#555",
            fontStyle: "normal",
          }}
          type="text"
          data-testid="client2Name"
          id="client2Name"
          name="client2Name"
          placeholder=""
          onChange={(e) =>
            updateClientNames({ ...clientNames, client2Name: e?.target?.value })
          }
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Client 2 Alias"
          subtitle=""
        />
        <Paragraph
          sx={{ fontSize: "13px", color: "#666", textAlign: "left", mb: "5px" }}
        >
          leave empty if they dont have an alias
        </Paragraph>
        <Input
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: 0,
            borderColor: "inputBorder",
            width: "100%",
            mt: "0px",
            mb: "20px",
            border: "1px solid lightgrey",
            fontSize: "14px",
            color: "#555",
            fontStyle: "normal",
          }}
          type="text"
          data-testid="client2NameAlias"
          id="client2NameAlias"
          name="client2NameAlias"
          placeholder=""
          onChange={(e) =>
            updateClientNames({
              ...clientNames,
              client2NameAlias: e?.target?.value,
            })
          }
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
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
            width: "100%",
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

      <InputLabel
        customSX={{
          textAlign: "left",
          width: "100%",
        }}
        title="How would you like to select your documents"
        subtitle=" *"
      />
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
          pb: 4,
          width: "260px",
        }}
      >
        <Paragraph sx={{ flex: 1, mr: "18px", fontSize: "15px" }}>
          Individual
        </Paragraph>
        <Box>
          <Switch
            id="lb_switch"
            data-testid="lb_switch_select"
            defaultChecked={reportState?.docSelectMode === "grouped"}
            sx={{
              width: "80px",
              height: "40px",
              bakgroundColor: "gray",
              "input:checked ~ &": {
                backgroundColor: "#96CCB9",
              },
              " >div": {
                mt: "3px",
                ml: "3px",
                width: "30px",
                height: "30px",
              },
              "input:checked ~ & >div": {
                transform: "translateX(40px)",
                width: "30px",
                height: "30px",
              },
            }}
            onChange={(e) => {
              updateReportState({
                ...reportState,
                docSelectMode: e?.target?.checked ? "grouped" : "individual",
                documentIds: !e?.target?.checked
                  ? reportState?.documentIds
                  : [],
                groupSelected: "",
              });
            }}
          />
        </Box>
        <Paragraph sx={{ flex: 1, ml: "10px", fontSize: "15px" }}>
          grouped
        </Paragraph>
      </Flex>
      {reportState?.docSelectMode === "individual" && (
        <Box>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "100%",
            }}
            title="Select Documents Individually"
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
                width: "100%",
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
      )}
      {reportState?.docSelectMode === "grouped" && (
        <Box>
          <InputLabel
            customSX={{
              textAlign: "left",
              width: "100%",
            }}
            title="Select Document Group"
            subtitle=" *"
          />
          <ReactSelect
            value={docGroups.map((doc: any) => {
              //@ts-ignore
              if (reportState?.groupSelected === doc?.label) {
                return {
                  value: doc?.label,
                  label: `${doc?.label} (${doc?.document_ids?.length} docs)`,
                };
              }
            })}
            onChange={(values: any) => {
              const selectedGroup = docGroups?.find(
                (doc: any) => doc?.label === values?.value
              );
              const DocIds = selectedGroup?.document_ids;

              updateReportState({
                ...reportState,
                documentIds: DocIds,
                groupSelected: selectedGroup?.label,
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
            options={docGroups?.map((doc: any) => {
              return {
                value: doc?.label,
                label: `${doc?.label} (${doc?.document_ids?.length} docs)`,
              };
            })}
          />
        </Box>
      )}
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Base Template"
          subtitle=" *"
        />
        <ReactSelect
          value={baseTemplates.map((item: any) => {
            if (reportState.baseTemplate === item.label) {
              return {
                value: item.value,
                label: item.label,
              };
            }
          })}
          onChange={(values: any) => {
            updateReportState({
              ...reportState,
              baseTemplate: values?.label,
              baseTemplateURL: values?.value,
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
          options={baseTemplates?.map((item: any) => {
            return {
              value: item.value,
              label: item.label,
            };
          })}
        />
      </Box>
      <Box>
        <InputLabel
          customSX={{
            textAlign: "left",
            width: "100%",
          }}
          title="Tags"
          subtitle=" *"
        />
        <Paragraph
          sx={{ fontSize: "13px", color: "#666", textAlign: "left", mb: "5px" }}
        >
          Select from one of the saved collections or create a one off custom
          set
        </Paragraph>
        <ReactSelect
          value={tagList.map((item: any) => {
            if (reportState.tagsSelected === item?.label) {
              return {
                value: item?.label,
                label: item?.label,
              };
            }
          })}
          onChange={(values: any) => {
            updateReportState({
              ...reportState,
              tagsSelected: values?.value,
            });

            const TagsToUse = tagList?.find(
              (item: any) => item?.label === values?.value
            );
            updateTags(TagsToUse?.tags);
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
          options={tagList?.map((item: any) => {
            return {
              value: item?.label,
              label: item?.label,
            };
          })}
        />
        {reportState.tagsSelected === "Custom" && (
          <>
            <Box>
              {tags?.map((item: string[], i) => (
                <TagAndPromptItem //@ts-ignore
                  key={`${uuidv4()}`} //@ts-ignore
                  TheUuid={item.id}
                  tag={item}
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
                  newTags.push({
                    theKey: "",
                    theValue: "",
                    id: uuidv4(),
                  });
                  updateTags(newTags);
                  console.log(newTags);
                }}
              >
                + add tag
              </Paragraph>
            </Flex>
          </>
        )}
        <Flex sx={{ justifyContent: "flex-end" }}>
          <Paragraph
            sx={{
              mt: "50px",
              mr: "20px",
              color: "grey",
              fontSize: "15px",
              cursor: "pointer",
            }}
            onClick={() => window.location.reload()}
          >
            Cancel
          </Paragraph>

          <Button
            variant="primary"
            sx={{
              color: "white",
              cursor: "pointer",
              mt: "40px",
              // mr: "60px",
              mb: "10px",
              height: "40px",
              width: "150px",
              fontSize: "14px",
            }}
            onClick={async () => {
              let tagstoUse = tags;

              //IF CUSTOM FILTER TAGS TO BE FLAT ARRAY
              if (reportState.tagsSelected === "Custom") {
                // @ts-ignore
                tagstoUse = tags.map((item: any) => ({
                  [item.theKey]: item?.theValue,
                }));
              }

              const reportId = await saveReport(
                reportState,
                setLoading,
                session,
                tagstoUse,
                true,
                showNotification,
                hideNotification,
                state?.user_id,
                clientNames
              );

              if (reportId) {
                updateState({
                  ...state,
                  mode: "replace-tags",
                  reportId,
                  success: false,
                  refreshReports: true,
                });
                updateReportState(defaultState);
              }
            }}
          >
            Create report
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CreateNewReportComponent;
