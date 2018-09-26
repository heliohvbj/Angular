import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public mensagem: string;
  public jogoEmAndamento: boolean = true

  public encerrarJogo(mensagem: string) :void
  {
    this.mensagem = mensagem
    console.log(this.mensagem)
    this.jogoEmAndamento = false
  }

  public reiniciar() :void
  {
    this.jogoEmAndamento = true
  }
}
