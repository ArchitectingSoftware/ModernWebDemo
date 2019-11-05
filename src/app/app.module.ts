import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

//import material design components
import { SimplePageComponent } from './simple-content/simple-page/simple-page.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SimpleStatePageComponent } from './simple-state/simple-state-page/simple-state-page.component';
import { SimpleStateChildComponent } from './simple-state/simple-state-child/simple-state-child.component';
import { ServiceStatePageComponent } from './service-state/service-state-page/service-state-page.component';
import { ServiceStateCardComponent } from './service-state/service-state-card/service-state-card.component';
import { ReduxStateCardComponent } from './redux-state/redux-state-card/redux-state-card.component';
import { ReduxStatePageComponent } from './redux-state/redux-state-page/redux-state-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { UxMaterialModuleModule } from './ux-material-module/ux-material-module.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LayoutComponent } from './responsive/layout/layout.component';
import { HeaderComponent } from './responsive/header/header.component';
import { SidenavListComponent } from './responsive/sidenav-list/sidenav-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SimplePageComponent,
    MainpageComponent,
    SimpleStatePageComponent,
    SimpleStateChildComponent,
    ServiceStatePageComponent,
    ServiceStateCardComponent,
    ReduxStateCardComponent,
    ReduxStatePageComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    UxMaterialModuleModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
