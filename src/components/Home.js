import React from 'react'
import AddCustomer from '../components/AddCustomer'

class Home extends React.Component {
   render(){
      return(
         <div className="newCustomer">
            <h1>Welcome to Tiny!</h1>
            <h2>Fill out the form below to sign up</h2>
            <AddCustomer/>
         </div>
      )
   }
}
export default Home
