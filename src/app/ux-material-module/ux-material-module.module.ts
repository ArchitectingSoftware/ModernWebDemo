import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const MatModules = [
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule
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
