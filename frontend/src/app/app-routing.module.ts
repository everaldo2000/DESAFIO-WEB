import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/Views/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { AddComponent } from './component/Views/add/add.component';
import { ListagemComponent } from './component/listagem/listagem.component';
import { AtualizarComponent } from './component/atualizar/atualizar.component';
import { DeleteComponent } from './component/delete/delete.component';




const routes: Routes = [{

path:"",
component: HomeComponent
},
{
  path:"formulario",
  component: FormularioComponent
},
{
  path:"listagem",
  component: ListagemComponent
},
{
  path:"add",
  component: AddComponent
},
{
  path:"component/atualizar/:id",

  component: AtualizarComponent
},
{
  path:"component/delete/:id",

  component: DeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
