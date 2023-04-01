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
  productType: ProductTypes;
  tags: Tag[]
};

export type ProductTypes = "cakes" | "cupcakes" | "decorated_cookies";
export type Tag = {
  id: string;
  name: string;
}