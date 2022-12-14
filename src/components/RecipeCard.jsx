import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = () => {
    return (
        <div className='recipe-card'>
            <img src="https://plus.unsplash.com/premium_photo-1663127648893-390677703b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hc2hlZCUyMHBvdGF0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="mashed-potatoes"/>
            <h3>Mashed Potatoes</h3>
            <p><Link to="singlerecipe">See More</Link></p>  
        </div>
    );
};

export default RecipeCard;