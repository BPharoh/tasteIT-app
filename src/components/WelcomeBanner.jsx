import React from 'react';
import { Link } from "react-router-dom";

const WelcomeBanner = () => {
    return (
        <div className='welcomeBanner'>
            <h1>TasteIt</h1>
            <p>TasteIt is recipe app which is made in REACT22S group React lessons.</p>
            <p><Link to="/recipes">Broswse Recipes</Link></p>
        </div>
    );
};

export default WelcomeBanner;