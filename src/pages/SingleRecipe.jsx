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

        return ( 
            <div>
            <h2>{data.name}</h2>
             <h3>{data.author}</h3>
             <h3>{data.country}</h3>
             <img src={data.flag} alt={data.name}/>
             <p>{data.description}</p>
            <img src={data.image} alt={data.name}/>
            <p>{data.ingredients}</p>
            <p>{data.instructions}</p>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
        );       
    }  

export default SingleRecipe;



