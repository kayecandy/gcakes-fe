import { Product } from "@/types/product";
import { Typography, Stack, Chip } from "@mui/material";
import { FC } from "react";


type TagsProps = {
  product: Product;
}

export const Tags: FC<TagsProps> = ({product}) => {

    // When user clicks a tag
    const handleTagClick = () => {
        console.info('Tag clicked.');
    }

  return (
    <>
      <Typography variant="h6" sx={{ mr: "15px" }}>
        Tags:
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label={String(product.productType).toUpperCase()}
          onClick={handleTagClick}
          color="primary"
        />
        <Chip label="Birthday" onClick={handleTagClick} />
        <Chip label="Wedding" onClick={handleTagClick} />
        <Chip label="Anniversary" onClick={handleTagClick} />
      </Stack>
    </>
  );
};
