import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
<ul>
  {props.employees.map((employee) => (
    <li key={employee.EmployeeId}>
      <Link to={`/employees/${employee.EmployeeId}`}>
        {employee.firstName} {employee.lastName}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}

export default EmployeeList;