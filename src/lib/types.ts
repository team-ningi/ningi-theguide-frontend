import { Dispatch, SetStateAction } from "react";

export type SetLoadingType = (loading: boolean) => {
  type: string;
  loading: boolean;
};

export type DocType = {
  custom_filename: string;
  emedding_created: boolean;
  file_type: string;
  file_url: string;
  label: string;
  original_filename: string;
  saved_filename: string;
  user_id: string;
};

export type SessionType = { email: string; authToken: string };

export type stateType = {
  initialLoad: boolean;
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  role: string;
  metadata?: object;
};

export type LoginStateTypes = {
  username: string;
  mode: string;
};

export type LoginSetStateTypes = Dispatch<
  SetStateAction<{
    username: string;
    mode: string;
  }>
>;

export type LoginTypes = {
  setCoreData: (
    email: string,
    session: {
      email: string;
      authToken: string;
    },
    keepLoadingSpinner: boolean
  ) => {
    type: string;
    action: {
      email: string;
      session: {
        email: string;
        authToken: string;
      };
      keepLoadingSpinner: boolean;
    };
  };
  session: { email: string; authToken: string };
  darkMode: boolean;
};

export type ListItemType = {
  _id: string;
  author: string;
  title: string;
  image_url: string;
  updated_at: string;
};

export type UserType = {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  role: string;
};

export type DetailsTypes = {
  setCoreData: (
    email: string,
    session: {
      email: string;
      authToken: string;
    },
    keepLoadingSpinner: boolean
  ) => {
    type: string;
    action: {
      email: string;
      session: {
        email: string;
        authToken: string;
      };
      keepLoadingSpinner: boolean;
    };
  };
  session: SessionType;
  user: UserType;
  darkMode: boolean;
  setLoading: SetLoadingType;
};

export type PageTypes = {
  setCoreData: (
    email: string,
    session: {
      email: string;
      authToken: string;
    },
    keepLoadingSpinner: boolean
  ) => {
    type: string;
    action: {
      email: string;
      session: {
        email: string;
        authToken: string;
      };
      keepLoadingSpinner: boolean;
    };
  };
  session: SessionType;
  user: UserType;
  setLoading: SetLoadingType;
};

export type DashboardStateType = {
  user_id: string;
  customFilename: string;
  label: string;
  mode: string;
  filters: boolean;
};

export type EditContentStateType = {
  data: {
    _id: string;
    image_url: string;
    type: string;
    title: string;
    content: string;
    user_id: string;
    author: string;
  };
  loading: boolean;
  showSuccess: boolean;
  change_image: boolean;
  user_id: string;
};

export type AddContentErrorStateType = {
  customFilename: boolean;
  file_url: boolean;
  label: boolean;
  error_msg: string;
};

export type ContentType = [
  {
    _id: string;
    image_url: string;
    type: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    author: string;
  }
];
