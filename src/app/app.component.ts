import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuario_preenchido: any = {}

  constructor (private usuaService: UsuarioService) {
    // usuaService.getUsuario().subscribe(usuario_preenchido => this.usuario_preenchido = usuario_preenchido) 
    //COMENTADO PARA DEIXAR O FORMULARIO VAZIO PARA A GENTE PREENCHER
  }


  //AGORA O SUBMIT VAI SIMULAR QUE ENVIA OS DADOS PARA A API:
  funcao_onSubmit (formulariezinho){
    if (formulariezinho.form.status == 'INVALID')
    {
      alert ('O formulario deve ser preenchido corretamente! Dados incorretos!');
    }
    else{//new
      this.usuaService.postUsuario (formulariezinho.form.value)
      .subscribe (resposta => {
        console.log (resposta);
        alert ('Dados enviados com sucesso!')
      })
    }  
  }
}
