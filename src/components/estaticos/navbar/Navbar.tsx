import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import {
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@material-ui/core";
import { ContentCut } from "@mui/icons-material";
import { addToken } from "../../../store/tokens/action";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken("")); //transforma o token em vazio quando deslogar
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <>
        <AppBar position="static" className="back">
          <Toolbar variant="dense">
            <Box className="Signin">
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1}>
                  <Typography variant="h6" color="inherit" className="Signin">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/posts" className="text-decorator-none">
                <Box mx={1} className="Signin">
                  <Typography variant="h6" color="inherit">
                    Postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className="Signin">
                  <Typography variant="h6" color="inherit">
                    Temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className="Signin">
                  <Typography variant="h6" color="inherit">
                    Cadastrar Tema
                  </Typography>
                </Box>
              </Link>
              <Box
                mx={1}
                className="cursor text-decorator-none"
                onClick={goLogout}
              >
                <Typography variant="h6" color="inherit" className="Signin">
                  Logout
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
