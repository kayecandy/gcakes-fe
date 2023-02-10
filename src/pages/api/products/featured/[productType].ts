import { StatusCodes } from 'http-status-codes';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { fetchGQL } from '@/components/api/contentful';
import { Product } from '@/types/product';

export default async function featuredProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Error>
) {
  try {
    const result = await (
      await fetchGQL(
        JSON.stringify({
          query: `query ($productType: String) {
  productCollection(where: { featured: true, productType: $productType }) {
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
      featured
      productType
    }
  }
}
`,
          variables: {
            productType: "cakes",
          },
        })
      )
    ).json();

    console.log("I am server side!");

    return res.status(StatusCodes.OK).json(result.data.productCollection.items);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e as Error);
  }
}
