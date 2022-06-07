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

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado");
    navigate("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
     
          <AppBar position="static" className="back">
            <Toolbar>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography>

                  <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                        home
                      </Typography>
                    </Box>
                  </Link>
                </MenuItem>
              </MenuList>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blog Pessoal
              </Typography>
              <Link to="/login" className="Signin">
                <Box>
                  <Button className="Signin" color="inherit">
                    Login
                  </Button>
                </Box>
              </Link>

              <Box>
                <Button className="Signin" color="inherit" onClick={goLogout}>
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        
    );
  }

  return (
  <>
  {navbarComponent}
  </>);
}

export default Navbar;
