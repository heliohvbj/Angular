import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string ='Traduza a frase:'
  public resposta: string
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public eventoFimDoJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnDestroy()
  {
    console.log("Painel destruído")
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
    
    if(this.rodada >= this.frases.length)
      this.eventoFimDoJogo.emit('You Win!')

    this.atualizaRodada()
  }

  public atualizaRodada() :void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta =''
  }

  public respostaErrada() : void
  {
    this.tentativas--

    if(this.tentativas < 0)
     this.eventoFimDoJogo.emit('You Lose!')
  }
}
