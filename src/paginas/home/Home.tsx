import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "withe" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" className="ver">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              style={{
                fontWeight: "bold",
                borderColor: "white",
                backgroundColor: "#18182e",
                color: "white",
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img className="Img"
            src="https://images.vexels.com/media/users/3/162490/isolated/preview/a58999f5352908abd4a838a76a9ed212-silhueta-de-digitacao-do-botao-de-papel-da-maquina-de-escrever.png"
            alt=""
      
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      </Grid>
    </>
  );
}

export default Home;
