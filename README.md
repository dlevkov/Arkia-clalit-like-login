# Arkia test application
## requirements:
1. Login screen with Id and password
2. Validation rules over validity of inputs
3. Auth guards over correct inputs
4. After successful login might redirect to internal page with lost of users, every user have to contain:
    - First name
    - Last name
    - Id
    - email
5. Have to add ability to edit/delete each user

### overall:
- The app is Angular 2+ based
 - have to be responsive

- might keep look and feel like given [example](https://e-services.clalit.org.il/onlineweb/general/Login.aspx)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

This project hosts on [Firebase](https://clalit-like-login.firebaseapp.com/login) platform.

Navigate to `https://clalit-like-login.firebaseapp.com/` 
or
 `https://clalit-like-login.firebaseapp.com/login` in order to see an app
## Current build status 
Every git push triggers Travis CI to re-build whole app, and current status is:

[![Build Status](https://travis-ci.org/dlevkov/Arkia-clalit-like-login.svg?branch=master)](https://travis-ci.org/dlevkov/Arkia-clalit-like-login)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
