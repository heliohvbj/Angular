import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //template: `<h1 class='test'>Aprendendo template inline</h1>
    //<p>template</p>`,
    styleUrls: ['./topo.component.css'],
    //styles: [`.test{ color: red }`]
})
export class TopoComponent {
    public titulo: string = 'Aprendendo inglês'
}