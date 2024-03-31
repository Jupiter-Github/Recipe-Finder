import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from "@mui/material";
import { Restaurant, Home, Favorite, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe } from "../Redux/RecipeActions";

const SearchDiv = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  let searchItem = useSelector((state) => state.searchItem);
  const [recipeName, setRecipe] = useState("");
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);
  const [badgeValue, setBadgeValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setRecipe(searchItem);
    
  }, [searchItem]);

  useEffect(() => {
    setBadgeValue(favouriteRecipe.length);
  }, [favouriteRecipe]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(recipeName));
    setRecipe("");
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, height: "64px" }}>
        <AppBar position="fixed">
          <Toolbar justifyContent=" space-evenly">
            <Restaurant sx={{ display: { md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Recipe Finder
            </Typography>
            <SearchDiv onSubmit={handleSubmit}>
              <SearchIconWrapper onClick={handleSubmit}>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={recipeName}
                onChange={(e) => {
                  setRecipe(e.target.value);
                }}
              />
            </SearchDiv>
            <Link to="/" style={{ color: "inherit" }}>
              <IconButton color="inherit">
                <Home />
              </IconButton>
            </Link>

            <Link to="Favourite" style={{ color: "inherit" }}>
              <IconButton color="inherit">
                <Badge badgeContent={badgeValue} color="error">
                  <Favorite />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
