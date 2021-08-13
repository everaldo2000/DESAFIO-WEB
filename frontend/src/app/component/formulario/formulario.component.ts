import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { colaborador } from './formulario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})






export class FormularioComponent implements OnInit {
  createForm! :FormGroup;
 



  public options = [
    { "id": 1, "depar": "FINANCEIRO" },
    { "id": 2, "depar": "ADMINISTRATIVO" },
    { "id": 3, "depar": "DIREÇÃO" },
    { "id": 4, "depar": "OPERACIONAL" },
    { "id": 5, "depar": "INFRAESTRUTURA" },
    { "id": 6, "depar": "DESENVOLVIMENTO" }

  ]
  public departamento = this.options[1].id;

  public options2 = [
    { "id": 1, "grupo": "CLT" },
    { "id": 2, "grupo": "PJ" },
    { "id": 3, "grupo": "FREELANCER" },
    { "id": 4, "grupo": "PARCEIROS" },


  ]
  public grupos = this.options2[1].id;


  public options3 = [
    { "id": 1, "status": "Ativo" },
    { "id": 2, "status": "Inativo" },
  ]
  public status = this.options3[1].id;
  colaborador: colaborador = {
    name: "",
    email: "",
    idade: 0,
    foto: "",
    login: "",
    senha: "",
    departamento: "",
    status: "",
    grupos: "",
    descricao: "",
    redes: "",
    arquivo: ""

  }
  constructor(private serviveService: ServiceService,
    private router: Router) { 
    }


  ngOnInit(): void{


}

  createColaborador(): void {
    this.serviveService.create(this.colaborador).subscribe(() => {
      this.serviveService.showMessage('cadastro adicionado!')
      this.router.navigate(['/add'])
    })
  }
  cancel(): void {
    this.router.navigate(['/add'])
  }
}







