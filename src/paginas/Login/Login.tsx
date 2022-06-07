import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";

import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/action";

function Login() {
  let Navigate = useNavigate();

  const dispacth = useDispatch();

  const [token, setToken] = useState(""); 

  dispacth(addToken(token));

  const [userLogin, serUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    serUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token !== "") {
      dispacth(addToken(token))
      Navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário Logado com sucesso");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar");
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20} paddingY={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Sign in to Blog Pessoal
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="usuario"
                label="Username"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="senha"
                label="Password"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
                <Button
                  className="Signin"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Entrar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Novo no Blog Pessoal?
                </Typography>
              </Box>
              <Link to="/cadastrar" className="text-decorator-none">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  Crie a sua conta!
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
