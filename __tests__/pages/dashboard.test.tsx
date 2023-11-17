//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../../src/pages/dashboard";
import configureStore from "redux-mock-store";

const initialState = {
  account: { darkMode: false, user: { email: "test@ningi.co.uk" } },
};
const mockStore = (state = initialState) => configureStore()(state);

jest.mock("next/navigation", () => ({
  useRouter: () => {},
  usePathname: () => {},
  useParams: () => {},
}));

jest.mock("next/font/google", () => ({
  Poppins: () => {},
  Roboto: () => {},
}));

describe("Dashboard", () => {
  it("Dashboard page is rendered", async () => {
    const { getByText, container } = render(
      <Provider store={mockStore(initialState)}>
        <Dashboard session={{ email: "test@ningi.co.uk", authToken: "" }} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

    const Title = screen.getAllByText(/Welcome Back/i);
    expect(Title[0]).toBeInTheDocument();

    const InputLabel = screen.getAllByText(/What would you like to do?/i);
    expect(InputLabel[0]).toBeInTheDocument();

    const Title2 = screen.getAllByText(/How To Generate A Report/i);
    expect(Title2[0]).toBeInTheDocument();

    const Step1 = screen.getAllByText(/Upload Documents/i);
    expect(Step1[0]).toBeInTheDocument();

    const Step2 = screen.getAllByText(/Upload A Base Template/i);
    expect(Step2[0]).toBeInTheDocument();

    const Step3 = screen.getAllByText(/Create Tags & Prompts/i);
    expect(Step3[0]).toBeInTheDocument();

    const Step4 = screen.getAllByText(/Create A Report/i);
    expect(Step4[0]).toBeInTheDocument();

    const Title3 = screen.getAllByText(/Quick Links/i);
    expect(Title3[0]).toBeInTheDocument();

    const QuickLink1 = screen.getAllByText(/Reports/i);
    expect(QuickLink1[0]).toBeInTheDocument();

    const QuickLink2 = screen.getAllByText(/Documents/i);
    expect(QuickLink2[0]).toBeInTheDocument();

    const QuickLink3 = screen.getAllByText(/Templates/i);
    expect(QuickLink3[0]).toBeInTheDocument();

    const QuickLink4 = screen.getAllByText(/Tags/i);
    expect(QuickLink4[0]).toBeInTheDocument();

    const QuickLink5 = screen.getAllByText(/Chat/i);
    expect(QuickLink5[0]).toBeInTheDocument();
  });
});
