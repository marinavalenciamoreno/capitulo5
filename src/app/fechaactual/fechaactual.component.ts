import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
    /*
  En este caso al ser el código html de la vista del componente pequeño,
  se podría incluir el siguiente código y eliminar el archivo html del 
  componente. Si optamos por esta opción se sustituiría el templateUrl por lo siguiente:

  template: `
 <p> Sevilla, {{ hoy | date:'d/M/y H:m'}}</p>
 `,*/
  styleUrls: ['./fechaactual.component.css']
})
export class FechaactualComponent implements OnInit {
  
  hoy: any = new Date(); 
  constructor() { }

  ngOnInit() {
  }

}