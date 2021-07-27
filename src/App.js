import React from 'react'
import axios from 'axios'
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button'
import Nav from './components/Nav'
import CustomerProf from './components/CustomerProf'
import AddCustomer from './components/AddCustomer'
import Footer from './components/Footer'
import Recipes from './components/Recipes'
import './App.css';

class App extends React.Component {
   state = {
      customers: [],
      first_name: '',
      last_name: '',
      email: '',
      child_first_name: '',
      child_last_name: '',
      allergies: ''
   }

   addCustomer = (customer) =>{
      // event.preventDefault();
      axios.post("https://tiny-rest-api-back.herokuapp.com/", customer)
      .then((response)=>{
         this.getCustomers()
      })
      .catch((error)=> console.error(error))
   }

   handleChange = (event) =>{
      this.setState({
         [event.target.id]: event.target.value,
      })
   }

   getCustomers = () => {
      axios.get("https://tiny-rest-api-back.herokuapp.com/")
      .then((response)=>{
         this.setState({
            customers: response.data
         })
      })
      .catch((error)=> console.error(error))
   }

   componentDidMount = () =>{
      this.getCustomers()
   }

   render(){
      return(
         <div>
         <ScrollUpButton/>
         <AddCustomer/>
         <Recipes/>
         <div className="customers">

            {this.state.customers.map((customer) => {
               return(
                  <CustomerProf customer={customer}
                   handleChange={this.handleChange}
                   />
               )
            })}
         </div>
         </div>
      )
   }
}

export default App;
