import axios from 'axios';
import React, {useState, useEffect} from 'react';
import classes from './RecipesPlus.module.css';

const RecipesPlus = () => {

const [ countryList, setCountryList ] = useState([]);
const [ data, setData ] = useState([]);
const [ instruction, setInstruction ] = useState(['']);
const [ingredient, setIngredient] = useState([{item:'', quantity:'', unit:''}]);
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
    axios.get('https://restcountries.com/v3.1/all/')
    .then((res) => {
    setData(res.data)
    let countries = [];
    res.data.map((item) => { 
    countries.push(item.name.common);
    countries.sort();
    return(countries)
    })
    setCountryList(countries);
    });
    }, [uploadRecipe]);
      
      
const inputHandler = (e) => {
      setUploadRecipe({...uploadRecipe,  [e.target.name]:e.target.value})
    };

const countryDetailsHandler = (e) => {
    data.map((item, index) => { 
        let flagimg = e.target.value;
        if (flagimg === item.name.common) { 
    setUploadRecipe({...uploadRecipe,  flagurl: data[index].flags?.svg, country: data[index].name.common})
}  
return (e.target.value)

 })}

    //Ingredient Section
const ingredientsHandler = (e, index) => {
    const {name, value} = e.target;
    const ingredientList = [...ingredient]
    ingredientList[index][name] = value;
    setIngredient(ingredientList);
    setUploadRecipe({ ...uploadRecipe, ingredients: ingredient });
    };

const addMoreInputsHandler = () => {
    let addMore = {item: '', quantity: '', unit:'' };
        setIngredient([...ingredient, addMore]);
    };

const removeMoreInputsHandler = (index) => {
        const ingredientList = [...ingredient]
        ingredientList.splice(index, 1)
            setIngredient(ingredientList);
        };


    // Instructions Section


const instructionsHandler =(e, index)=>{
        const {value} = e.target;
        const instructionList = [...instruction]
        instructionList[index] = value;
        setInstruction(instructionList);
        setUploadRecipe({ ...uploadRecipe, instructions: instruction });
            }

const addMoreInstructionsHandler = () => {
    let allInstructions = '';
        setInstruction([...instruction, allInstructions]);
    };

const removeMoreInstructionsHandler = (index) => {
    const instructionList = [...instruction]
    instructionList.splice(index, 1)
    setInstruction(instructionList);
    };
    
    // Submit Handler
const submitHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/recipes", uploadRecipe)
      window.location.reload()
    };

    return (
        <div>
            
            <form action="" onSubmit={submitHandler}>
            <h1> Enter Recipe Details</h1>
                <div className={classes.formGroup}>
                    <label htmlFor="name">Name:
                    <input 
                    type="text" 
                    name="name" 
                    onChange={inputHandler}
                    /></label>
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="author">Author</label>
                    <input 
                    type="text" 
                    name="author"
                    onChange={inputHandler}
                     />
                </div>  
                <div className={classes.formGroup}>
                <label htmlFor="countries">Recipe Source</label>
                <select name="country" onChange={countryDetailsHandler}>
                <option value="selected">Select a country</option>
                {countryList.map((item, index) => {
            return ( <option value={item} key={index}>{item} </option>);
            })}
        </select>
            </div>
                <div className={classes.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea 
                    name="description" 
                    cols="30"
                    rows="6"
                    onChange={inputHandler}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="link">Image</label>
                    <input 
                    type="text" 
                    name="image" 
                    onChange={inputHandler}
                    />
                </div>
                <p>Ingredients</p>
                <div className={classes.ingredientsHeader}>
                <span htmlFor="item">Item</span>
                <span htmlFor="quantity">Quantity</span>
                <span htmlFor="quantity">Unit</span>
                </div>
                {ingredient.map((singleIngredient, index) => {
                    return ( 
                    <div key={index}>
                    <div className={classes.addIngredients} >
                    <div className={classes.addMore}>
                    <input type="text" name="item" id="item" value={singleIngredient.item} onChange={(e) => ingredientsHandler(e, index)}/>
                    <input type="text" name="quantity" id="quantity" value={singleIngredient.quantity} onChange={(e) => ingredientsHandler(e, index)}/>
                    <input type="text" name="unit" id="unit" value={singleIngredient.unit} onChange={(e) => ingredientsHandler(e, index)}/>
                    </div>
                    <div className={classes.removeMore}>
                        {ingredient.length > 1 && ( <button type='button' onClick={() => {removeMoreInputsHandler(index)}}>-</button>)}
                    </div>
                    </div>
                    {(ingredient.length - 1 === index ) && (ingredient.length < 40) && (<button className={classes.ingredients}  type='button' onClick={addMoreInputsHandler}>+Ingredients</button>)}
                    </div>
                );
                })}
                <div>
                </div>
                  <p>Instructions</p>
                {instruction.map((allInstructions, index) => {
                    return ( 
                <div  key={index}>
                    <div className={classes.instructionsGroup}>
                    <div className={classes.firstPart}>
                    <input 
                    type="text"
                    name="instructions" 
                    value={allInstructions.instructions}
                    onChange={(e) => instructionsHandler(e, index)}
                    />
                    </div>
                    <div className={classes.secondPart}>
                {instruction.length > 1 && ( <button type='button' onClick={() => {removeMoreInstructionsHandler(index)}}>-</button>)}
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