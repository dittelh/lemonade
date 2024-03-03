import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './Recipes.css';

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    setIsLoading(true);
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => {
        setRecipe(res.data.drinks[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      });
  };

  if (isLoading) {
    return (
      <div className="container margin-custom mb-5">
        <h1 className="Cronus-font">Opskrifter</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container margin-custom mb-5">
      <div className="divFlex">
        <h1 className="Cronus-font">Opskrifter</h1>
        <Button variant="primary" onClick={getRecipe}>
          Find ny opskrift
        </Button>
      </div>

      {/* <h2>{recipe.strAlcoholic}</h2> */}
      <div className="drinksImgContainer row">
        <div className="col-6">
          <h3>{recipe.strCategory}</h3>
          <p>{recipe.strDrink}</p>
          <img className="drinksRecipesImg" src={recipe.strDrinkThumb} alt="Drinks" />
        </div>
        <div className="col-6">
          <p className="pBold">Ingredienser</p>
          {recipe.strIngredient1 !== null && <p>{recipe.strIngredient1}</p>}
          {recipe.strMeasure1 !== null && <p>{recipe.strMeasure1}</p>}

          {recipe.strIngredient2 !== null && <p>{recipe.strIngredient2}</p>}
          {recipe.strMeasure2 !== null && <p>{recipe.strMeasure2}</p>}

          {recipe.strIngredient3 !== null && <p>{recipe.strIngredient3}</p>}
          {recipe.strMeasure3 !== null && <p>{recipe.strMeasure3}</p>}

          {recipe.strIngredient4 !== null && <p>{recipe.strIngredient4}</p>}
          {recipe.strMeasure4 !== null && <p>{recipe.strMeasure4}</p>}

          {recipe.strIngredient5 !== null && <p>{recipe.strIngredient5}</p>}
          {recipe.strMeasure5 !== null && <p>{recipe.strMeasure5}</p>}

          {recipe.strIngredient6 !== null && <p>{recipe.strIngredient6}</p>}
          {recipe.strMeasure6 !== null && <p>{recipe.strMeasure6}</p>}

          {recipe.strIngredient7 !== null && <p>{recipe.strIngredient7}</p>}
          {recipe.strMeasure7 !== null && <p>{recipe.strMeasure7}</p>}

          {recipe.strIngredient8 !== null && <p>{recipe.strIngredient8}</p>}
          {recipe.strMeasure8 !== null && <p>{recipe.strMeasure8}</p>}

          {recipe.strIngredient9 !== null && <p>{recipe.strIngredient9}</p>}
          {recipe.strMeasure9 !== null && <p>{recipe.strMeasure9}</p>}

          {recipe.strIngredient10 !== null && <p>{recipe.strIngredient10}</p>}
          {recipe.strMeasure10 !== null && <p>{recipe.strMeasure10}</p>}

          <p className="pBold">Fremgangsmåde</p>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
