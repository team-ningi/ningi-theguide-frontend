import { TagItemType } from "@/lib/types";
import axios from "axios";

export const generateDocx = async (
  tags: object,
  templateDefinition: object,
  reportId: string,
  templateURL: string,
  outputName: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/generate-docx",
    data: {
      tags,
      templateDefinition,
      reportId,
      templateURL,
      outputName,
      authToken,
    },
  });

export const getUserDocuments = async (
  id: string,
  authToken: string,
  embedded: any
) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-documents",
    data: {
      user_id: id,
      authToken,
      embedded,
    },
  });

export const getTags = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-tags",
    data: {
      user_id: id,
      authToken,
    },
  });

export const updateTagsAndPrompts = async (
  id: string,
  label: string,
  tags: any[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-tags",
    data: {
      id,
      label,
      tags,
      authToken,
    },
  });

export const addTagsAndPrompts = async (
  user_id: string,
  label: string,
  tags: any[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-tags",
    data: {
      user_id,
      label,
      tags,
      authToken,
    },
  });

export const deleteTagsAndPrompts = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/delete-tags",
    data: {
      id,
      authToken,
    },
  });

export const getUserTemplates = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-templates",
    data: {
      user_id: id,
      authToken,
    },
  });

export const getUserReports = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-reports",
    data: {
      user_id: id,
      authToken,
    },
  });

export const createNewReport = async (
  user_id: string,
  report_name: string,
  tags: any[],
  template_definition: any,
  tagResults: any,
  document_ids: string[],
  baseTemplateURL: string,
  tag_chunks_to_process: any[],
  tag_chunks_processed: any[],
  initialPrompt: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-report",
    data: {
      user_id,
      report_name,
      tags,
      template_definition,
      tagResults,
      document_ids,
      baseTemplateURL,
      tag_chunks_to_process,
      tag_chunks_processed,
      initialPrompt,
      authToken,
    },
  });

export const getUserHistory = async (id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-history",
    data: {
      user_id: id,
      authToken,
    },
  });

export const chat = async (
  question: string,
  documentIds: string[],
  authToken: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  try {
    return await axios({
      method: "post",
      url: "/api/db/chat",
      data: {
        question,
        documentIds,
        authToken,
      },
    });
  } catch (e) {
    //swallow failure
    return { data: { answer: "" } };
  }
};

export const createTheTags = async (
  tags: { theKey: string; theValue: string }[],
  documentIds: string[],
  additionalPrompt: string,
  authToken: string,
  reportId: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  try {
    return await axios({
      method: "post",
      url: "/api/db/chat-get-tags",
      data: {
        tags,
        documentIds,
        additionalPrompt,
        authToken,
        reportId,
      },
    });
  } catch (e) {
    //swallow failure
    return { data: { answer: "" } };
  }
};

export const getTagsSingleChunk = async (
  tags: { theKey: string; theValue: string }[],
  documentIds: string[],
  additionalPrompt: string,
  authToken: string,
  reportId: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  try {
    return await axios({
      method: "post",
      url: "/api/db/chat-get-tags-single",
      data: {
        tags,
        documentIds,
        additionalPrompt,
        authToken,
        reportId,
      },
    });
  } catch (e) {
    //swallow failure
    return { data: { answer: "" } };
  }
};

export const createHistory = async (
  user_id: string,
  document_ids: string[],
  question: string,
  answer: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-history",
    data: {
      user_id,
      document_ids,
      question,
      answer,
      authToken,
    },
  });

export const updateHistory = async (
  user_id: string,
  history: any,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-history",
    data: {
      user_id,
      history,
      authToken,
    },
  });

export const getSingleReport = async (report_id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-individual-report",
    data: {
      report_id,
      authToken,
    },
  });

export const refineTheText = async (
  original_text: string,
  _id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/refine-text",
    data: {
      original_text,
      document_id: _id,
      authToken,
    },
  });

export const getSingleDocument = async (
  document_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/get-individual-document",
    data: {
      document_id,
      authToken,
    },
  });

export const updateReportTagsProcessed = async (
  user_id: string,
  report_id: string,
  tag_chunks_to_process: any[],
  tag_chunks_processed: any[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-report-tags-processed",
    data: {
      user_id,
      report_id,
      tag_chunks_to_process,
      tag_chunks_processed,
      authToken,
    },
  });

export const updateReportTagsAndDefinitions = async (
  user_id: string,
  report_id: string,
  template_definition: any[],
  tagResults: any[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-report-definitions-and-tags",
    data: {
      user_id,
      report_id,
      template_definition,
      tagResults,
      authToken,
    },
  });

export const updateReportOriginalTags = async (
  user_id: string,
  report_id: string,
  tagResults: any[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/set-original-tag-results",
    data: {
      user_id,
      report_id,
      tagResults,
      authToken,
    },
  });

export const getSignedURL = async (
  id: string,
  file: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/get-signed-url",
    data: {
      user_id: id,
      file,
      authToken,
    },
  });

export const getUserDocGroups = async (user_id: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/get-users-doc-groups",
    data: {
      user_id,
      authToken,
    },
  });

export const CreateUserDocGroup = async (
  user_id: string,
  label: string,
  document_ids: string[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-doc-group",
    data: {
      user_id,
      label,
      document_ids,
      authToken,
    },
  });

export const UpdateDocGroup = async (
  document_group_id: string,
  label: string,
  documentIds: string[],
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-doc-group",
    data: {
      document_group_id,
      label,
      documentIds,
      authToken,
    },
  });

export const UpdateGroupIdInDocument = async (
  document_group_id: string,
  document_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/update-doc-group-id",
    data: {
      document_group_id,
      document_id,
      authToken,
    },
  });

export const getSingleDocGroup = async (
  doc_group_id: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/get-individual-doc-group",
    data: {
      doc_group_id,
      authToken,
    },
  });
