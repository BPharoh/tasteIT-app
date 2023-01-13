import { Link } from "react-router-dom";
import React from 'react';
import classes from './RecipeCard.module.css';


const RecipeCard = ({id, name, country, image, flagurl}) => {


    return (
        <div className={classes.RecipeCard}>
            <div><img src={image} alt={name}/></div>
             <div>
                 <h2>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h2>
             </div>
             <div className={classes.flag}><img src={flagurl} alt={country}/></div>
            <button className={classes.button}><Link to={`${id}`}>See more</Link></button>
        </div>
    );
};

export default RecipeCard;