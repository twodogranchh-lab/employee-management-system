import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">Home</a>{" | "}
          <a href="/about">About</a>
        </nav>

        <Switch>
<Route path="/employee" component={EmployeeForm} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;