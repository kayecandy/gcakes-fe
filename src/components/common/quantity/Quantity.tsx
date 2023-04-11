import { Box, IconButton, TextField, TextFieldProps } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ChangeEvent, FC, useEffect, useState } from "react";

type QuantityProps = Omit<TextFieldProps, "onChange"> & {
  onChange?: (val: number) => void;
};

export const Quantity: FC<QuantityProps> = ({
  defaultValue = 1,
  value,
  onChange = () => {},
  ...props
}) => {
  const [quantity, setQuantity] = useState<number>(defaultValue as number);

  useEffect(() => {
    onChange(quantity);
  }, [quantity, onChange]);

  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => {
            if (quantity - 1 > 0) {
              setQuantity(quantity - 1);
            }
          }}
        >
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
            ...props.InputProps,
          }}
          defaultValue={defaultValue}
          value={quantity}
          onChange={(e) => {
            setQuantity(parseInt(e.target.value));
          }}
          variant="filled"
        ></TextField>

        <IconButton onClick={() => setQuantity(quantity + 1)}>
          <Add></Add>
        </IconButton>
      </Box>
    </>
  );
};
