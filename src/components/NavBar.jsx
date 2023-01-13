import React from 'react';
import { Link } from "react-router-dom";
import classes from './NavBar.module.css';

const Navbar = () => {
    return (
        <> 
        <h1><Link to="/">TasteIt</Link></h1>
        <div className={classes.nav}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="recipes">Recipes</Link></li>
            <li><Link to="recipesplus">Add new recipe</Link></li>
          </ul>
      </nav>
    </div>
    </>
    );
};

export default Navbar;