import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id:"11", name: "Man", age: 33},
      {id:"34", name: "Man2", age: 22},
      {id:"54", name: "Man3", age: 44},
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    //this.state.persons[0].name = "Woman";
    this.setState ({
      persons : [
        {name: newName, age: 33},
        {name: "Man2", age: 22},
        {name: "Palini", age: 44},
      ]}
    )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p)=>{
      console.log(id);
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState ({
      persons : persons}
    )
  }
  showPersonsToggle = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
     });
  }
  deletePersonHandler(personIndex){
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
      persons:person
    })
  }
  render() {
    let persons = null

    if (this.state.showPersons){
      persons = (
        this.state.persons.map((item,index) => {
          return <Person
          click={()=> this.deletePersonHandler(index)} 
          name = {item.name} 
          age ={item.age}
          key ={item.id}
          changed={(event)=>this.nameChangeHandler(event, item.id)} />
        })
      )
    }
    return (
      <div className="App">
        <h1>Hi I am Sandeep</h1>
        <p>This is a paragraph</p>
        <button onClick={this.showPersonsToggle}>Toggle Button</button>
        { persons} 
        
      </div>
    );
  }
}

export default App;
