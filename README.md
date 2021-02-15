# PapaJohnsClone app
This [web application](http://papajohnsclone.herokuapp.com/) is a light version of papajohns.com built with Angular and ASP.NET Core Web API. User can view items by categories, add selected items to shopping cart, customize pizza and redirect to shopping cart.


## DEMO
</br>
![PapaJohnsCloneScreenshot](/src/assets/otherImages/screenshot.png?raw=true "PapaJohnsClone screenshot")


## Features
* Fully responsive design
* Using Subject (Rx observable)
* Shared components


## Built With
* Angular 4 (TypeScript)
* Angular CLI v1.4.2
* Bootstrap v4.0.0-beta
* Font Awesome v4.7.0
* Google fonts
* ASP.NET Web API (.NET Core 2.0 Framework + C#)
* MS SQL Server


## Getting Started
Note, this project requires Node.js installation.</br>
Follow the steps:
```bash
# step 1. Go to Node.js official website and install it
# check Node.js version (v8.5.0 or upper)
$ node –v
# check npm version (v5.3.0 or upper)
$ npm -v
# step 2. install Angular CLI
$ npm install -g @angular/cli
# check Angular CLI version (v1.4.2 or upper)
$ ng -v
# step 3. import project from github 
$ git clone https://github.com/Tiamatt/PapaJohnsClone
$ cd PapaJohnsClone
# step 4. install the project's dependencies (node_modules folder)
$ npm install
# step 5. run application
$ ng serve
# navigate to `http://localhost:4200/`
# app will automatically reload if you change any of the source files.
```

## API and database
This project is using DotNetApisForAngularProjects RESTful web service and MS SQL database. </br>
* The web service was built with ASP.NET Web API (.NET Core 2.1 Framework and C#) and deployed to SmarterAsp.Net (moved from Microsoft Azure Cloud). See  [DotNetApisForAngularProjects repository](https://github.com/Tiamatt/DotNetApisForAngularProjects) for details. (migrated from former PapaJohnsCloneApi project) </br>
* Database was built with MS SQL and deployed to SmarterAsp.Net (moved from Microsoft Azure Cloud). </br>
