import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: "",
        password: "",
        salary: "",
        gender: "",
        age: "",
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:9009/employeee/${id}`);
        setEmployee(result.data);
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:9009/employeee/alter", employee);
        navigate("/");
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={employee.name} onChange={handleChange} required />
                <input type="password" name="password" value={employee.password} onChange={handleChange} required />
                <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
                <input type="text" name="gender" value={employee.gender} onChange={handleChange} required />
                <input type="number" name="age" value={employee.age} onChange={handleChange} required />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
