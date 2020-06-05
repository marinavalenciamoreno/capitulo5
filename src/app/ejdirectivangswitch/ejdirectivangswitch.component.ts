import { Component, OnInit } from '@angular/core';
import { Directive, HostListener, HostBinding } from '@angular/core';
@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  jugadores: any[]= [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo:'Boston Celtics'},
    { nombre: 'Michael Jordan',equipo:'Chicago Bulls'}
  ]

  @HostBinding ('class.itemOrange') private mostrar: boolean = false; 

  @HostListener('mouseover') onOver() { 
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() { 
    this.mostrar = false;
  }




}