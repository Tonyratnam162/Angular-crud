import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent{
  employee:Employee= new Employee();
  constructor(private employeeService: EmployeeService,){

   }
  // ngOnInit(): void{
  //   this.addEmployee();

  // }
  onSubmit(){
     this.addEmployee();
     alert("employee details saved successfully");

  }

  addEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
    }
    );



    window.location.reload();



  }
}
