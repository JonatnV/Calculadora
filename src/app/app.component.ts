import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  
  COperacion: string ="";
  CCalculo: string=""
  agregarNum(numero: number) {
  
    this.COperacion +=numero.toString();
  }
  borrar(){
    this.COperacion ="";
  }
  
  
  
}



