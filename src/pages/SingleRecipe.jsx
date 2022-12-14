import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleRecipe = () => {
    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className="see-more">
                <h1>name</h1>
                <div className="top-section">
                <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="name" />
                <h2>name</h2>
                <h2>author</h2>
                </div>
                <div className="middle-section">
                    <table className="ingredients">
                        <th>Ingredients</th>
                        <tr><td>1l water</td></tr>
                    </table>
                    <table className="preparation">
                        <th>Preparation</th>
                        <tr><td>Soup good! Me like it!</td></tr>
                    </table>
                </div>  
                <button type='button' onClick={handleNavigate}>Go Back</button>    
            </div>
    );
};

export default SingleRecipe;