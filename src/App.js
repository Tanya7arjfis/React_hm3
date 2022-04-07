import React, { Component } from 'react'
import './App.css'
import Newcontact from './components/Newcontact';
import Form from './components/Form'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: true,

    };
    
  }



  handlertoggleForm = (e) => {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }

  handlerCancel = (e) => {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }
  

  addContact = (nameuser, surname, tel) => {
    
    this.setState({

    })
  }


  render() {
    return (
      <div>
        <div>
          <h1 className='contact-title'>Contacts List</h1>
          <Newcontact deleteItem={this.deleteItem} contacts={this.state.contacts} />
        </div> 
        <div >
          <h1>Form Contacts</h1>
          <button className='add-form' form={this.state.showForm} onClick={this.handlertoggleForm} >
            Add new contact
          </button>

          {this.state.showForm ?  <Form handlerCancel={this.handlerCancel} /> : '' }
         
        </div>
      </div>
    )
  }
}
