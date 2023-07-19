import { Beer } from "@/api/api";
import * as React from "react";
import { BeerCard } from "./BeerCard";

interface ResultsListProps {
  beers: Beer[];
}

export const ResultsList: React.FC<ResultsListProps> = ({ beers }) => (
  <>
    {beers.map((b) => (
      <BeerCard beer={b} key={b.id} showDetail />
    ))}
  </>
);
