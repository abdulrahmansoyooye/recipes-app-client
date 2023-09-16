import { createTheme } from "@mui/material";
export const themeSettings = (mode) => {
  return {
    ...(mode === "light"
      ? {
          components: {
            MuiButton: {
              defaultProps: {
                disableFocusRipple: true,
                disableElevation: true,
                disableRipple: true,
              },
              styleOverrides: {
                root: {
                  color: "#ffffff",
                },
              },
            },
            MuiTypography: {
              styleOverrides: {
                root: {
                  cursor: "pointer",
                  color: "#14213d",
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: "#fca311",
                  fontSize: "30px",
                },
              },
            },
          },
          palette: {
            primary: {
              main: "#fca311",
              dark: "#14213d",
              light: "#14213d",
            },

            background: {
              default: "#F6F6F6",
              alt: "#ffffff",
            },
          },
          typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 13,
            h1: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 14,
            },
          },
        }
      : {
          components: {
            MuiButton: {
              defaultProps: {
                disableFocusRipple: true,
                disableElevation: true,
                disableRipple: true,
              },
              styleOverrides: {
                root: {
                  color: "#ffffff",
                },
              },
            },
            MuiTypography: {
              styleOverrides: {
                root: {
                  cursor: "pointer",
                  color: "#ffff",
                },
              },
            },

            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: "#fca311",
                  fontSize: "30px",
                },
              },
            },
            MuiTextField: {
              styleOverrides: {
                root: {
                  color: "#ffff",
                },
              },
            },
          },
          palette: {
            primary: {
              main: "#fca311",
              dark: "#0a1128",
              light: "#FFFF",
            },

            background: {
              default: "#0a1128",
              alt: "#001d3d",
            },
          },
          typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 13,
            h1: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Rubik", "sans-serif"].join(","),
              fontSize: 14,
            },
          },
        }),
  };
};
