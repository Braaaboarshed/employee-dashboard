import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { employModel } from './employ-dash-borad.model';
@Component({
  selector: 'app-employ-dashboard',
  templateUrl: './employ-dashboard.component.html',
  styleUrls: ['./employ-dashboard.component.css']
})
export class EmployDashboardComponent implements OnInit {
formValue !:FormGroup
employData !:any
showAddButton! :boolean;
showUdateButton!:boolean;
employModelObj :employModel =new employModel();
  constructor(private formbuilder :FormBuilder,
    private api:ApiService) { }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      firstName : [''],
      lastName :[''],
      email :[''],
      mobile :[''],
      salary :[''],


    })
    this.getAllEmploye()
  }

  clickAddEmpoly(){
    this.formValue.reset()
    this.showAddButton =true;
    this.showUdateButton =false;
  }
  postEmployDetails(){
    this.employModelObj.id =this.formValue.value.id;
    this.employModelObj.firstName =this.formValue.value.firstName;
    this.employModelObj.lastName =this.formValue.value.lastName;
    this.employModelObj.email =this.formValue.value.email;
    this.employModelObj.mobile =this.formValue.value.mobile;
    this.employModelObj.salary =this.formValue.value.salary;
 this.api.postEmploy(this.employModelObj)
.subscribe(res=>{
  console.log(res);
  alert("Employ Added Successfully")
  let ref = document.getElementById("cancel")
  ref?.click();
  this.formValue.reset();
  this.getAllEmploye();

},
)

}
getAllEmploye(){
  this.api.getEmploy()
  .subscribe(res=>{
    this.employData =res
  })
}
deleteEmploy(info :any){
this.api.deleteEmploy(info.id)
.subscribe(res=>{
  alert("employee deleted sccessfull")
  this.getAllEmploye()
})

}
onEdit(info :any){
  this.showAddButton=false;
  this.showUdateButton=true; 
  this.employModelObj.id =info.id;
  this.formValue.controls['firstName'].setValue(info.firstName)
  this.formValue.controls['lastName'].setValue(info.lastName)
  this.formValue.controls['email'].setValue(info.email)
  this.formValue.controls['mobile'].setValue(info.mobile)
  this.formValue.controls['salary'].setValue(info.salary)



}
updateEmployDetails(){
this.employModelObj.firstName = this.formValue.value.firstName
this.employModelObj.lastName = this.formValue.value.lastName
this.employModelObj.email = this.formValue.value.email
this.employModelObj.mobile = this.formValue.value.mobile
this.employModelObj.salary = this.formValue.value.salary

this.api.updateEmploy(this.employModelObj,this.employModelObj.id)
.subscribe(res=>{
    alert("updateing employ information has been seccesed")
    let ref = document.getElementById("cancel")
    ref?.click();
    this.formValue.reset();
    this.getAllEmploye();
  })
}
}

