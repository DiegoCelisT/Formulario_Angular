import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private meu_httpzao: HttpClient) { }

  //preciso um novo método para trazer os dados:
  getUsuario (){
    return this.meu_httpzao.get ('https://jsonplaceholder.typicode.com/users/6');
  }

  //NEW
  //Método para enviar os dados do formulário:
  postUsuario (dados){
    return this.meu_httpzao.post ('https://jsonplaceholder.typicode.com/users/', dados);
  }

}
