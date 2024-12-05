//This page will display a list of random recipes fetched from TheMealDB API.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import '../assets/styles/Home.css';

const Home = () => {
 const [recipes, setRecipes] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchRandomRecipes = async () => {
   try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    setRecipes(response.data.meals);
   } catch (error) {
    console.error('Error fetching recipes', error);
   } finally {
    setLoading(false);
   }
  };
  fetchRandomRecipes();
 }, []);

 if (loading) return <div className="loading">Loading...</div>;
 
 return (
  <div className="home">
   <h1>Random Recipes</h1>
   <div className="recipe-list">
    {recipes.map((recipe) => (
     <RecipeCard key={recipe.idMeal} recipe={recipe} />
    ))}
   </div>
  </div>
 );
};

export default Home;