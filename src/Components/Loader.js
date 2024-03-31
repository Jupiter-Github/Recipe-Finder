import React from "react";
import { Box, LinearProgress } from "@mui/material";
const Loader = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </>
  );
};

export default Loader;
