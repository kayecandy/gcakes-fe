import { SxProps } from "@mui/material";

export type SxMaskPositions = "top" | "bottom";

export const SX_MASKS: Array<(pos: SxMaskPositions) => SxProps> = [
  (position) => ({
    ...(position === "top"
      ? {
          pt: "4rem",
          mt: "-4rem",
        }
      : {
          pb: "4rem",
          mb: "-4rem",
        }),
    WebkitMaskImage: "url(/mask1.svg)",
    WebkitMaskPosition: position,
    WebkitMaskSize: "cover",
    WebkitMaskRepeat: "no-repeat",
  }),
  (position) => ({
    ...(position === "top"
      ? {
          pt: "3rem",
          mt: "-3rem",
        }
      : {
          pb: "3rem",
          mb: "-3rem",
        }),
    WebkitMaskImage: "url(/mask2.svg)",
    WebkitMaskPosition: position,
    WebkitMaskSize: "cover",
    WebkitMaskRepeat: "no-repeat",
  }),
];
