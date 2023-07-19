import { fetchAllBeers } from "@/api/api";
import { ResultsList } from "@/components/ResultList";
import { Container } from "@mui/material";

export default async function Home() {
  const allBeers = await fetchAllBeers();
  return (
    <div>
      <Container maxWidth="sm">
        <ResultsList beers={allBeers} />
      </Container>
    </div>
  );
}
