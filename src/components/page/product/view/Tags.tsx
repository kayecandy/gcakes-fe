import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { Product } from "@/types/product";
import { LocalOffer, Tag } from "@mui/icons-material";
import { Typography, Stack, Chip, lighten, darken } from "@mui/material";
import { FC } from "react";

type TagsProps = {
  product: Product;
};

export const Tags: FC<TagsProps> = ({ product }) => {
  // When user clicks a tag
  const handleTagClick = () => {
    console.info("Tag clicked.");
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        {/* <Chip
          label={String(product.productType).toUpperCase()}
          onClick={handleTagClick}
          color="primary"
        /> */}
        {product.tags &&
          product.tags.map((tag) => (
            <Chip
              sx={{
                px: 1,
                py: 2,
                backgroundColor: lighten(COLOR_PALLETE[3], 0.4),
                color: darken(COLOR_PALLETE[3], 0.4)
              }}
              key={tag.id}
              className="tag"
              id={`tag-${tag.id}`}
              label={String(tag.name).toUpperCase()}
              onClick={handleTagClick}
              icon={<LocalOffer color="inherit"></LocalOffer>}
              size="small"
            />
          ))}
      </Stack>
    </>
  );
};
