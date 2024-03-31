import React from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
const Alert = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      <div>
        <Snackbar
          open={open}
          TransitionComponent={SlideTransition}
          autoHideDuration={1500}
          onClose={handleClose}
          message="Recipe is already in favorite list"
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        />
      </div>
    </>
  );
};

export default Alert;
