import { Link } from "react-router-dom";
import React from 'react';


const RecipeCard = ({id, name, country, image}) => {


    return (
        <div className='recipe-card'>
             <h2>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h2>
             <p>{country}</p>
            <img src={image} alt={name}/>
            <button><Link to={`${id}`}>See more</Link></button>
        </div>
    );
};

export default RecipeCard;