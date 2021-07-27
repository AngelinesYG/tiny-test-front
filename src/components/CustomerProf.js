import React from 'react'

export default class CustomerProf extends React.Component {



   render(){
      return(
         <div>
            <h2>First Name: {this.props.customer.first_name}</h2>
            <h2>Last Name: {this.props.customer.last_name}</h2>
            <h2>Email: {this.props.customer.email}</h2>
            <h2>Child's First Name: {this.props.customer.child_first_name}</h2>
            <h2>Child's Last Name: {this.props.customer.child_last_name}</h2>
            <h2>Allergies: {this.props.customer.allergies}</h2>
         </div>
      )
   }
}
