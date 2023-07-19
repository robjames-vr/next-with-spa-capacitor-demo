import dynamic from "next/dynamic";
import React from "react";

interface noSsrProps {
  children: React.ReactNode;
}

const NoSsr: React.FC<noSsrProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
