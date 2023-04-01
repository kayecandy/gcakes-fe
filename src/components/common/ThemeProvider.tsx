import { FC, ReactNode } from "react";

import {
  Experimental_CssVarsProvider,
  experimental_extendTheme,
} from "@mui/material";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

export const COLOR_PALLETE = [
  "#FFECEE",
  "#ED6A5A",
  "#3D2212",
  "#F5C0A8",
  "#C0F8D1",
];

export const cursiveFont: TypographyStyleOptions = {
  fontFamily: "Dancing Script, cursive",
};

const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: COLOR_PALLETE[0],
        },
        primary: {
          main: COLOR_PALLETE[1],
        },
        secondary: {
          main: COLOR_PALLETE[2],
        },
      },
    },
  },
  typography: {
    h1: cursiveFont,
    h2: cursiveFont,
    h3: cursiveFont,
    h4: cursiveFont,
    h5: cursiveFont,
    h6: cursiveFont,
    button: {
      letterSpacing: "2px",
      fontSize: "smaller",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "2rem !important",
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
            borderColor: COLOR_PALLETE[3],
            borderWidth: "2px",
            
          },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: COLOR_PALLETE[3]
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_PALLETE[1]
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // fontWeight: 700,
          textTransform: "uppercase",
          color: COLOR_PALLETE[3],
          letterSpacing: "5px",
          background: "white"

        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          borderRadius: "10rem !important",
          fontWeight: "700 !important",
          letterSpacing: "5px !important"
        }
      }
    }
  }
});

const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
  return (
    <Experimental_CssVarsProvider
      {...props}
      theme={theme}
    ></Experimental_CssVarsProvider>
  );
};

export default ThemeProvider;
