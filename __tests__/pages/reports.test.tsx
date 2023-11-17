//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reports from "../../src/pages/reports";
import { store } from "../../src/pages/_app";
import { act } from "react-dom/test-utils";
import configureStore from "redux-mock-store";

const initialState = {
  account: { darkMode: false, user: { email: "test@ningi.co.uk" } },
};
const mockStore = (state = initialState) => configureStore()(state);

jest.mock("../../src/utils/api-helper", () => {
  const theTags = {
    data: [],
  };
  const docs = {
    data: [],
  };
  const templates = {
    data: [],
  };
  const reports = {
    data: [],
  };
  return {
    getUserReports: jest.fn(() => Promise.resolve(reports)),
    getUserDocuments: jest.fn(() => Promise.resolve(docs)),
    getUserTemplates: jest.fn(() => Promise.resolve(templates)),
    getTags: jest.fn(() => Promise.resolve(theTags)),
  };
});

jest.mock("next/navigation", () => ({
  useRouter: () => {},
  usePathname: () => {},
  useParams: () => {},
  useSearchParams: () => ({
    get: (e) => e,
  }),
}));

jest.mock("next/font/google", () => ({
  Poppins: () => {},
  Roboto: () => {},
}));

describe("Reports", () => {
  it("Reports page is rendered", async () => {
    const { getByText, container, getAllByTestId } = render(
      <Provider store={mockStore(initialState)}>
        <Reports session={{ email: "test@ningi.co.uk", authToken: "" }} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

    await waitFor(async () => {
      const Title = screen.getAllByText(/Generated Reports/i);
      expect(Title[0]).toBeInTheDocument();

      const SubTitle = screen.getAllByText(
        /Generate personalized reports by importing a base template and utilizing data from your uploaded documents./i
      );
      expect(SubTitle[0]).toBeInTheDocument();

      const createReport = screen.getAllByText(/Create Report/i);
      expect(createReport[0]).toBeInTheDocument();

      fireEvent.click(createReport[0]);

      const ViewBtn = screen.getAllByText(/View Reports/i);
      expect(await ViewBtn[0]).toBeInTheDocument();
    });
  });
});
