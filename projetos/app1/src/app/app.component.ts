import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public tipoEncerramento: string;
  public jogoEmAndamento: boolean = true

  public encerrarJogo(tipo: string) :void
  {
    this.tipoEncerramento = tipo
    this.jogoEmAndamento = false
  }

  public reiniciar() :void
  {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
