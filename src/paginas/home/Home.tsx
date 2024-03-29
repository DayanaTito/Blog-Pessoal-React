import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import { TokenState } from "../../store/tokens/tokenReducer";
import "./Home.css";
import { toast } from "react-toastify";

function Home() {
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);
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
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts">
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
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            className="Img"
            src="https://images.vexels.com/media/users/3/162490/isolated/preview/a58999f5352908abd4a838a76a9ed212-silhueta-de-digitacao-do-botao-de-papel-da-maquina-de-escrever.png"
            alt=""
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
