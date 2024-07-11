import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id: number = 0;
  employee: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log(data);
    });
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
  back():void{
    alert("changes will be gone "+this.router.navigate(["/employees"]))
    this.router.navigate(["/employees"]);

  }

}
