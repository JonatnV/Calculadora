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
  Operaciones: string[]=[];
  Resultados: string[]=[];
  lista: number=0;

  guardarOperacion(){
    this.Operaciones.push(this.COperacion);
    this.Resultados.push(eval(this.CCalculo))
  }
  siguienteOP(){
    if(this.lista!=this.Operaciones.length)
    {
      this.lista=0;
      this.COperacion=this.Operaciones[this.lista];
      this.CResultado=this.Resultados[this.lista];
    }
    else if(this.lista+1 < this.Operaciones.length){
      this.lista+=1;
      this.COperacion=this.Operaciones[this.lista];
      this.CResultado=this.Resultados[this.lista];
    }
  }
  anteriorOP(){
    if(this.lista!=this.Operaciones.length)
    {
      this.lista=this.Operaciones.length-1;
      this.COperacion=this.Operaciones[this.lista];
      this.CResultado=this.Resultados[this.lista];
    }
    else if(this.lista-1 !=-1 ){
      this.lista-=1;
      this.COperacion=this.Operaciones[this.lista];
      this.CResultado=this.Resultados[this.lista];
    }

  }

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
  agregarDec(){
    this.COperacion+="."
    this.CCalculo+="."
  }
  operar(){
    
    try{
        if(!isNaN(eval(this.CCalculo))){
          
          this.CResultado= eval(this.CCalculo);
          this.guardarOperacion();
        }
    } catch(error){
      this.COperacion="Syntax Error";
      this.CResultado="[C]: Cancelar";
    }
  }
  
  
}



