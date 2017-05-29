import {Routes} from '@angular/router'
import {EventsListComponent} from './events/events-list.component'
import {EventDetailComponent} from './events/event-details/event-details.component'
import { AddComponet } from './events/shared/add.component'

export const appRoutes:Routes = [
    
    {path: 'events/add',component:AddComponet},
    {path: 'events',component:EventsListComponent},
    {path: 'events/:id',component:EventDetailComponent},
    {path: "",redirectTo:'/events',pathMatch:'full'}
]