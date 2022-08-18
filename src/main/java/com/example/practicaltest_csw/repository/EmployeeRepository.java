package com.example.practicaltest_csw.repository;

import com.example.practicaltest_csw.model.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Integer> {
    List<Employees> findAllByName(String name);
    List<Employees> findAllByNameContainsIgnoreCase(String name);
}