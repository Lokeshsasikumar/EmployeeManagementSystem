package com.cg.pm;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // JPA will handle the heavy lifting!
}