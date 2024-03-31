import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";
import {
  Typography,
  Toolbar,
  Button,
  Paper,
  Box,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";
import { Person, AccessTime } from "@mui/icons-material";
import { fetchRecipeItem, addToFavourite } from "../Redux/RecipeActions";

const RecipeInstruction = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeInstruction = useSelector((state) => state.recipeInstruction);
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);

  const {
    publisher,
    source_url,
    image_url,
    title,
    servings,
    cooking_time,
    ingredients,
  } = recipeInstruction;

  const [showalert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipeItem(id));
  }, [id, dispatch]);

  const handleAddClick = () => {
    const existingItem = favouriteRecipe.find((value) => value.id === id);
    if (existingItem) setShowAlert(true);
    else dispatch(addToFavourite({ image_url, publisher, title, id }));
  };

  return (
    <>
      {" "}
      <CssBaseline />
      <Container
        sx={{
          mt: { xs: 0, sm: 5, md: 5 },
          width: { sm: "100%" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: { xs: "100%", md: 550, lg: 450 },
              height: { xs: 300, sm: 410, md: 350, lg: 300 },
              mb: { xs: 2 },
              mr: { md: 3 },
              objectFit: "cover",
            }}
          >
            <img className="displayImage" src={image_url} alt="Recipe" />
          </Paper>
          <div className="displayCard">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5" color="textSecondary">
              {publisher}
            </Typography>
            <div className="displayCardMiddle">
              <Toolbar
                disableGutters
                sx={{
                  minHeight: { xs: 0, md: 56 },
                }}
              >
                <Person />
                <Typography noWrap variant="h6">
                  Serving size:{servings}
                </Typography>
              </Toolbar>
              <Toolbar
                disableGutters
                sx={{
                  minHeight: { xs: 0, md: 56 },
                }}
              >
                <AccessTime />
                <Typography noWrap variant="h6">
                  Cooking time:{cooking_time}mins
                </Typography>
              </Toolbar>
            </div>
            <div>
              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                spacing={2}
                alignItems={{ xs: "flex-start" }}
              >
                {" "}
                <Button variant="outlined" href={source_url} target="_blank">
                  Detail Recipe
                </Button>
                <Button variant="outlined" onClick={handleAddClick}>
                  Add to Favourite
                </Button>
                <Alert open={showalert} setOpen={setShowAlert} />
              </Stack>
            </div>
          </div>
        </Box>
        <Box
          component="div"
          sx={{
            my: 4,
          }}
        >
          <Typography variant="h3" align="center">
            Ingredients
          </Typography>
          <hr />
          <ul>
            {ingredients?.map((value, index) => (
              <li key={index}>
                <Typography variant="h6">
                  {value.quantity}
                  {value.unit} {""}
                  {value.description}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </>
  );
};

export default RecipeInstruction;
