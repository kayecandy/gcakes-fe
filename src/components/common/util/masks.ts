import { SxProps } from "@mui/material";

export type SxMaskPositions = "top" | "bottom";

export const SX_MASKS: Array<(pos: SxMaskPositions) => SxProps> = [
  (position) => ({
    ...(position === "top"
      ? {
          pt: "3vw",
          mt: "-3vw",
        }
      : {
          pb: "3vw",
          mb: "-3vw",
        }),
    WebkitMaskImage: "url(/mask1.svg)",
    WebkitMaskPosition: position,
    WebkitMaskSize: "cover",
    WebkitMaskRepeat: "no-repeat",
  }),
  (position) => ({
    ...(position === "top"
      ? {
          pt: "3vw",
          mt: "-3vw",
        }
      : {
          pb: "3vw",
          mb: "-3vw",
        }),
    WebkitMaskImage: "url(/mask2.svg)",
    WebkitMaskPosition: position,
    WebkitMaskSize: "cover",
    WebkitMaskRepeat: "no-repeat",
  }),
];
