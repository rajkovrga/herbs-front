import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerbService } from '../../services/herb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-herb-item',
  templateUrl: './herb-item.component.html',
  styleUrls: ['./herb-item.component.css']
})
export class HerbItemComponent implements OnInit {

  public id: any; 
  public herb: Observable<any>;
  public numLikes: any;
  public numComments : any;

  constructor(private herbService  : HerbService, private activatedRouter : ActivatedRoute) {
    this.id = this.activatedRouter.snapshot.paramMap.get('id'); 
    this.herb  = this.herbService.getHerb(this.id).pipe();
  }

  

  ngOnInit(): void {
    this.herb.subscribe(data =>
      {
        this.herb = data;
        this.numLikes = data['likes_count'];
        this.numComments = data['comments_count']
      });
      
  }


}
