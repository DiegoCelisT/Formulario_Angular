import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Para ter formulario preenchido:
  usuario_preenchido: any = {
    email: 'unpocoloco@guitarra.co',
    senha: 'luffy'
  }
  
  title = 'formulario'; //Pode apagar

  funcao_onSubmit (formulariezinho){
    console.log(formulariezinho.form.value);
  }
}
