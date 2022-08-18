package com.example.practicaltest_csw.service;

import com.example.practicaltest_csw.model.Employees;

import java.util.List;

public interface EmployeeService {
    public void saveEmployee(Employees e);
    public Employees findById(Integer id);
    public List<Employees> findAll();
    public List<Employees> findAllByName(String name);
}