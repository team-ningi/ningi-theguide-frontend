/* eslint-disable react-hooks/exhaustive-deps */
import { Paragraph, Flex, Button, Box } from "theme-ui";
import { ThreeCircles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import {
  getSingleDocument,
  getSingleDocGroup,
  getUserDocGroups,
  CreateUserDocGroup,
  UpdateDocGroup,
  UpdateGroupIdInDocument,
} from "../../../utils/api-helper";
import { DocGroupType } from "@/lib/types";
import { GroupSelection } from "../addContent/add-new-document";

const KeyValue = ({
  theKey,
  theValue,
}: {
  theKey: string;
  theValue?: string;
}) => (
  <Flex sx={{ width: "100%", ml: "0px", mb: "8px" }}>
    <Paragraph
      sx={{
        fontWeight: "300",
        fontSize: "14px",
        minWidth: "130px",
        textAlign: "left",
      }}
    >
      {theKey} :
    </Paragraph>

    <Paragraph
      sx={{
        fontSize: "15px",
        ml: "20px",
        fontWeight: "500",
      }}
    >
      {theValue}
    </Paragraph>
  </Flex>
);

const updateGroupData = async (
  state: any,
  updateState: any,
  session: any,
  docGroups: any,
  hideNotification: () => {
    type: string;
  },
  showNotification: (data: any) => {
    type: string;
    data: any;
  }
) => {
  let groupId = "";
  const { docGroupSelected, docGroupNew, selectedDocId } = state;
  const docId = selectedDocId;

  const LabelExists = docGroups?.filter(
    (item: any) => item?.label === docGroupNew
  );

  if (LabelExists?.length > 0) {
    showNotification({
      text: "Group label exists",
      type: "error",
    });
    setTimeout(() => {
      hideNotification();
    }, 4000);
    return;
  }

  if (docGroupSelected === "" && docGroupNew === "") {
    showNotification({
      text: "You must select or create a group",
      type: "error",
    });
    setTimeout(() => {
      hideNotification();
    }, 4000);
    return;
  }

  if (docGroupSelected !== "") {
    groupId = `${docGroupSelected}`;
  }

  if (docGroupNew !== "") {
    const { data: groupData } = await CreateUserDocGroup(
      state?.user_id,
      `${docGroupNew}`,
      [],
      session?.authToken
    );

    groupId = groupData?.group?._id;
  }

  if (docGroupSelected === "" && docGroupNew !== "") {
    await UpdateDocGroup(
      groupId,
      `${docGroupNew}`,
      [docId],
      session?.authToken
    );
  }

  if (docGroupSelected !== "" && docGroupNew === "") {
    const selectedGroup = docGroups?.find((item: any) => item?._id === groupId);

    const existingIds = selectedGroup?.document_ids.filter(
      (item: any) => item?._id !== docId
    );
    const updatedDocArr = [...existingIds, docId];
    await UpdateDocGroup(groupId, "", updatedDocArr, session?.authToken);
  }

  await UpdateGroupIdInDocument(groupId, docId, session?.authToken);

  updateState({
    ...state,
    mode: "start",
    docGroupSelected: "",
    docGroupNew: "",
    selectedDocId: "",
  });
};

const GroupInfo = ({
  state,
  updateState,
  session,
  hideNotification,
  showNotification,
}: any) => {
  const [loading, updateLoading] = useState(true);
  const [docGroups, updateDocGroups] = useState<DocGroupType[]>([]);

  const [selectedGroup, updateSelectedGroup] = useState<{
    document_ids: string;
    label: string;
  }>({ document_ids: "", label: "" });

  const [selectedDoc, updateSelectedDoc] = useState<{
    document_group_id?: string;
    user_id?: string;
    label: string;
    type_of_embedding: string;
    original_filename: string;
    file_type: string;
  }>({
    label: "",
    type_of_embedding: "",
    original_filename: "",
    file_type: "",
  });

  useEffect(() => {
    (async () => {
      if (state.selectedDocId) {
        const { data } = await getSingleDocument(
          state.selectedDocId,
          session?.authToken
        );

        if (!data[0]) {
          window.location.assign("/documents");
        } else {
          const {
            document_group_id,
            label,
            type_of_embedding,
            original_filename,
            user_id,
            file_type,
          } = data[0];

          updateSelectedDoc({
            document_group_id,
            label,
            type_of_embedding,
            original_filename,
            user_id,
            file_type,
          });

          if (document_group_id !== "") {
            const { data: groupData } = await getSingleDocGroup(
              document_group_id,
              session?.authToken
            );
            updateState({ ...state, docGroupSelected: document_group_id });
            if (groupData[0]) {
              const { document_ids, label } = groupData[0];
              updateSelectedGroup({ document_ids, label });
            }
          }

          const { data: groupsAll } = await getUserDocGroups(
            user_id,
            session?.authToken
          );
          updateDocGroups(groupsAll);

          updateLoading(false);
        }
      } else {
        window.location.assign("/documents");
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

      <Flex
        sx={{
          fontSize: "17px",
          fontWeight: "300",
          textAlign: "left",
          color: "#444",
          mb: "30px",
          mt: "0px",
          flexDirection: "column",
        }}
      >
        <Button
          variant="primary"
          sx={{
            color: "#555",
            border: "1px solid grey",
            cursor: "pointer",
            background: "transparent",
            mt: "-50px",
            alignSelf: "flex-start",
            mb: "40px",
            mr: "15px",
            height: "40px",
            width: "140px",
            fontSize: "14px",
            zIndex: 9999,
          }}
          onClick={() => {
            updateState({
              ...state,
              mode: "start",
              selectedDocId: "",
              docGroupSelected: "",
              docGroupNew: "",
            });
          }}
        >
          Go Back
        </Button>

        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "100px",
            mb: "20px",
            border: "0px solid red",
          }}
        >
          <KeyValue theKey="Label" theValue={`${selectedDoc?.label}`} />
          <KeyValue
            theKey="Type"
            theValue={`${selectedDoc?.type_of_embedding}`}
          />
          <KeyValue
            theKey="File Name"
            theValue={`${selectedDoc?.original_filename}`}
          />
          <KeyValue
            theKey="Type"
            theValue={`${selectedDoc?.type_of_embedding}`}
          />
          <KeyValue theKey="File Type" theValue={`${selectedDoc?.file_type}`} />

          {selectedGroup?.label !== "" && (
            <>
              <KeyValue
                theKey="Selected Group"
                theValue={`${selectedGroup?.label}`}
              />
            </>
          )}
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "200px",
            border: "0px solid red",
            mt: "40px",
          }}
        >
          <GroupSelection
            title="Update the group selection for this document"
            state={state}
            updateState={updateState}
            docGroups={docGroups}
          />
          <Box
            sx={{
              height: "40px",
              width: "100px",
              mt: "10px",
              ml: "0px",
              alignSelf: "flex-start",
              mb: "10px",
            }}
          >
            <Button
              variant="primary"
              sx={{
                color: "white",
                cursor:
                  state.docGroupSelected === "" && state.docGroupNew === ""
                    ? "not-allowed !important"
                    : "pointer",
                height: "40px",
                width: "140px",
                fontSize: "14px",
              }}
              onClick={async () => {
                updateLoading(true);
                await updateGroupData(
                  state,
                  updateState,
                  session,
                  docGroups,
                  hideNotification,
                  showNotification
                );
                updateLoading(false);
              }}
              data-testid="upload-group-btn"
            >
              Update Group
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GroupInfo;
