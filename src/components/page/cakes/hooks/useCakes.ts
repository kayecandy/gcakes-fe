import { useState } from 'react';

import { ApiResponse } from '@/types/api-response';
import { Product } from '@/types/product';

/**
 * Use useFeaturedProducts as sample
 *
 *
 */
export const useCakes = () => {
  const [cakes, setCakes] = useState<ApiResponse<Product>>({
    loading: true,
  });

  return cakes;
};
