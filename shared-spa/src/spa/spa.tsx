import * as React from "react";
import NoSSR from "./noSSR";
import { App } from "./app";

export const SinglePageApp: React.FC = () => (
  <NoSSR>
    <App />
  </NoSSR>
);
