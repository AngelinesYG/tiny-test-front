import React from 'react'
import axios from 'axios'

class Recipes extends React.Component {
  state = {
    recipes: [],
    allergies: [],
  };

  displayRecipe = async () => {
    const response = await axios.get(
      `https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/`
    );
    console.log(response);
    let filteredRecipe = response.data.filter(
      (recipe) =>
      !this.state.allergies.some((allergy)=>
      recipe.allergens.includes(allergy)
      )
   );
    this.setState({
      recipes: [...filteredRecipe],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.displayRecipe}>View Recipes</button>
        {this.state.recipes.map((recipe) => (
          <div key={recipe.id}>
            {recipe.name}
            <dl>
              <dt>Food Name:</dt>
              <dd>{recipe.name}</dd>
              <dt>Allergens:</dt>
              <dd>{recipe.allergens}</dd>
            </dl>
          </div>
        ))}
      </div>
    );
  }
}


export default Recipes
