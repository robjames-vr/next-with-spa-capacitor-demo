import { Beer, getBeerById } from "@/api/api";
import { BeerCard } from "@/components/BeerCard";
import * as React from "react";
import { useParams } from "react-router-dom";

export const Detail: React.FC = (params: any) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Beer>();
  const beerId = useParams().beerId;
  React.useEffect(() => {
    async function getData() {
      if (!beerId) return;
      const result = await getBeerById(beerId);
      setData(result);
      setLoading(false);
    }
    getData();
  }, [beerId]);
  console.log(beerId);
  return data ? (
    <BeerCard beer={data} showDetail={false} />
  ) : (
    <p>{loading ? "Loading..." : "Not found"}</p>
  );
};
