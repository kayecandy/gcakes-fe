import { Product } from "@/types/product";

export const productMock: Product = {
  sys: {
    id: "idMock",
  },
  name: "nameMock",
  price: 1,
  description: "descriptionMock",
  image: {
    url: "urlMock",
  },
  productType: "cakes",
  tags: [
    {
      id: "01",
      name: "birthday",
    },
    {
      id: "02",
      name: "wedding",
    },
    {
      id: "03",
      name: "anniversary",
    },
  ],
};