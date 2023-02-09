export type Product = {
  sys: {
    id: string;
  };
  name: string;
  price: number;
  description: string;
  image: {
    url: string;
  } | null;
};
