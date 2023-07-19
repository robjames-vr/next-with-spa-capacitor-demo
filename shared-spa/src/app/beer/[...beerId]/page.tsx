import { getBeerById } from "@/api/api";
import { BeerCard } from "@/components/BeerCard";
import * as React from "react";

const BeerPage: React.FC = async (params: any) => {
  const data = await getBeerById(params.params.beerId);
  return data ? <BeerCard beer={data} showDetail={false} /> : <p>Not found</p>;
};

export default BeerPage;
