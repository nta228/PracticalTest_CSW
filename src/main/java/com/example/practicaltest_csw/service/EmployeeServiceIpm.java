package com.example.practicaltest_csw.service;

import com.example.practicaltest_csw.model.Employees;
import com.example.practicaltest_csw.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceIpm implements EmployeeService{
    @Autowired
    EmployeeRepository employeeRepository;
    @Override
    public void saveEmployee(Employees e) {
        employeeRepository.save(e);

    }

    @Override
    public Employees findById(Integer id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public List<Employees> findAll() {
        return employeeRepository.findAll();
    }
    public List<Employees> findAllByName(String name){
        return employeeRepository.findAllByName(name);
    }
}
