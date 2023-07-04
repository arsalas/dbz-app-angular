import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { IntersectionDirective } from './directives/intersection.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ImagePipe, IntersectionDirective, NavbarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ImagePipe, IntersectionDirective, NavbarComponent],
})
export class SharedModule {}
