
import React, { Component } from 'react';
import '../EmployeeForm.css';
class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      department: ''
    };
  }
    handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEmployee(this.state);
  };
render() {
    return (
      <div>
        <h2>New Employee Form</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
  type="text"
  name="firstName"
  value={this.state.firstName}
  onChange={this.handleChange}
/>
          </label>

          <br />

          <label>
            Last Name:
            <input
  type="text"
  name="lastName"
  value={this.state.lastName}
  onChange={this.handleChange}
/>
          </label>

          <br />

          <label>
            Email:
            <input
  type="email"
  name="email"
  value={this.state.email}
  onChange={this.handleChange}
/>
          </label>

          <br />

          <label>
            Department:
            <input
  type="text"
  name="department"
  value={this.state.department}
  onChange={this.handleChange}
/>
          </label>

          <br />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
