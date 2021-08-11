import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { colaborador } from '../formulario/formulario.model';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

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
  colaboradores!: colaborador;

  constructor(private serviveservice: ServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.serviveservice.readById(id!).subscribe(colaboradores => {
      this.colaboradores = colaboradores;
    });
  }
  updateColaborador(): void {
    this.serviveservice.update(this.colaboradores).subscribe(() => {
      this.serviveservice.showMessage('Colaborador alterado com sucesso!');
      this.router.navigate(['listagem']);

    });
  }

  cancel(): void {
    this.router.navigate(['/listagem']);
  }

 

  
}


