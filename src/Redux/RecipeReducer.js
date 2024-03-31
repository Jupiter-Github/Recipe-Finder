import {
  ADD_TO_FAVOURITE,
  SEND_API_REQUEST,
  REMOVE_FROM_FAVOURITE,
  SET_RECIPE_DATA,
  SET_RECIPE_ITEM,
  SET_SEARCH_ITEM,
} from "./RecipeTypes";

const initialState = {
  allRecipeData: [],
  favouriteRecipe: JSON.parse(localStorage.getItem("favouriteRecipe")) || [],
  loading: false,
  recipeInstruction: [],
  searchItem: "",
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_RECIPE_DATA:
      return {
        ...state,
        loading: false,
        allRecipeData: action.payload,
      };
    case SET_RECIPE_ITEM:
      return {
        ...state,
        recipeInstruction: action.payload,
      };
    case REMOVE_FROM_FAVOURITE:
      const updatedFavouriteRemove = state.favouriteRecipe.filter(
        (value) => !(value.id === action.payload)
      );
      localStorage.setItem(
        "favouriteRecipe",
        JSON.stringify(updatedFavouriteRemove)
      );
      return {
        ...state,
        favouriteRecipe: updatedFavouriteRemove,
      };
    case ADD_TO_FAVOURITE:
      const updatedFavouriteAdd = [...state.favouriteRecipe, action.payload];
      localStorage.setItem(
        "favouriteRecipe",
        JSON.stringify(updatedFavouriteAdd)
      );
      return {
        ...state,
        favouriteRecipe: updatedFavouriteAdd,
      };
    case SET_SEARCH_ITEM:
      return {
        ...state,
        searchItem: action.payload,
      };

    default:
      return state;
  }
};

export { RecipeReducer };
