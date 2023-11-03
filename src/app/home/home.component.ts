import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// @NgModule({
//   declarations: [ HomeComponent],
//   // exports: [ HomeComponent], 
// })


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  // declarations: [ HomeComponent],
  // exports: [ HomeComponent], 

  template: `
    <p>
      home works!
    </p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
