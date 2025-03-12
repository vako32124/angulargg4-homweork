import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  h1 = 'hello'

firstname?:string
lastname?:string

username(){
  console.log(this.firstname)
  console.log(this.lastname)
}

user(){
  console.log(this.firstname)
  console.log(this.lastname)
}



}
