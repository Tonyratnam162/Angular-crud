import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL:string ="http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseURL}`,employee);
  }

  deleteEmployee(id:number):Observable<void>{
     return this.httpClient.delete<void>(`${this.baseURL}/delete/${id}`);

  }

  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/update/${id}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/${id}`);

 }




}
