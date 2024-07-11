import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

 employees: Employee[] =[];
  constructor(private employeeService: EmployeeService, private router: Router){
  }

  ngOnInit(): void {
      this.getEmployees();
  }
  private getEmployees():any{
      this.employeeService.getEmployeesList().subscribe(data =>
      {
        this.employees = data;

  });  
  }

  deleteEmployee(id:number):any{
    this.employeeService.deleteEmployee(id).subscribe(
      ()=>{this.employees=this.employees.filter(employee=>employee.id=id);

      }
    ); window.location.reload();


  }
  updateEmployee(id: number): void {
    this.router.navigate(['/employees/edit', id]);
  }

  view(id:number):void
{
  this.router.navigate(['/employees',id])
}}
