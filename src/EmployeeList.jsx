import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:9009/employeee");
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:9009/employeee/delete/${id}`);
        loadEmployees();
    };

    return (
        <div>
            <h2>Employee Management</h2>
            <Link to="/add">Add Employee</Link>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.age}</td>
                            <td>
                                <Link to={`/edit/${employee.id}`}>Edit</Link>
                                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
