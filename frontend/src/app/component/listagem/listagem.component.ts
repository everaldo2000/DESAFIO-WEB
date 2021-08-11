import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { colaborador } from '../formulario/formulario.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  colaboradores: colaborador[] = [];
  displayedColumns = ['id', 'name','email','idade','foto','login','senha','status','departamento','grupos','redes','descricao','arquivo','action']

  constructor(private serviveservive: ServiceService) {}

 ngOnInit(): void{
    this.serviveservive.read().subscribe(colaboradores=>{
      this.colaboradores=colaboradores
    })
  }
}

  
