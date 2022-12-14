import React from 'react';

const SingleRecipe = () => {
    return (
        <div className="see-more">
                <h1>name</h1>
                <div className="top-section">
                <img src="" alt="name" />
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
                <button type='button'>Go back</button>    
            </div>
    );
};

export default SingleRecipe;