export interface Beer {
  id: number;
  description: string;
  name: string;
  image_url: string;
  abv: number;
}

const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchAllBeers = async (): Promise<Beer[]> => {
  const response = await fetch(`${API_URL}?per_page=5`);
  const beers = await response.json();
  return beers as Beer[];
};

export const getBeerById = async (id: string | number): Promise<Beer> => {
  const response = await fetch(`${API_URL}?ids=${id}`);
  const beers = await response.json();
  return (beers as Beer[]).length > 0 ? beers[0] : null;
};

export const searchBeers = async (id: string): Promise<Beer[]> => {
  const response = await fetch(`${API_URL}?beer_name=${id}`);
  const beers = await response.json();
  return beers as Beer[];
};
