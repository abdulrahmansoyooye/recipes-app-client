import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useTheme } from "@emotion/react";
import {
  CloseRounded,
  CreateOutlined,
  DarkMode,
  LightMode,
  Person2Outlined,
  Person2Rounded,
  PersonRemoveOutlined,
  StarOutlineRounded,
} from "@mui/icons-material";

const Navbar = ({ setMode, mode }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const mobileScreens = useMediaQuery("(max-width:1000px)");
  const [mobileNav, setMobileNav] = useState(false);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: "0.75rem 4rem",
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <Typography
        onClick={() => navigate("/")}
        fontSize="30px"
        fontWeight="500"
        className="bg-black"
      >
        Rec<span color={theme.palette.primary.alt}>ii</span>pees
      </Typography>
      {!mobileScreens ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <Button variant="outlined" startIcon={<CreateOutlined />}>
            <Typography
              onClick={() => navigate("/create-recipe")}
              style={{
                textDecoration: "none",
              }}
              color={theme.palette.primary.light}
            >
              Create
            </Typography>
          </Button>

          {!cookies.access_token ? (
            <>
              <Button variant="outlined" startIcon={<Person2Rounded />}>
                <Typography
                  onClick={() => navigate("/auth")}
                  color={theme.palette.primary.light}
                >
                  Sign Up
                </Typography>
              </Button>
              {/* <IconButton
                variant="outlined"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton> */}
            </>
          ) : (
            <>
              <Button variant="outlined" startIcon={<StarOutlineRounded />}>
                <Typography
                  onClick={() => navigate("/saved-recipes")}
                  // color="#011627"
                >
                  Saved
                </Typography>
              </Button>
              <Button
                onClick={logout}
                variant="outlined"
                startIcon={<PersonRemoveOutlined />}
              >
                <Typography>Sign Out</Typography>
              </Button>
              {/* <IconButton
                variant="outlined"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton> */}
            </>
          )}
        </Box>
      ) : (
        !mobileNav && (
          <IconButton onClick={() => setMobileNav(!mobileNav)}>
            <MenuRoundedIcon />
          </IconButton>
        )
      )}

      {mobileScreens && mobileNav && (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          style={{
            zIndex: "20",
          }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Box
            sx={{
              position: "fixed",
              right: "0",
              top: "0",
              zIndex: "20",
              width: "80%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              p: "0.75rem 4rem",
              backgroundColor: theme.palette.primary.dark,
            }}
            onClick={() => setMobileNav(!mobileNav)}
          >
            <IconButton onClick={() => setMobileNav(!mobileNav)}>
              <CloseRounded />
            </IconButton>

            <Button
              variant="outlined"
              onClick={() => setMobileNav(!mobileNav)}
              startIcon={<CreateOutlined />}
            >
              <Typography
                onClick={() => navigate("/create-recipe")}
                style={{
                  textDecoration: "none",
                }}
                color="#FFFF"
              >
                Create
              </Typography>
            </Button>

            {!cookies.access_token ? (
              <Button
                variant="outlined"
                onClick={() => setMobileNav(!mobileNav)}
                startIcon={<Person2Outlined />}
              >
                <Typography onClick={() => navigate("/auth")} color="#FFFF">
                  Sign Up
                </Typography>
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  maxWidth="200px"
                  onClick={() => setMobileNav(!mobileNav)}
                  startIcon={<StarOutlineRounded />}
                >
                  <Typography
                    onClick={() => navigate("/saved-recipes")}
                    color="#FFFF"
                  >
                    Saved
                  </Typography>
                </Button>
                <Button
                  onClick={logout}
                  variant="outlined"
                  startIcon={<PersonRemoveOutlined />}
                >
                  <Typography color="#FFFF">Sign Out</Typography>
                </Button>
                {/* <IconButton
                  variant="outlined"
                  onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                ></IconButton> */}
              </>
            )}
            {/* <IconButton
              variant="outlined"
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton> */}
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Navbar;
