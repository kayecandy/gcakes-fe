/**
 * Add unit test code here
 */
import { Tags } from "@/components/page/product/view/Tags";
import { Product } from "@/types/product";
import { render } from "@testing-library/react";

describe("Tags Page", () => {
  beforeEach(() => {
    const productMock: Product = {
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
    render(<Tags product={productMock} />);
  });

  test("Tags", () => {
    console.log("Tags");
  });
  
});
