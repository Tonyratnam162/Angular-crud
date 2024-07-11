import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  id:number=0;
  employee:Employee=new Employee();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}
ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id')!;
this.getDetails(this.id);
}
getDetails( id:number):void{
   this.employeeService.getEmployeeById(id).subscribe(data=> this.employee=data)
}
back(){
  this.router.navigate(["/employees"])
}
}
