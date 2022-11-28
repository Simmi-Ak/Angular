import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  data={
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
   }
   required(){
      
  }
  onsubmit()
  {
    alert(JSON.stringify(this.data))
  }
  ngOnInit() {
  }

}
