"use client";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/beer/:beerId" element={<Detail />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
