import React from 'react';
import Meal from './Meal' ;
import Recipe from './Recipe';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </>
  )
}

export default App;