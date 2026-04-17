package com.employee.employee_backend.repository;

import com.employee.employee_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // JPA gives you all CRUD methods automatically!
}
