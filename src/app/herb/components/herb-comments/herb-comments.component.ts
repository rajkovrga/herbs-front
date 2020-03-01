import { HerbService } from './../../services/herb.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-herb-comments',
  templateUrl: './herb-comments.component.html',
  styleUrls: ['./herb-comments.component.css']
})
export class HerbCommentsComponent implements OnInit {

  public commentsListShow:boolean = false; 
  @Input() public likes : any;
  @Input() public comments : any;
  id : any;
  page = 1;
  _commentItems : Observable<any>;

  constructor(private activatedRouter : ActivatedRoute, private herbService : HerbService) { 
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.commentsPagination();

  }

  commentsPagination(page = 1)
  {
      this._commentItems = this.herbService.getComments(this.id, page).pipe();
  }

  ngOnInit(): void {
    this.commentsListShow;
    this.likes;
    this.comments;
    this._commentItems;
  }

}
