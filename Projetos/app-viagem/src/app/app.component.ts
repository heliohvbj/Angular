import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string  = 'Você quer descobrir para onde vamos?'
  public buttonText: string = "Clique aqui para descobrir"
  public message: string = ""
  public message2: string = ""
  public message3: string = ""
  public errorMessage: string = "An error occurred. Try again later."
  public clicksCount: number = 0
  public isError:boolean = false

  public ButtonClick(): void
  {
    this.clicksCount++

if(this.clicksCount == 1)
this.message = "C"
else  if(this.clicksCount == 2)
this.message = "Co"
else  if(this.clicksCount == 3)
this.message = "Con"
else  if(this.clicksCount == 4)
this.message = "Conti"
else  if(this.clicksCount == 5)
this.message = "Contin"
else  if(this.clicksCount == 6)
this.message = "Continu"
else  if(this.clicksCount == 7)
this.message = "Continue"
else  if(this.clicksCount == 8)
this.message = "Continue "
else  if(this.clicksCount == 9)
this.message = "Continue clic"
else  if(this.clicksCount == 10)
this.message = "Continue clicando..."
else  if(this.clicksCount == 15)
this.message2 = "Tem"
else  if(this.clicksCount == 30)
this.message2 = "Tem certeza"
else  if(this.clicksCount == 45)
this.message2 = "Tem certeza que"
else  if(this.clicksCount == 60)
this.message2 = "Tem certeza que quer"
else  if(this.clicksCount == 75)
this.message2 = "Tem certeza que quer saber?"
else  if(this.clicksCount == 100)
this.message3 = "O "
else  if(this.clicksCount == 120)
this.message3 = "O nome "
else  if(this.clicksCount == 140)
this.message3 = "O nome do "
else  if(this.clicksCount == 160)
this.message3 = "O nome do lugar"
else  if(this.clicksCount == 180)
this.message3 = "O nome do lugar é: "
else  if(this.clicksCount == 250)
this.isError = true
  }
}
