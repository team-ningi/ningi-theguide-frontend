import { TagItemType } from "@/lib/types";
import axios from "axios";

export const generateDocx = async (
  tags: object,
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
  tagResults: any[],
  document_ids: string[],
  baseTemplateURL: string,
  authToken: string
) =>
  await axios({
    method: "post",
    url: "/api/db/create-report",
    data: {
      user_id,
      report_name,
      tags,
      tagResults,
      document_ids,
      baseTemplateURL,
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
) =>
  await axios({
    method: "post",
    url: "/api/db/chat",
    data: {
      question,
      documentIds,
      authToken,
    },
  });

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
