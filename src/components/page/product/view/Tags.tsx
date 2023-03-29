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
        <div data-testid="tags-section">
          <Chip className="tag" label={"Birthday".toUpperCase()} onClick={handleTagClick} />
          <Chip className="tag" label={"Wedding".toUpperCase()} onClick={handleTagClick} />
          <Chip className="tag" label={"Anniversary".toUpperCase()} onClick={handleTagClick} />
        </div>
      </Stack>
    </>
  );
};
