# WixFormBuilder

This repository contains my solution to Wix's [Form Builder Task](https://github.com/wix-incubator/form-builder-exam).
## Tech Stack
Project consists of a Node.JS server side, using MongoDB for storage, and an Angular 10.0.4/NGRX client-side app.

### Server side
Since I didn't want this project to be just 'all about the demo', I chose to use a proper backend storage with a simple API for storing forms & submissions.
Though I don't have vast experience in Node.JS, I decided to use it for my backend, due to its light weight and easy deployment characteristics (someone said .NET? ;))
For storing my app's data I chose MongoDB (local/cloud), as I didn't feel the need for a heavy relational DB with strong relations, stored procedures and such. This was my first MongoDB experienece, and it was a breeze:)

### Client side
For the client side part, I used Anular 10 with [NGRX](https://ngrx.io/). I invested a bit in creating the proper Redux infrastructure, thus making the data flow in the app very straightforward.  I used NGRX Effects to handle all API calls, and created dedicated selectors for delivering the data to the components, occasionally after some processing, for display purposes.
Initially, I considered using some other possibly 'lighter' technology for implementing this app (specifically I considered going with [Polymer](https://www.polymer-project.org/)), but eventually I chickened out, as I wasn't sure I'll be able to deliver on time, I got 4 kids @ home on vacation after all ;)


## Online app

App is available on Heroku: [https://wxformbuilder.herokuapp.com/](https://wxformbuilder.herokuapp.com/). 
(It is auto deplyed from this repository, using MongoDB Atlas for storage).

## Deployment
For running this app on your dev machine you're gonna need a MongoDB up & running. Once set up ([locally](https://docs.mongodb.com/manual/installation/), or on [Atlas](https://www.mongodb.com/cloud/atlas)), please go to project's [.ENV file](https://github.com/bunsenbeaker/wix-form-builder/blob/master/.env) and put your MongoDB URL there (either local or cloud).
In order to run the app on your machine:
1. Clone
2. NPM install it, and run 'ng build'.
3. Run 'node server' from app's folder.

The abovementioned Server.js starts a Node/Express server that's used for both serving the app (from it's DIST folder) and the backend API.
Alternatively, you can use Angular's dev server ('ng serve') for serving the app, and 'node serve' for running the backend API, however this will require setting up some [proxy configuration](https://angular.io/guide/build#proxying-to-a-backend-server).

## Tests
App's code includes some basic testing, which can be run using good old 'ng test'.

## Bottom line...
With this project I took the opportunity to learn some new cool stuff, and I must admit I really enjoyed it :) I hope you guys will too...
