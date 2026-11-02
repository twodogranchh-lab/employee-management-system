import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

class App extends Component {
 constructor(props) {
  super(props);
  const  savedEmployees = localStorage.getItem('employees');

this.state = {
   employees:savedEmployees ? JSON.parse(savedEmployees) : []
};
}
addEmployee = (employee) => {
   this.setState((prevState) => ({
     employees: [...prevState.employees, employee]
}), this.saveData);
};

saveData = () => {
  localStorage.setItem('employees', JSON.stringify(this.state.employees));
};


render() {
  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">Home</a>{" | "}
          <a href="/about">About</a>
        </nav>

        <Switch>
<Route
 path="/employee"
 render={() => <EmployeeForm addEmployee={this.addEmployee} />}
/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;