//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tags from "../../src/pages/tags";
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

describe("Tags", () => {
  it("Tags page is rendered", async () => {
    const { container, getAllByTestId } = render(
      <Provider store={mockStore(initialState)}>
        <Tags session={{ email: "test@ningi.co.uk", authToken: "" }} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

    const Title = screen.getAllByText(/Tags & Prompts/i);
    expect(Title[0]).toBeInTheDocument();

    const CreateBtn = screen.getAllByText(/Create tags & prompts/i);
    expect(CreateBtn[0]).toBeInTheDocument();

    const SubTitle = screen.getAllByText(
      /This is where you can view, create and edit collections of tags & prompts, ready for when you generate a report./i
    );
    expect(SubTitle[0]).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(CreateBtn[0]);
    });

    const UploadBtn = getAllByTestId("save-btn");
    expect(UploadBtn[0]).toBeInTheDocument();
  });
});
