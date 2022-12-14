import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navBar'>
        <h1><Link to="/">TasteIt</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="recipes">Recipes</Link></li>
            <li><Link to="recipesplus">Add new recipe</Link></li>
          </ul>
      </nav>
    </div>
    );
};

export default Navbar;