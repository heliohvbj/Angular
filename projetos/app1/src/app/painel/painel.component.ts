import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string ='Traduza a frase:'
  public resposta: string
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  constructor() { 
    console.log(this.frases)
    this.rodadaFrase = this.frases[this.rodada]
  }


  ngOnInit() {
  }

  public atualizaResposta(resposta: Event) : void
  {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta() : void
  {
   
    if(this.resposta == this.rodadaFrase.frasePtBr)
      this.respostaCerta()
    else
      this.respostaErrada()
  }

  public respostaCerta() : void
  {
    this.rodada++
    this.progresso = this.progresso + (100 / this.frases.length)

    console.log(this.progresso);
    
    if(this.rodada >= 4)
    {
      this.rodada  = 0
      this.progresso = 0
    }
      this.rodadaFrase = this.frases[this.rodada]
  }

  public respostaErrada() : void
  {
    alert("A tradução está errada")
  }
}
