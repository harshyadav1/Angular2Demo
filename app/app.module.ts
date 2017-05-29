import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/events-thumbnail.component'
import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toastr.service'
import {EventDetailComponent} from './events/event-details/event-details.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './user/login.component'
import { NavBarComponent } from './nav/navbar.component'
import { AddComponet } from './events/shared/add.component'
import {FormsModule} from '@angular/forms'
import { SearchPipe } from './pipes/search-filter';
import { SortByPipe } from './pipes/sort-by';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
    imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    LoginComponent,
    NavBarComponent,AddComponet,SortByPipe,SearchPipe
    ],
    providers:[EventService,ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}