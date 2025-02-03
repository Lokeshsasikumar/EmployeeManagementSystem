import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        password: "",
        salary: "",
        gender: "",
        age: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9009/employeee/add", employee);
            navigate("/");
        } catch (error) {
            console.error("Error adding employee:", error);
            setErrorMessage("There was an error adding the employee. Please try again.");
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={employee.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    placeholder="Salary"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="gender"
                    value={employee.gender}
                    placeholder="Gender"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={employee.age}
                    placeholder="Age"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
