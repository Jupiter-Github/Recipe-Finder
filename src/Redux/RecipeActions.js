import {
  SEND_API_REQUEST,
  SET_RECIPE_DATA,
  SET_RECIPE_ITEM,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SEARCH_ITEM,
} from "./RecipeTypes";

const setRecipeData = (data) => {
  return {
    type: SET_RECIPE_DATA,
    payload: data.data.recipes,
  };
};

const sendApiRequest = () => {
  return {
    type: SEND_API_REQUEST,
  };
};

const setRecipeItem = (data) => {
  return {
    type: SET_RECIPE_ITEM,
    payload: data.data.recipe,
  };
};

const addToFavourite = (recipe) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: recipe,
  };
};

const removeFromFavourite = (id) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: id,
  };
};

const setSearchItem = (searchItem) => {
  return {
    type: SET_SEARCH_ITEM,
    payload: searchItem,
  };
};

const fetchRecipe = (item) => {
  return (dispatch) => {
    dispatch(sendApiRequest());
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${item}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => dispatch(setRecipeData(data)));
  };
};

const fetchRecipeItem = (id) => {
  return (dispatch) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => dispatch(setRecipeItem(data)));
  };
};

export {
  setRecipeData,
  fetchRecipe,
  fetchRecipeItem,
  addToFavourite,
  removeFromFavourite,
  sendApiRequest,
  setSearchItem,
};
