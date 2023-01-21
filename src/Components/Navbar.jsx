import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function VariantButtonGroup() {
  const handleOnClick = () => {
    const ele = document.querySelector(".nav-btn label");
    if (ele) {
      ele.click();
    }
  };
  return (
    <div className="nav w-screen flex flex-row shadow-lg items-center fixed z-50 bg-white bg-opacity-60 backdrop-blur-md">
      <img
        className="logo md:h-16 h-14 md:ml-10 ml-4"
        src={require("../assets/logo.png").default}
        alt="logo"
      />
      <div className="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1
            }
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button> Three</Button>
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}
