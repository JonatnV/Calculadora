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
  CResultado: string ="";
  CCalculo:string ="";
  agregarNum(numero: number) {
  
    this.COperacion +=numero.toString();
    this.CCalculo +=numero.toString();
  }
  borrar(){
    this.COperacion ="";
    this.CResultado ="";
    this.CCalculo ="";
  }
  agregarSum( ){
    this.COperacion+="+";
    this.CCalculo+="+"
  }
  agregarMen(){
    this.COperacion+="-";
    this.CCalculo+="-"
  }
  agregarMult(){
    this.COperacion+="X";
    this.CCalculo+="*"
  }
  agregarDiv(){
    this.COperacion+="÷";
    this.CCalculo+="/"
  }
  abrirPar(){
    this.COperacion+="(";
    this.CCalculo+="("
  }
  cerrarPar(){
    this.COperacion+=")";
    this.CCalculo+=")"
  }
  agregarPot2(){
    this.COperacion+="^2";
    this.CCalculo+="**2";
  }
  agregarPot(){
    this.COperacion+="^";
    this.CCalculo+="**";
  }
  agregarPorC(){
    this.COperacion+="%";
    this.CCalculo+="/100"

  }
  operar(){
    
    this.CResultado= eval(this.CCalculo);
  }
  
  
}



