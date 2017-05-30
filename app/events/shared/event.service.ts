


import { Injectable } from '@angular/core'
import { BookEvent } from '../../models/bookevent'

@Injectable()
export class EventService{
    currentEvent = new BookEvent();
    getEvents(){
        return EVENTS
    }
    getEvent(bookId:number){
      return EVENTS.find(event => event.bookId===bookId)
    }
    saveEvent(event){
      event.bookId = Math.floor(Math.random() * 20) //get ramdom integer
      EVENTS.push(event)

    }
    initEvent(){
        this.currentEvent = new BookEvent();
    }
}
const EVENTS =[
     {
        "bookId": 101,
        "bookTitle": "Angular JS",
        "topic": "AngularJS",
        "author": "Green",
        "cost": 375,
        "imgUrl": "/app/assets/images/AngularJS1.JPG",
        "issued": true
    },
    {
        "bookId": 102,
        "bookTitle": "Instant AngularJS Starter",
        "topic": "AngularJS",
        "author": "Dan Menard",
        "cost": 150,
        "imgUrl": "/app/assets/images/AngularJS2.JPG",
        "issued": true
    },
    {
        "bookId": 103,
        "bookTitle": "Ng-Book: The Complete Book on AngularJS",
        "topic": "AngularJS",
        "author": "Ari Lerner",
        "cost": 4657,
        "imgUrl": "/app/assets/images/AngularJS3.JPG",
        "issued": false
    },
    {
        "bookId": 104,
        "bookTitle": "Developing BackboneJS Applications",
        "topic": "BackboneJS",
        "author": "Addy Osmani",
        "cost": 650,
        "imgUrl": "/app/assets/images/BackboneJS1.JPG",
        "issued": false
    },
    {
        "bookId": 105,
        "bookTitle": "Backbone.js Patterns and Best Practices",
        "topic": "BackboneJS",
        "author": "Swarnendu De",
        "cost": 390,
        "imgUrl": "/app/assets/images/BackboneJS2.JPG",
        "issued": false
    },
    {
        "bookId": 106,
        "bookTitle": "Backbone.js Cookbook",
        "topic": "BackboneJS",
        "author": "Vadim Mirgorod",
        "cost": 240,
        "imgUrl": "/app/assets/images/BackboneJS3.JPG",
        "issued": false
    },
    {
        "bookId": 107,
        "bookTitle": "Ember.js in Action",
        "topic": "EmberJS",
        "author": "Joachim Haagen Skeie",
        "cost": 2500,
        "imgUrl": "/app/assets/images/EmberJS1.JPG",
        "issued": false
    },
    {
        "bookId": 108,
        "bookTitle": "Mastering Ember.js",
        "topic": "EmberJS",
        "author": "Mitchel Kelonye",
        "cost": 3500,
        "imgUrl": "/app/assets/images/EmberJS2.JPG",
        "issued": false
    },
    {
        "bookId": 109,
        "bookTitle": "Developing an EmberJS Edge",
        "topic": "EmberJS",
        "author": "Jamie White and Matthew Beale",
        "cost": 2000,
        "imgUrl": "/app/assets/images/EmberJS3.JPG",
        "issued": false
    },
    {
        "bookId": 110,
        "bookTitle": "Node.js in Action",
        "topic": "NodeJS",
        "author": "Mike Cantelon and Marc Harter",
        "cost": 800,
        "imgUrl": "/app/assets/images/NodeJS1.JPG",
        "issued": false
    },
    {
        "bookId": 111,
        "bookTitle": "Node.js the Right Way",
        "topic": "NodeJS",
        "author": "Jim R. Wilson",
        "cost": 1200,
        "imgUrl": "/app/assets/images/NodeJS2.JPG",
        "issued": false
    },
    {
        "bookId": 112,
        "bookTitle": "Pro Node.js for Developers",
        "topic": "NodeJS",
        "author": "Colin Ihrig",
        "cost": 2800,
        "imgUrl": "/app/assets/images/NodeJS3.JPG",
        "issued": false
    }
  ]