import { Component,Input } from '@angular/core'

@Component({
    selector:'event-thumbnail',
   template:
   `
    <div [routerLink]="['/events',event.bookId]" class = "well hoverwell thumbnail">
    <h2>{{event.bookTitle}}</h2>    
    


    

    <div><img [src] = "event.imgUrl" class="img-thumbnail" /></div>
       </div>

    `,
    styles:['.thumbnail{min-height:210px;}.well div {color:red;} ']
})
export class EventThumbnailComponent{
    @Input() event:any
   


}