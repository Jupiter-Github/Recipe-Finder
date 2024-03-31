import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Container,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../Redux/RecipeActions";
import { Link } from "react-router-dom";

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteRecipe = useSelector((state) => state.favouriteRecipe);

  const handleClick = (id) => {
    dispatch(removeFromFavourite(id));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 3 }}>
        {favouriteRecipe.length > 0 ? (
          <Grid container spacing={4}>
            {favouriteRecipe.map((value) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <Link
                    to={{ pathname: `/RecipeInstruction/${value.id}` }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardActionArea>
                      <CardMedia sx={{ height: 140 }} image={value.image_url} />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {value.publisher}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        handleClick(value.id);
                      }}
                    >
                      Remove From Favourite
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" color="textSecondary">
              Your favourite list is empty!
            </Typography>
          </Container>
        )}
      </Box>
    </>
  );
};

export default Favourite;
