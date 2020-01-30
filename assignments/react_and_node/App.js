import React, { Component } from 'react';
import './App.css';
class App extends Component{

  state={ users:[]
  }
  componentDidMount(){
    fetch('http://localhost:4000/product')
    .then(res=>res.json())
    .then(users=>this.setState({ users }));
  }
  render(){

  return (
    <div className="App">
   <h1>Users</h1>
   <ul>
     {this.state.users.map(user=>
     <li key={user.id}>{user.name}</li>)}
   </ul>
    </div>
  );
}
}
export default App;
