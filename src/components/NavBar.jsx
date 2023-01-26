import React from 'react';
import { Link } from "react-router-dom";
import classes from './NavBar.module.css';

const Navbar = () => {
    return (
        <> 
        
        <div className={classes.navBar}>
          <div> 
            <h1><Link to="/">TasteIt</Link></h1>
          </div>
          <div>
           <nav>
             <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="recipes">Recipes</Link></li>
             <li><Link to="recipesplus">Add new recipe</Link></li>
           </ul>
          </nav>
        </div>
       </div>
    </>
    );
};

export default Navbar;