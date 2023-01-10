import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipesPlus from './pages/RecipesPlus';
import SingleRecipe from './pages/SingleRecipe';
import Layout from './pages/Layout';
import WrongPage from './pages/WrongPage';

// const RouterWrapper  = (props) => {
//   const params = useParams();

//   return <SingleRecipe params={params} {...props} /> //props can be used to pass properties

// };
 
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />}    />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:singlerecipe" element={<SingleRecipe />} />
        <Route path="recipesplus" element={<RecipesPlus />} />
        <Route path='*'  element={<WrongPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
 };
 
 export default App;
