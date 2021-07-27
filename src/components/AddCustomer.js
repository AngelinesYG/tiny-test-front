import React, {Component} from 'react'
import '../App.css';

export default class AddCustomer extends Component {
   state = {
      customers: [],
      first_name: '',
      last_name: '',
      email: '',
      child_first_name: '',
      child_last_name: '',
      allergies: ''
   }

   handleChange = (event) => {
      this.setState({
         [event.target.id]: event.target.value,
      })
   }

   handleSubmit = (event) =>{
      event.preventDefault()
      this.props.addCustomers(this.state)
   }

   render(){
      return(
         <details>
            <summary>Add Customer</summary>
            <div className='addingC'>
               <form className="addCustomer" onSubmit={this.handleSubmit}>
               <label htmlFor="first_name">First Name:</label>
               <input
               type="text"
               id="first_name"
               value={this.state.first_name}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="last_name">Last Name:</label>
               <input
               type="text"
               id="last_name"
               value={this.state.last_name}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="email">Email:</label>
               <input
               type="text"
               id="email"
               value={this.state.email}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="child_first_name">Child's First Name:</label>
               <input
               type="text"
               id="child_first_name"
               value={this.state.child_first_name}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="child_last_name">Child's First Name:</label>
               <input
               type="text"
               id="child_last_name"
               value={this.state.child_last_name}
               onChange={this.handleChange}
               />
               <br/>
               <label htmlFor="allergies">Allergies:</label>
               <input
               type="text"
               id="allergies"
               value={this.state.allergies}
               onChange={this.handleChange}
               />
               <br/>
               <input type="submit" value="Add Customer"/>
               </form>
            </div>
         </details>
      )
   }

}
