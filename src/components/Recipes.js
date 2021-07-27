import React from 'react'
import axios from 'axios'

class Recipes extends React.Component {
   state = {
      name: '',
      allergens: [],
   }

   handleChange = (event) =>{
      this.setState({
         [event.target.id]: event.target.value,
      })
   }

   getRecipes = (event) =>{
      event.preventDefault();
      axios.get("https://60f5adf918254c00176dffc8.mockapi.io/api/v1/recipes/").then((response) => {
         // if(response) => {
         //    console.log(response)
         // } else {
         //    alert('not found')
         // }
         this.setState({
            name: response.data.name,
            allergens: response.data.allergens
         })
      })
   }

   render(){
      return(
         <div>
            <h2>List of Foods</h2>
            <form onSubmit={this.getRecipes}>
               <input type="submit" value="find recipes"/>
            </form>
         </div>
      )
   }
}

export default Recipes
