import React, { Component } from 'react'

export default class Form extends Component {
  constructor () {
    super();
    this.state = {
      nameuser: '',
      surname: '', 
      tel: ''
    }

  }

  changeHandler = (e) => {
    console.log(e.target.name);
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    let person = {

    }

  }
  
  render() {
    return (
      <form className='form' 
      onSubmit={this.submitHandler}
      >
            <input 
              type='text' 
              placeholder='Name' 
              name='nameuser' 
              onChange={this.changeHandler} 
              value={this.state.nameuser} 
              key={1} />
            <input 
              type='text' 
              placeholder='Surname' 
              name='surname' 
              onChange={this.changeHandler} 
              value={this.state.surname}
              key={2} />
            <input 
              type='tel' 
              placeholder='Phone' 
              name='tel' 
              onChange={this.changeHandler} 
              value={this.state.tel} 
              key={3} />
            <button key={4} type="submit" >Save contact</button>
            <button key={5} type="submit" handlerCancel={this.props.handlerCancel} >Cancel</button>
      </form>
    )
  }
}
