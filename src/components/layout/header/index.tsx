"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const StyledTypography = styled(Typography)`
  margin-right: 20px;
  cursor: pointer;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: auto;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #333;
    color: #fff;
    width: 200px;
  }
`;

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Link href="/">
            <StyledTypography variant="h6">Home</StyledTypography>
          </Link>
          <Link href="/about">
            <StyledTypography variant="h6">About</StyledTypography>
          </Link>
          <Link href="/list">
            <StyledTypography variant="h6">List</StyledTypography>
          </Link>
          <StyledIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </StyledIconButton>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        variant="temporary"
      >
        <List>
          <Link href="/">
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/about">
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href="/list">
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="List" />
            </ListItem>
          </Link>
        </List>
      </StyledDrawer>
    </>
  );
};

export default Header;
