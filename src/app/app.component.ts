import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoLivros';
  livro=[];
  onLivroAdicionado(livro){
    this.livro=[...this.livro,livro] 
  }
}
