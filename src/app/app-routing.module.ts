import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { SimplePageComponent } from './simple-content/simple-page/simple-page.component';
import { SimpleStatePageComponent } from './simple-state/simple-state-page/simple-state-page.component';
import { ServiceStatePageComponent } from './service-state/service-state-page/service-state-page.component';
import { ReduxStatePageComponent } from './redux-state/redux-state-page/redux-state-page.component';
import { ReduxAdvPageComponent } from './redux-state-advanced/redux-adv-page/redux-adv-page.component';


const routes: Routes = [
  {path: 'simple-content', component: SimplePageComponent},
  {path: 'simple-state', component: SimpleStatePageComponent},
  {path: 'service-state', component: ServiceStatePageComponent},
  {path: 'redux-state', component: ReduxStatePageComponent},
  {path: 'redux-adv-state', component: ReduxAdvPageComponent},
  {path: '**', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
