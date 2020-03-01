import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herb-content',
  templateUrl: './herb-content.component.html',
  styleUrls: ['./herb-content.component.css']
})
export class HerbContentComponent implements OnInit {

  @Input() public herbItem : any;


  constructor() {   
  }
  

  ngOnInit(): void {
    this.herbItem;
  }

}
