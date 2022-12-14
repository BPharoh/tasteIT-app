import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navBar'>
        <h1>tasteIT</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/recipesplus">Add new recipe</Link>
      </nav>
    </div>
    );
};

export default Navbar;