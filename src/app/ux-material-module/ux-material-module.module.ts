import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

const MatModules = [
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
]

@NgModule({
  imports: [
    MatModules
  ],
  exports: [
    MatModules
  ]
})

export class UxMaterialModuleModule { }
