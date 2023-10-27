"use client";

import moment from "moment";

export const actions = {
  USER_LOADED: "/user/loaded",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  RESET: "RESET",
  IS_LOADING: "IS_LOADING",
  ERROR: "ERROR",
  CORE_DATA_LOADED: "CORE_DATA_LOADED",
  CLEAR_ERRORS: "CLEAR_ERRORS",
  REFRESH_CORE_DATA: "REFRESH_CORE_DATA",
  REFRESH_USER_DATA: "REFRESH_USER_DATA",
  RESIZE: "RESIZE",
};

const mobileMaxWidth = 600;

const mobileCheck = () =>
  typeof window !== "undefined" ? window?.innerWidth <= mobileMaxWidth : false;

const initialState = {
  loggedIn: false,
  loading: false,
  darkMode: false,
  ningi: true,
  user: null,
  clients: null,
  error: null,
  versionsConfig: null,
  isMobile: mobileCheck(),
  notification: {
    show: false,
    customText: "",
    type: "success", // success | error | gentle | warning
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        notification: { show: false, customText: "", type: "success" },
      };
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: {
          show: true,
          customText: action?.data?.text,
          type: action?.data?.type,
        },
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state?.darkMode,
      };
    case "LOG_USER_IN":
      return {
        ...state,
        loggedIn: true,
        loading: false,
      };
    case "RESIZE":
      return {
        ...state,
        isMobile: mobileCheck(),
      };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "LOG_USER_OUT":
      return {
        ...state,
        ...initialState,
      };
    case actions.USER_LOADED:
      return {
        ...state,
        data: action.data,
        loggedIn: true,
        timestampOfLastDataLoad: moment.utc(),
      };
    case "CORE_DATA_LOADED":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };
    case actions.RESET:
      return { ...initialState, loggedIn: false };
    case actions.IS_LOADING:
      return { ...state, loading: action.loading };
    case actions.ERROR:
      return { ...state, error: action.error };
    case actions.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return { ...state };
  }
};

export default reducer;
