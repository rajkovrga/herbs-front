import { HerbsService } from './../../services/herbs.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-herb-items',
  templateUrl: './herb-items.component.html',
  styleUrls: ['./herb-items.component.css'],
  providers: [NgbPaginationConfig]
})
export class HerbItemsComponent implements OnInit {

  public _herbs : Observable<any>;
  public page : number = 1;
  public totalItems : number;

  constructor(private herbsService : HerbsService, private config : NgbPaginationConfig) { }

  ngOnInit(): void {
   
    this.paginate()
  }

  paginate(pageNow : number = 1)
  {
    this._herbs = this.herbsService.getAll(pageNow).pipe(share());
    if(this.totalItems == null)
    {
      this._herbs.subscribe(data => {
        this.totalItems = data.total
      })
      }
    }
   

}
