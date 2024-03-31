import React from "react";
import { Box, Grid, Chip, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchRecipe, setSearchItem } from "../Redux/RecipeActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SearchList = () => {
  const searchList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  });

  const handleClick = (value) => {
    dispatch(setSearchItem(value));
    dispatch(fetchRecipe(value));
    navigate("/");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Typography align="center" color="textSecondary" variant="h3" mb={4}>
            Available search queries
          </Typography>
          <Grid container align="center" spacing={2}>
            {searchList.map((value) => (
              <Grid item xs={4} sm={3} md={2} lg={1.5} xl={1} key={value}>
                <Chip
                  label={value}
                  onClick={() => {
                    handleClick(value);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default SearchList;
