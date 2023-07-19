"use client";
import { isLoggedIn } from "@/utils/cookies";
import * as React from "react";
import { Link } from "react-router-dom";

interface AppLinkProps {
  path: string;
  children: React.ReactNode;
}

export const AppLink: React.FC<AppLinkProps> = ({ path, children }) => {
  if (isLoggedIn()) {
    return <Link to={path}>{children}</Link>;
  }

  return <a href={path}>{children}</a>;
};
