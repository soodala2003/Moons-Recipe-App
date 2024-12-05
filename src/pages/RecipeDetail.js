//This page will show detailed instructions for a selected recipe.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe detail', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="instructions">
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {Object.keys(recipe).map((key) =>
            key.startsWith('strIngredient') && recipe[key] ? (
            <li key={key}>{recipe[key]}</li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;