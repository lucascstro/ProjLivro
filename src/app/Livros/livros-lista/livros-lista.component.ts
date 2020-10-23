import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {
  @Input() livros = [];
  /*livros = [
   ) {
      id:'1',
      titulo: 'A Grande Arte do Nada',
      numero: '11223344',
      Author: 'jose@email.com',
      },
      {
        id:'2',
        titulo: 'Vida que Segue',
        numero: '11223345',
        Author: 'Lucas@email.com',
      },
      {
        id:'3',
        titulo: 'Luz da Luta',
        numero: '11223345',
        Author: 'Castro@email.com',
      },
      {
        id:'4',
        titulo: 'O ltimo Livro',
        numero: '11223346',
        Author: 'Dhanilo@email.com',
      }
    ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
