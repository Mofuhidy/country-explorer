import { render, screen } from "@testing-library/react";
import React from 'react';
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CountryBox from "../components/CountryBox";
import store from "../redux/store";
import "@testing-library/jest-dom";

it("Check if the component changed", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CountryBox />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Check if the component CountryBox container is there", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryBox />
      </BrowserRouter>
    </Provider>
  );
  const container = await screen.findByTestId("box");
  expect(container).toBeInTheDocument();
});
