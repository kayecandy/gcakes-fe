import { StatusCodes } from 'http-status-codes';
import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

/**
 * TASK: /api/products/[productType]
 *
 * Reference is pages/api/products/featured/[productType].ts
 * */
export default async function featuredProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return res.status(StatusCodes.OK).json({
      message: "Hello world!",
      productType: req.query.productType ?? "",
    });
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e as Error);
  }
}
