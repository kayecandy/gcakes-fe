import { Box, IconButton, TextField, TextFieldProps } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { FC, useState } from "react";

export const Quantity: FC<TextFieldProps> = ({
  defaultValue = 1,
  value,
  ...props
}) => {
  const [quantity, setQuantity] = useState<number>(defaultValue as number);

  return (
    <>
      <Box sx={{
        display: "inline-flex",
        alignItems: "center"
      }}>

      <IconButton onClick={() => {
        if (quantity - 1 > 0) {
          setQuantity(quantity - 1)
        }
      }}>
        <Remove></Remove>
      </IconButton>

      <TextField
        {...props}
        sx={{
          width: "4rem",
          input: {
            textAlign: "center",
          py: 2,

          },
          "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
          "input[type=number]": {
            MozAppearance: "textfield",
          },

          ...props.sx,
        }}
        type="number"
        inputProps={{
          min: 1,
          ...props.inputProps,
        }}
        InputProps={{
          disableUnderline: true,
          ...props.InputProps
        }}
        defaultValue={defaultValue}
        value={quantity}
        variant="filled"
      ></TextField>

      <IconButton onClick={()=>setQuantity(quantity + 1)}>
        <Add></Add>
      </IconButton>
      </Box>
    </>
  );
};
