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
  productType: string;
};

export type ProductTypes = "cakes" | "cupcakes" | "decorated_cookies";
