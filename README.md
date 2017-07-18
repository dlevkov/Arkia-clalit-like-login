# Arkia test application
## requirements:
1. Login screen with Id and password
2. Validation rules over validity of inputs
3. Auth guards over correct inputs
4. After successful login might redirect to internal page with list of users, every user have to contain:
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

## Publishing process
any push on master branch triggers CI run, then CI builds prod version and if build was success, deploys to Firebase hosting automatically

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

**this is test-only project no any further will be provided, ever** 
