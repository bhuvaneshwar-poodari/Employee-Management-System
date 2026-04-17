import axios from "axios";

const BASE_URL = "http://localhost:8086/api/employees";

const employeeService = {
  // Get All Employees
  getAllEmployees: () => {
    return axios.get(BASE_URL);
  },

  // Get Employee By ID
  getEmployeeById: (id) => {
    return axios.get(`${BASE_URL}/${id}`);
  },

  // Create Employee
  createEmployee: (employee) => {
    return axios.post(BASE_URL, employee);
  },

  // Update Employee
  updateEmployee: (id, employee) => {
    return axios.put(`${BASE_URL}/${id}`, employee);
  },

  // Delete Employee
  deleteEmployee: (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
  },
};

export default employeeService;
