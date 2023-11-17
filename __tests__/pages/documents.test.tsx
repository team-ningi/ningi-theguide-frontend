//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Documents from "../../src/pages/documents";
import { store } from "../../src/pages/_app";
import { act } from "react-dom/test-utils";
import configureStore from "redux-mock-store";

const initialState = {
  account: { darkMode: false, user: { email: "test@ningi.co.uk" } },
};
const mockStore = (state = initialState) => configureStore()(state);

jest.mock("@aws-sdk/client-s3", () => ({
  S3Client: jest.fn().mockReturnThis(),
  PutObjectCommand: jest.fn().mockReturnThis(),
}));

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

describe("Documents", () => {
  it("Documents page is rendered", async () => {
    const { getByText, container, getAllByTestId } = render(
      <Provider store={mockStore(initialState)}>
        <Documents session={{ email: "test@ningi.co.uk", authToken: "" }} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

    const Title = screen.getAllByText(/Supporting Documents/i);
    expect(Title[0]).toBeInTheDocument();

    const NoResults = screen.getAllByText(/No results found./i);
    expect(NoResults[0]).toBeInTheDocument();

    const SubTitle = screen.getAllByText(
      /Please upload the necessary support documents for data extraction in order to generate your reports./i
    );
    expect(SubTitle[0]).toBeInTheDocument();

    const AddDocBtn = getByText("Add Document");
    await act(async () => {
      fireEvent.click(AddDocBtn);
    });

    const UploadBtn = getAllByTestId("upload-btn");
    expect(UploadBtn[0]).toBeInTheDocument();
  });
});
