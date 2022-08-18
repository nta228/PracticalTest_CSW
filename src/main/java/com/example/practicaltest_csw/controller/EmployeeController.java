package com.example.practicaltest_csw.controller;

import com.example.practicaltest_csw.model.Employees;
import com.example.practicaltest_csw.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @RequestMapping(value = "employees", method = RequestMethod.GET)
    public ResponseEntity<List<Employees>> getEmployees(){
        List<Employees> lsEmployee = employeeService.findAll();
        if (lsEmployee.size() == 0){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Employees>>(lsEmployee,HttpStatus.OK);
    }
    @RequestMapping(value = "employees/save", method = RequestMethod.POST)
    public ResponseEntity<Employees> addEmployees(@RequestBody Employees e){
        employeeService.saveEmployee(e);
        return new ResponseEntity<Employees>(e, HttpStatus.OK);
    }
    @RequestMapping(value = "employees/update", method = RequestMethod.PUT)
    public ResponseEntity<Employees> updateEmployee(
            @PathParam("id") Integer id, @RequestBody Employees e){
        Employees oldEmployee = employeeService.findById(id);
        oldEmployee.setName(e.getName());
        oldEmployee.setSalary(e.getSalary());
        employeeService.saveEmployee(oldEmployee);
        return new ResponseEntity<Employees>(oldEmployee, HttpStatus.OK);
    }
}
