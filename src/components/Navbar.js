import * as React from "react";
//import { Link } from "react-router-dom";

import NavbarDrawer from "./NavbarDrawer";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";

export default function ButtonAppBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }} className="Navbar">
            <AppBar position="static">
                <Toolbar>
                    {(props.home) ? <></> : < NavbarDrawer />}
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, color: "white", fontFamily: 'Raleway, Arial', textDecoration: 'none' }}
                    >
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}