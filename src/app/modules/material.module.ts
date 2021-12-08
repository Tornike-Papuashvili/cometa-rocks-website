import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule }    from '@angular/forms';




@NgModule({
  imports: [
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule {}