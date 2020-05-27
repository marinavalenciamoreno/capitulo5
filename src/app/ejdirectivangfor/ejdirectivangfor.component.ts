import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivang-for.component.html',
  styleUrls: ['./ejdirectivang-for.component.css']
})
export class EjdirectivangForComponent implements OnInit {

  cursos: string[];

  constructor() { 
    this.cursos=['Angular','HTML','CSS'];
  }

  ngOnInit() {
  }

}