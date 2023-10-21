//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../src/pages";
import { store } from "../../src/pages/_app";

jest.mock("next/font/google", () => ({
  Poppins: () => {},
  Roboto: () => {},
}));

describe("Login", () => {
  it("Login page is rendered", () => {
    const { container } = render(
      <Provider store={store}>
        <Login session={{ email: "", authToken: "" }} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

    const Title = screen.getAllByText(/Ai Adviser/i);
    expect(Title[0]).toBeInTheDocument();

    const Email = screen.getAllByText(/Email address/i);
    expect(Email[0]).toBeInTheDocument();

    const ButtonText = screen.getAllByText(/Send magic link/i);
    expect(ButtonText[0]).toBeInTheDocument();

    const InfoText = screen.getAllByText(
      /Magic links are a form of passwordless login. This means you can log in to your account by clicking on the link emailed to you./i
    );
    expect(InfoText[0]).toBeInTheDocument();
  });
});
