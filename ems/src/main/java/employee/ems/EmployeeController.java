package employee.ems;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    private EmployeeRepository employeeRepository;

    EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // get all employees
    @GetMapping("")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Employee employeeFromDatabase = employeeRepository.findById(id).orElse(null);
        if (employeeFromDatabase != null) {
            if (employee != null && employee.getFirstName() != employeeFromDatabase.getFirstName()) {
                employeeFromDatabase.setFirstName(employee.getFirstName());
            }
            if (employee != null && employee.getLastName() != employeeFromDatabase.getLastName()) {
                employeeFromDatabase.setLastName(employee.getLastName());
            }
            if (employee != null && employee.getEmailId() != employeeFromDatabase.getEmailId()) {
                employeeFromDatabase.setEmailId(employee.getEmailId());
            }
            return employeeRepository.save(employeeFromDatabase);
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return "redirect:/";
    }
    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable long id) {
        return employeeRepository.findById(id).orElse(null);
    }
    

}
