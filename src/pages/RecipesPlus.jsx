import axios from 'axios';
import React, {useState, useEffect} from 'react';

const RecipesPlus = () => {

const [ countryList, setCountryList ] = useState([]);
const [ instruction, setInstruction ] = useState(['']);
const [ingredient, setIngredient] = useState([{item:'', quantity:''}]);
const [ uploadRecipe, setUploadRecipe ] = useState({
        id: '',
        name: '',
        author: '',
        country: '',
        description: '',
        flagurl: '',
        image: '',
        instructions: [],
        ingredients: []
        });

useEffect(() => {
    // setIsLoading(true)
    axios.get('https://restcountries.com/v3.1/all/')
    .then((res) => {
    let countries = [];
    res.data.map((item) => { 
    countries.push(item.name.common);
    countries.sort();
    return(countries)
    })
    setCountryList(countries);
    console.log('RestAPI:', res.data);
    });
    }, []);
      
      
const inputHandler = (e) => {
      setUploadRecipe({...uploadRecipe,  [e.target.name]:e.target.value})
    };

    //Ingredient //
const ingredientsHandler = (e, index) => {
    const {name, value} = e.target;
    const ingredientList = [...ingredient]
    ingredientList[index][name] = value;
    setIngredient(ingredientList);
    setUploadRecipe({ ...uploadRecipe, ingredients: ingredient });
    };

const instructionsHandler =(e, index)=>{
    const {value} = e.target;
    const instructionList = [...instruction]
    instructionList[index] = value;
    setInstruction(instructionList);
    setUploadRecipe({ ...uploadRecipe, instructions: instruction });
        }

const addMoreInputsHandler = () => {
    let addMore = {item: '', quantity: '' };
        setIngredient([...ingredient, addMore]);
    };

const removeMoreInputsHandler = (index) => {
    const ingredientList = [...ingredient]
    ingredientList.splice(index, 1)
        setIngredient(ingredientList);
    };

const addMoreInstructionsHandler = () => {
    let allInstructions = '';
        setInstruction([...instruction, allInstructions]);
    };

const removeMoreInstructionsHandler = (index) => {
    const instructionList = [...instruction]
    instructionList.splice(index, 1)
    setInstruction(instructionList);
    };

const postHandler = (e) => {
    axios.post("http://localhost:3001/recipes", uploadRecipe)
    }
    
const submitHandler = (e) => {
      e.preventDefault();
      postHandler(uploadRecipe)
      window.location.reload()
    };

    return (
        <div>
            <h1>Add new recipe</h1>
            <form action="" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:
                    <input 
                    type="text" 
                    name="name" 
                    onChange={inputHandler}
                    /></label>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                    type="text" 
                    name="author"
                    onChange={inputHandler}
                     />
                </div>
                <div className="form-group">
                <label htmlFor="countries">Recipe Source</label>
                <select name="country" onChange={inputHandler}>
                <option value="selected">Select a country</option>
                {countryList.map((index) => {
            return ( <option value={index} key={index}>{index}</option>);
            })}</select>
            </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                    name="description" 
                    onChange={inputHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Image</label>
                    <input 
                    type="text" 
                    name="image" 
                    onChange={inputHandler}
                    />
                </div>
                <p>Ingredients</p>
                <div className="ingredientHeader">
                <span htmlFor="item">Item</span>
                <span htmlFor="quantity">Quantity</span>
                </div>
                {ingredient.map((singleIngredient, index) => {
                    return ( 
                    <div key={index}>
                    <div className="add-ingredients" >
                    <div className="add-more">
                    <input type="text" name="item" id="item" value={singleIngredient.item} onChange={(e) => ingredientsHandler(e, index)}/>
                    <input type="text" name="quantity" id="quantity" value={singleIngredient.quantity} onChange={(e) => ingredientsHandler(e, index)}/>
                    </div>
                    <div className="remove more">
                        {ingredient.length > 1 && ( <button type='button' onClick={() => {removeMoreInputsHandler(index)}}>remove more</button>)}
                    </div>
                    </div>
                    {(ingredient.length - 1 === index ) && (ingredient.length < 40) && (<button type='button' onClick={addMoreInputsHandler}>add more</button>)}
                    </div>
                );
                })}
                  <label htmlFor="instructions">Instructions</label>
                {instruction.map((allInstructions, index) => {
                    return ( 
                <div className="form-group instructions" key={index}>
                    <div className='instructions-group'>
                    <div className="first-part">
                    <input 
                    type="text"
                    name="instructions" 
                    value={allInstructions.instructions}
                    onChange={(e) => instructionsHandler(e, index)}
                    />
                    </div>
                    <div className="second-part">
                {instruction.length > 1 && ( <button type='button' onClick={() => {removeMoreInstructionsHandler(index)}}>remove steps</button>)}
                </div>
                </div>
                
                {(instruction.length - 1 === index ) && (instruction.length < 40) && (<button type='button' onClick={addMoreInstructionsHandler}>+ Instruction Steps</button>)}
                </div>
                 );
                })}
                <button type="submit" >Post recipe</button>
            </form>
        </div>
    );
};

export default RecipesPlus;