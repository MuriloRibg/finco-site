import { Component, OnInit } from '@angular/core';
import { ProjetoResponse } from 'src/app/api/projeto/model/response/projeto.response';
import { ProjetoService } from 'src/app/api/projeto/service/projeto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  response!: ProjetoResponse[];
  

  constructor(private readonly projetoService: ProjetoService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.response = this.projetoService.listar();
  }
}
