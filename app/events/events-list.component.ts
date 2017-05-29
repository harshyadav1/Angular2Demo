import {Component,OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { Router } from '@angular/router'
@Component({
    template:`<div>
    <h1>Angular 2 Books</h1>&nbsp;&nbsp;&nbsp;
    <div class="search-div">
    <label>Search by Title</label>&nbsp;
    <input type="text" [(ngModel)] = "searchText"/>
  </div>
     <div class="search-div">
    <label>Sort by</label>&nbsp;&nbsp;&nbsp;&nbsp;
    <select [(ngModel)]="sortByKey" class="sortDropdown">
      <option value="bookId">Book Id</option>
      <option value="bookTitle">Title</option>
      <option value="topic">Topic</option>
      <option value="author">Author</option>
      <option value="cost">Cost</option>
    </select>  
     </div>
  




    <div class = "row"> 
    <div  class="col-md-4" *ngFor="let event of events | searchpipe: searchText | sortBy: sortByKey" >
      <event-thumbnail (click)="handleThumbanailClick(event.name)"  [event] = "event"></event-thumbnail>
      <button [routerLink]="['/events',event.bookId]">View</button>
            <button (click)="removeItem(event)">Remove</button>
            <button (click)="onEdit(event)">Update</button>
      </div>     
      </div>
     
  </div>
 
    `,
    styles:[`
    .sortDropdown{color:#000}
    `]
})
export class EventsListComponent implements OnInit{
events:any[]
  private sortByKey: string;
constructor(private eventService : EventService,private toastr: ToastrService,private router:Router){
this.events = this.eventService.getEvents()  
}
ngOnInit(){
   this.sortByKey = "bookId";
this.events = this.eventService.getEvents()
}
handleThumbanailClick(eventName){
  this.toastr.success(eventName, 'This is my App')
}

removeItem(event){
        //this.events.remove(event);
       
       this.events.splice(this.events.indexOf(event), 1);
     
    }

     onEdit(event) { 
     this.router.navigate(['/events/add']);

  }
}