import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //new

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private meu_httpzao: HttpClient) { } //new

  //preciso um novo método para trazer os dados:
  getUsuario (){
    return this.meu_httpzao.get ('https://jsonplaceholder.typicode.com/users/6');
  }

}
