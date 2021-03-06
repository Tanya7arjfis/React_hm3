import React, { Component } from 'react'
import './App.css'
import Newcontact from './components/Newcontact';
import Form from './components/Form'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 1, nameuser: 'Oleg', surname: 'vddhv', tel: '54545' },
        { id: 2, nameuser: 'Ihor', surname: 'gegtg', tel: '44568' },
        { id: 3, nameuser: 'Vania', surname: 'hthrt', tel: '4686' },
      ],
      showForm: false,
    }
  }

  handlertoggleForm = (e) => {
    this.setState(state => ({
      showForm: !state.showForm
    }))
  }

  addContact = (nameuser, surname, tel) => {
    this.setState({
      contacts: [...this.state.contacts, {id: new Date().getTime(), nameuser, surname, tel}]
    })
    this.handlertoggleForm();
  }

  deleteItem = (e) => {
    e.stopPropagation();
    let id = +e.target.id;
    const updateContact = this.state.contacts.filter((item) => item.id !== id);
    console.log(updateContact);
    this.setState({
      contacts: updateContact
    })
  }

  cancel = (e) => {
    this.setState({
      contacts: this.state.contacts
    })
    this.handlertoggleForm();
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
          {this.state.showForm ?  <Form addсontact={this.addContact} cancel={this.cancel}/> : undefined }
        </div>
      </div>
    )
  }
}
