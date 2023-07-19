import { Beer } from "@/api/api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { AppLink } from "./AppLink";

interface BeerCardProps {
  beer: Beer;
  showDetail?: boolean;
}

export const BeerCard: React.FC<BeerCardProps> = ({
  beer,
  showDetail = true,
}) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: "auto", marginBottom: "30px", marginTop: "30px" }}
    >
      <CardMedia
        sx={{ height: 350, objectFit: "contain" }}
        image={beer.image_url}
        title="beer card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {beer.name} <strong>{beer.abv}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {beer.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <AppLink path={showDetail ? `beer/${beer.id}` : "/"}>
          <Button size="small">{showDetail ? "Learn More" : "Back"}</Button>
        </AppLink>
      </CardActions>
    </Card>
  );
};
