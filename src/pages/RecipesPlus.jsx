import axios from 'axios';
import React, {useState, useEffect} from 'react';

const RecipesPlus = () => {

const [ countryList, setCountryList ] = useState([]);
// const [ instructions, setInstructions ] = useState([]);
const [ingred, setIngred] = useState([{id: 1, item:'', quantity:''}])
// const [isLoading, setIsLoading] = useState(false);
const [ uploadRecipe, setUploadRecipe ] = useState({
        id: '',
        name: '',
        author: '',
        country: '',
        description: '',
        link: '',
        ingredients: [],
        instructions: []
        });
// const [ showpopup, setShowpopup ] = useState(false);
      
      
const inputHandler = (e) => {
      setUploadRecipe({...uploadRecipe,  [e.target.name]:e.target.value})
    };

const ingredientHandler = (e, index) => {
    const {name, value} = e.target;
    const addMore = [...ingred];
    addMore[index][name] = value;
    setIngred(addMore);
    setUploadRecipe({ ...uploadRecipe, ingredients: ingred });
      };

// const instructionsHandler =(e)=>{
//         const name = e.target.name;
//         let value = e.target.value;
//         value = value.split('\n').map(str => <span>{str}<br/></span>);
//         setUploadRecipe({ ...uploadRecipe, [name]: value });
//         }

const addMoreInputsHandler = (e) => {
        e.preventDefault();
        setIngred([...ingred,{id: ingred.length + 1,  item: '', quantity: '' }]);
    };

const postHandler = (e) => {
    axios.post("http://localhost:3001/recipes", uploadRecipe)
    }
    
const submitHandler = (e) => {
      e.preventDefault();
      postHandler(uploadRecipe)
      window.location.reload()
    };



useEffect(() => {
// setIsLoading(true)
axios.get('https://restcountries.com/v3.1/all/')
.then((response) => {
let countries = [];
response.data.map((item) => { 
    countries.push(item.name.common);
    countries.sort();
    return(countries)
})
setCountryList(countries);
console.log('RestAPI:', countries);
});
}, []);

// if(isLoading){
//     return <p>Loading...</p>
//   }




    return (
        <div>
            <h1>Add new recipe</h1>
            <form action="" method="post" onChange={inputHandler} onSubmit={submitHandler} {...uploadRecipe}>
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
                    name="link" 
                    onChange={inputHandler}
                    />
                </div>
                <p>Ingredients</p>
                {ingred.map((_, index) => {
                    return (
                    <div className="form-group" key={index}>
                    <div className="add-more">
                    <label htmlFor="item">Item</label>
                    <input type="text" name="item" id="item" onChange={(e) => ingredientHandler(e, index)}/>
                    </div>
                    <div className="add-more">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" id="quantity" onChange={(e) => ingredientHandler(e, index)}/>
                    </div>
                    </div> 
                    );
                })}
                <button type='button' onClick={addMoreInputsHandler}>add more</button>
                
  
                <div className="form-group instructions">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea 
                    name="instructions" 
                    />

                </div>
                <button type="submit" >Post recipe</button>
            </form>
        </div>
    );
};

export default RecipesPlus;