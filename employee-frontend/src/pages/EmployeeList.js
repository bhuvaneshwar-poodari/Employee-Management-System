import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employeeService from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await employeeService.getAllEmployees();
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            await employeeService.deleteEmployee(id);
            loadEmployees();
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Employee List</h2>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.headerRow}>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>First Name</th>
                        <th style={styles.th}>Last Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Department</th>
                        <th style={styles.th}>Position</th>
                        <th style={styles.th}>Salary</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id} style={styles.row}>
                            <td style={styles.td}>{employee.id}</td>
                            <td style={styles.td}>{employee.firstName}</td>
                            <td style={styles.td}>{employee.lastName}</td>
                            <td style={styles.td}>{employee.email}</td>
                            <td style={styles.td}>{employee.department}</td>
                            <td style={styles.td}>{employee.position}</td>
                            <td style={styles.td}>₹{employee.salary}</td>
                            <td style={styles.td}>
                                <button
                                    style={styles.editBtn}
                                    onClick={() => navigate(`/edit/${employee.id}`)}
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    style={styles.deleteBtn}
                                    onClick={() => deleteEmployee(employee.id)}
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: { padding: '30px' },
    title: { fontSize: '28px', marginBottom: '20px', color: '#2c3e50' },
    table: { width: '100%', borderCollapse: 'collapse' },
    headerRow: { backgroundColor: '#2c3e50', color: 'white' },
    th: { padding: '12px', textAlign: 'left', border: '1px solid #ddd' },
    td: { padding: '12px', border: '1px solid #ddd' },
    row: { backgroundColor: '#f9f9f9' },
    editBtn: {
        backgroundColor: '#3498db', color: 'white',
        border: 'none', padding: '6px 12px',
        borderRadius: '4px', cursor: 'pointer', marginRight: '8px'
    },
    deleteBtn: {
        backgroundColor: '#e74c3c', color: 'white',
        border: 'none', padding: '6px 12px',
        borderRadius: '4px', cursor: 'pointer'
    }
};

export default EmployeeList;