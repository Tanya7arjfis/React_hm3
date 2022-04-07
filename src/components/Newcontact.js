import React, { Component } from 'react'

export default class Newcontact extends Component {
  constructor() {
    super()
  
    this.state = {
      contacts: [
        { id: 1, nameuser: 'Oleg', surname: 'vddhv', tel: '54545' },
        { id: 2, nameuser: 'Ihor', surname: 'gegtg', tel: '44568' },
        { id: 3, nameuser: 'Vania', surname: 'hthrt', tel: '4686' },
      ],
      // id: '', 
      // nameuser: '', 
      // surname: '',
      // tel: ''
    }
    console.log(this.state.contacts)
  }

  deleteItem = (e) => {
    e.stopPropagation();
    let id = +e.target.id;
    console.log(id);
    const updateContact = this.state.contacts.filter((item) => item.id !== id);
    console.log(updateContact);
    this.setState({
      contacts: updateContact
    })
    
  }

  renderTableData = () => {
    return this.state.contacts.map((contact, index) => {
      const {id, nameuser, surname, tel} = contact;
      return (
        <tr key={id}>
          <td>{nameuser}</td>
          <td>{surname}</td>
          <td>{tel}</td>
          <td><button id={id} onClick={this.deleteItem}>Delete</button></td>
        </tr>
      )
    })
  }

  

  render() {
    return (
      <>
        <table className='contact-table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone number</th>
              <th>Delete contact</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </>
    )
  }
}
