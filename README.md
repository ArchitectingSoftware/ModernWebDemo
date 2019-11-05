# ModernWebDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

1. `ng new ModernWebDemo` then `cd ModernWebDemo`
2. `ng add @angular/material` to get some styling support - take defaults
3. `yarn add @angular/flex-layout` to support some responsive features.  Also add support to `app.module.ts`
4. `ng serve` to start development server; go to `http://localhost:4200`
5. `ng generate component navbar --skipTests` to generate our first component; code in `app/navbar`
6. Lets add our first component - the navbar.  Prepare to use it via editing `app.module.ts` with `import {MatToolbarModule} from '@angular/material';`
7. Now cleanup the `app.component.html`, delete everything and add the navbar component
8. `ng generate component mainpage  --skipTests` and `ng generate component simple-content/simple-page  --skipTests`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
