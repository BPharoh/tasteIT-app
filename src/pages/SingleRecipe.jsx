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
            setIsloading(false);
        });
    }, [params]);

    if (isLoading) {
        return <p> Loading......</p>
    }

        return ( 
            <div>
            <h2>Title: {data.name}</h2>
             <h3>Author: {data.author}</h3>
             <h3>Source: {data.country}</h3>
             <img src={data.flagurl} alt={data.country}/>
             <p> Description: {data.description}</p>
            <img src={data.image} alt={data.name}/>
            <h4>Ingredients: </h4>
            {data.ingredients && data.ingredients.map((recipe, index) => {
              return (
                <div key={index}>
                 *   {recipe.item} - {recipe.quantity} -  {recipe.unit}
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



