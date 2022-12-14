import React from 'react';

const RecipesPlus = () => {
    return (
        <div>
            <h1>Add new recipe</h1>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="recipe-name">Name</label>
                    <input type="text" name="recipe-name" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipe-source">Recipe is from:</label>
                    <input type="text" name="recipe-source" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="recipe-url">Image</label>
                    <input type="text" name="recipe-url" />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <div className="add-more">
                    <label htmlFor="ingredients">Quantity</label>
                    <input type="text" name="ingredients" />
                    <label htmlFor="ingredients">Ingredient</label>
                    <input type="text" name="ingredients" />
                    </div>
                    <button type='button'>add more</button>
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instructions" id="instructions" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Post recipe</button>
            </form>
        </div>
    );
};

export default RecipesPlus;