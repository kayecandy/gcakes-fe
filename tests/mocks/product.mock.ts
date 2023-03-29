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
      name: "BIRTHDAY",
    },
    {
      id: "02",
      name: "WEDDING",
    },
    {
      id: "03",
      name: "ANNIVERSARY",
    },
  ],
};