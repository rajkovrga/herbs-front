import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public editable :boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.editable;

    
  }

}
