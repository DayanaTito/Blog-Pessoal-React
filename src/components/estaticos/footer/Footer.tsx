import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";

function Footer() {
  
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "black", height: "80px" }}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Siga-me nas Redes Sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/dayana.tito/" target="_blank">
                <FacebookIcon style={{ fontSize: 30, color: "white" }} />
              </a>
              <a href="https://www.instagram.com/Dayana_tito/" target="_blank">
                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/in/dayanatito" target="_blank">
                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "black", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="site deploy">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  Dayana Tito
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return(
      <>
      {footerComponent}
      </>
  )
}

export default Footer;
