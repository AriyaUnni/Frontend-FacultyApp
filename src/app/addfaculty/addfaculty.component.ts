import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  facultyName=""
  department=""
  email=""
  mobileNo=""

  status:boolean=false

  readValues=()=>{
    let data={
      "facultyName":this.facultyName,
      "department":this.department,
      "email":this.email,
      "mobileNo":this.mobileNo
    }

    console.log(data)

    this.facultyName=""
    this.department=""
    this.email=""
    this.mobileNo=""

    this.status=true
  }

  ngOnInit(): void {
  }

}
