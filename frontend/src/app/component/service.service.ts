import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar';
import { Observable,EMPTY } from 'rxjs';
import { colaborador } from './formulario/formulario.model';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

baseUrl = "http://localhost:3035/colaborador"
  constructor(private snackbar: MatSnackBar,
    private http: HttpClient) { }
    showMessage(msg: string, isError: boolean = false): void {
  this.snackbar.open(msg,'x',{
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition:"top"
  })
}
//funçao de observação de evento
create(colaborador: colaborador): Observable<colaborador>{
  return this.http.post<colaborador>(this.baseUrl,colaborador).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

read():Observable<colaborador[]>{
  return this.http.get<colaborador[]>(this.baseUrl).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}
readById(id:string):Observable<colaborador>{
  const url= `${this.baseUrl}/${id}`
  return this.http.get<colaborador>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}
update(colaboradores: colaborador):Observable<colaborador>{
  const url=`${this.baseUrl}/${colaboradores.id}`
  return this.http.put<colaborador>(url,colaboradores).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}
delete(id:number):Observable<colaborador>{
  const url= `${this.baseUrl}/${id}`;
      return this.http.delete<colaborador>(url).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    errorHandler(e: any): Observable<any> {
      this.showMessage("Ocorreu um erro!", true);
      return EMPTY;
    }
  }
