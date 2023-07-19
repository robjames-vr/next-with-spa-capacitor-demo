import { Beer, fetchAllBeers, searchBeers } from "@/api/api";
import { ResultsList } from "@/components/ResultList";
import { Card, Container, TextField } from "@mui/material";
import * as React from "react";

export const Home: React.FC = () => {
  const [data, setData] = React.useState<Beer[]>([]);
  const [searchString, setSearchString] = React.useState("");
  React.useEffect(() => {
    async function getData() {
      const result = searchString
        ? await searchBeers(searchString)
        : await fetchAllBeers();
      setData(result);
    }
    getData();
  }, [searchString]);
  return data.length > 0 ? (
    <Container>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          margin: "auto",
          marginBottom: "30px",
          marginTop: "30px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <TextField
          label="search"
          variant="outlined"
          onChange={(e) => setSearchString(e.target.value)}
        />
      </Card>

      <ResultsList beers={data} />
    </Container>
  ) : (
    <p>Loading...</p>
  );
};
