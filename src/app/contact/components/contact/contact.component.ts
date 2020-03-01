import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   contactForm : FormGroup = this.formBuilder.group({
    emailAddress: this.formBuilder.control("",[
      Validators.required,
      Validators.email
    ])
  ,
  
    title: this.formBuilder.control("",
    [
      Validators.required,
      Validators.minLength(4)
    ]),
    desc: this.formBuilder.control("",[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255)
    ])
  });

  constructor(private formBuilder : FormBuilder) { }

  submit()
  {
    
  }

  ngOnInit(): void {
    this.contactForm 
  }

}
