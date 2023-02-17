import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

import { fetchGQL } from "@/components/api/contentful";
import { Product } from "@/types/product";

/**
 * TASK: /api/products/[productType]
 *
 * Reference is pages/api/products/featured/[productType].ts
 * */
export default async function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Error>
) {
  try {
    const result = await (
      await fetchGQL(
        JSON.stringify({
          query: `
            query ($productType: String) {
              productCollection(where: { productType: $productType }) {
                items {
                  sys {
                    id
                  }
                  name
                  price
                  description
                  image {
                    url
                  }
                  productType
                }
              }
            }
          `,
          variables: {
            productType: req.query.productType,
          },
        })
      )
    ).json();

    return res.status(StatusCodes.OK).json(result.data.productCollection.items);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e as Error);
  }
}
