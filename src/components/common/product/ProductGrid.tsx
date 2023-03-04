import { ProductTypes } from "@/types/product";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductCard, ProductCardSkeleton } from "./ProductCard";


export type ProductGridProps = {
  productType: ProductTypes;
  limit?: number;
}

export const ProductGrid: FC<ProductGridProps> = ({
  productType,
  limit
}) => {
  const products = useProduct(productType);


  console.log(products);

  if (products.loading) {
    return <Grid container>
      <Grid item xs={4}>
        <ProductCardSkeleton></ProductCardSkeleton>
      </Grid>
      <Grid item xs={4}>
        <ProductCardSkeleton></ProductCardSkeleton>
      </Grid>
      <Grid item xs={4}>
        <ProductCardSkeleton></ProductCardSkeleton>
      </Grid>
    </Grid>
  }

  if (products.value) {
    return (
      <Grid container>
        {products.value.map(product => (
        <Grid key={product.sys.id} item xs={4}>
          <ProductCard product={product}></ProductCard>
        </Grid>
        ))}
      </Grid>
    )
  }

  return <></>

}