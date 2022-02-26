import * as React from "react";
import { useContext, useState } from "react";
//import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {filtersContext} from '../index'

import { Box, Drawer, List, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [categories, setCategories] = useState(['ropa', 'tecnología', 'muebles', 'electrodomésticos', 'otros']);
  const [materials, setMaterials] = useState(['madera', 'hierro', 'terciopelo']);
  const {filters, setFilters} = useContext(filtersContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const categoryFilter = (
    <>
      <div>categorías</div>
      {categories.map((category) => <label key={category}><input type="checkbox" id="cbox1" value={category} key={category} onChange={(e) => setFilters({ ...filters, categories: [...filters.categories, e.target.value] })} /> {category}</label>)}
      <div>materiales</div>
      {materials.map((material) => <label key={material}><input type="checkbox" id="cbox1" value={material} key={material} onChange={(e) => setFilters({ ...filters, materials: [...filters.materials, e.target.value] })} /> {material}</label>)}
      <button>apply filters</button>
    </>

  )

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categoryFilter}
      </List>

    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<MenuIcon />}
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div>Filters</div>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}