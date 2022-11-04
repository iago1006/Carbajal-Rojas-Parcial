import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule
  ],
})
export class AngularMaterialModule { }
