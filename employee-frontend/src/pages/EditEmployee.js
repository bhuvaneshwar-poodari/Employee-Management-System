import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await employeeService.getEmployeeById(id);
    setEmployee(result.data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await employeeService.updateEmployee(id, employee);
    alert("Employee updated successfully!");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Edit Employee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          "firstName",
          "lastName",
          "email",
          "department",
          "position",
          "salary",
        ].map((field) => (
          <div key={field} style={styles.formGroup}>
            <label style={styles.label}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "salary" ? "number" : "text"}
              name={field}
              value={employee[field]}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        ))}
        <div style={styles.buttons}>
          <button type="submit" style={styles.submitBtn}>
            ✅ Update Employee
          </button>
          <button
            type="button"
            style={styles.cancelBtn}
            onClick={() => navigate("/")}
          >
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "30px", maxWidth: "600px", margin: "0 auto" },
  title: { fontSize: "28px", marginBottom: "20px", color: "#2c3e50" },
  form: { backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "8px" },
  formGroup: { marginBottom: "15px" },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  buttons: { display: "flex", gap: "10px", marginTop: "20px" },
  submitBtn: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  cancelBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default EditEmployee;
