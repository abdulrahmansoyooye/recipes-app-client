import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
const SavedRecipe = ({ recipe }) => {
  const mobilescreens = useMediaQuery("(max-width:800px)");
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      sx={{
        width: mobilescreens ? "50%" : "30%",
        padding: "1rem",
        borderRadius: "1rem",
        background: theme.palette.background.alt,
        margin: "1rem auto",
        color: "#FFFFF",
      }}
      theme={theme}
      mobilescreens={mobilescreens}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Box>
          <Typography variant="h3" sx={{ textAlign: "center", mb: "1rem" }}>
            {recipe.name}
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            position: "relative",
            mt: "1rem",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              style={{
                zIndex: "20",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "1rem",
                  overflow: "scroll",
                }}
              >
                <Box
                  className="instructions"
                  sx={{
                    textAlign: "left",
                    border: "1px solid #fca311",
                    m: "1rem 0",
                    p: "1rem",
                    borderRadius: "1rem",
                  }}
                >
                  <Typography>{recipe.instructions}</Typography>
                </Box>
              </Box>
            </motion.div>
          )}
          <Box>
            <motion.img
              src={`https://nice-lime-pea-coat.cyclic.cloud/assets/${recipe.imageUrl}`}
              alt={recipe.name}
              width="100%"
              height={"300px"}
              style={{
                borderRadius: "1rem",
                backgroundColor: "#00000080",
                objectFit: "cover",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
            {!hovered && (
              <Typography
                sx={{
                  position: "absolute",
                  top: "10%",
                  margin: mobilescreens ? "1rem auto" : "1rem 5rem",
                  color: "#FFFF",
                  textAlign: "center",
                }}
              >
                {" "}
                Tap or hover to view instructions.
              </Typography>
            )}
          </Box>
        </Box>
        <Divider />
        <Typography
          sx={{
            textAlign: "center",
            mt: "1rem",
          }}
        >
          Cooking Time {recipe.cookingTime} (minutes)
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SavedRecipe;
