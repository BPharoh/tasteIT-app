import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipesPlus from './pages/RecipesPlus';
import SingleRecipe from './pages/SingleRecipe';
import NavBar from './components/NavBar';

const RouterWrapper  = (props) => {
  const params = useParams();

  return <SingleRecipe params={params} {...props} /> //props can be used to pass properties

};
 
 const App = () => {
  <NavBar />
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}    />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipesplus" element={<RecipesPlus />} />
          <Route path="recipesplus/:singlerecipe" element={<RouterWrapper />} />
    </Routes>
    </BrowserRouter>
  );
 };
 
 export default App;
