import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>👨‍💼 Employee Management</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Employee List
        </Link>
        <Link to="/add" style={styles.link}>
          Add Employee
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#2c3e50",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 15px",
    borderRadius: "5px",
    backgroundColor: "#3498db",
  },
};

export default Navbar;
