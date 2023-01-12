import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const SingleRecipe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [ data, setData ] = useState({});
    const [ isLoading, setIsloading ] = useState(false);

    useEffect(() => {
        setIsloading(true);
        axios.get(`http://localhost:3001/recipes/${params.singlerecipe}`).then(res => {
            setData(res.data);
            console.log('single', res.data);
            setIsloading(false);
        });
    }, [params]);

    if (isLoading) {
        return <p> Loading......</p>
    }

    // {data.ingredients?.map((ingredient) => {
    //     return (
    //       <tr key={ingredient.ingredient}>
    //         <td>
    //         {ingredient.quantity}  -  {ingredient.ingredient}
    //         </td>
    //       </tr> );
    // }
    //   )}

    // <h4 className={classes.heading}>Ingradients:</h4>
    // {recipeDetails.ingredients &&
    //   recipeDetails.ingredients.map((ingred, index) => {
    //     return (
    //       <div className={classes.ingredient} key={index}>
    //         {ingred.quantity} - {ingred.ingredient}
    //       </div>
    //     );
    //   })}

        return ( 
            <div>
            <h2>Title: {data.name}</h2>
             <h3>Author: {data.author}</h3>
             <h3>Source: {data.country}</h3>
             <img src={data.flag} alt={data.country}/>
             <p> Description: {data.description}</p>
            <img src={data.image} alt={data.name}/>
            <h4>Ingredients: </h4>
            {data.ingredients && data.ingredients.map((recipe, index) => {
              return (
                <div key={index}>
                {index + 1}:  {recipe.quantity} of {recipe.item}
                </div>
              );
            })}
            <h4>Intructions: </h4>
            {data.instructions && data.instructions.map((recipe, index) => {
              return (
                <div key={index}>
                 Step {index + 1}: {recipe}
                </div>
              );
            })}
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
        );       
    }  

export default SingleRecipe;



