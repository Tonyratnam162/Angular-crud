export class Employee {
  id:number=0;
 firstName: string='';
 lastName: string ='';
 emailId: string='';

  getId(){
   return this.id;
  }
  getFirstName(){
    return this.firstName;
  }
  getLastName(){
    return this.lastName;
  }
  getEmailId(){
    return this.emailId;
  }

  setFirstName(firstName:string){
    this.firstName=firstName;
  }
  setLastName(lastName:string){
    this.lastName=lastName;
  }
  setEmailId(emailId:string){
    this.emailId=emailId;
  }

}
