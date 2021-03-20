import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service'; //new


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Para ter o formulario preenchido:
  usuario_preenchido: any = {}

  //new:
  constructor (private usuaService: UsuarioService) {
    usuaService.getUsuario().subscribe(usuario_preenchido => this.usuario_preenchido = usuario_preenchido)
  }


  funcao_onSubmit (formulariezinho){
    console.log(formulariezinho.form.value);
  }
}
