import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "../styles.css";
import Mag from "../assets/Rectangle-59.png";
import Mag2 from "../assets/1.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Magazine() {
  return (
    <section className="Magazine mx-auto mt-20">
      <div className="row mb-3">
      <p className="col-5">
      ACCESSORIZE WITH OUR FEATURED COLLECTION !
      </p>
       </div>
      <div className="row my-3">
      <div className="col-5 mag-text">
      More is always more and extra is everything
      </div>
      <div className="col-7 mag-text">
      The future of eyewear has arrived. Are you ready to take a look?
      </div>
       </div>
       <div className="row">
       <img 
                className="magazine-img img-fluid col-5"
                src={Mag}
              />

              <img className="magazine-img img-fluid col-7" src={Mag2} />
          
       </div>
  
    </section>
  );
}
