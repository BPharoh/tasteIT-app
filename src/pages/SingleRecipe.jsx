import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import classes from './SingleRecipe.module.css';


const SingleRecipe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [ data, setData ] = useState({});
    const [ isLoading, setIsloading ] = useState(false);

    useEffect(() => {
        setIsloading(true);
        axios.get(`http://localhost:3001/recipes/${params.singlerecipe}`).then(res => {
            setData(res.data);
            setIsloading(false);
        });
    }, [params]);

    if (isLoading) {
        return <p> Loading......</p>
    }

        return ( 
          <>
            <div className={classes.singleViewContainer }>
              <div className={classes.topSection }>
              <div className={classes.recipeInfo}>
                <h2>{data.name}</h2>
                 <h3 >{data.author}</h3>
                 <h3 >{data.country}</h3>
                 <img src={data.flagurl} alt={data.country}/>
                 <h2>Description: </h2>
                <p > {data.description}</p>
              </div>
              <div className={classes.recipeIngredients }>
                <h3>Ingredients: </h3>
                 {data.ingredients && data.ingredients.map((recipe, index) => {
                  return (
                    <p key={index}>
                      {recipe.quantity} - {recipe.unit} of  {recipe.item}
                    </p>
                  );
                })} 
                </div>
              <div className={classes.recipeInstructions }>
                <h3>Intructions: </h3>
               <ol className={classes.directions}>
               {data.instructions && data.instructions.map((recipe, index) => { return <p key={index}>{recipe}</p> })}
                </ol>
              </div>
              </div>
            <div className={ classes.bottomSection } >
            <div className= {classes.recipeImage}><img src={data.image} alt={data.name}/></div>
            </div>
            <button onClick={()=> navigate(-1)} className={classes.recipeNavigation}>Go back</button>
        </div>
       
        </>
        );       
    }  

export default SingleRecipe;



