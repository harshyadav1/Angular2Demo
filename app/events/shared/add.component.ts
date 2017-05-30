import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service'

@Component({

    templateUrl: 'app/events/shared/add.component.html'
})
export class AddComponet implements OnInit {
    currentEvent = null;
    isDirty: boolean = true;
    private sub: any;

    constructor(private router: Router, 
    private route: ActivatedRoute,
    private eventService: EventService) {

    }
    cancel() {
        this.router.navigate(['/events'])
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])

    }
     ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       var bookId = +params['id']; // (+) converts string 'id' to a number

       if(!bookId){
            this.eventService.initEvent();
       }
        
        //we can also pull the book from books collection based on above bookid
       this.currentEvent = this.eventService.currentEvent;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}