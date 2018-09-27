import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public Coracoes: Array<Coracao> = 
  [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor() {
   }

   ngOnChanges()
   {
     if(this.tentativas != this.Coracoes.length)
     {
       let indice = this.Coracoes.length - this.tentativas - 1
       this.Coracoes[indice].cheio = false;
     }
   }

  ngOnInit() {
  }

}
