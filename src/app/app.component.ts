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
    // usuaService.getUsuario().subscribe(usuario_preenchido => this.usuario_preenchido = usuario_preenchido) 
    //COMENTADO PARA DEIXAR O FORMULARIO VAZIO PARA A GENTE PREENCHER
  }


  funcao_onSubmit (formulariezinho){
    if (formulariezinho.form.status == 'INVALID')
    {
      alert ('O formulario deve ser preenchido corretamente! Dados incorretos!')
    }
    else
    {
      alert ('dados enviados com sucesso!')
    console.log(formulariezinho.form.value);
    }
    
  }
}
