import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css'],
})
export class MotosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public addFavorite() {
    alert('Añadido a Favoritos');
  }

  public addList() {
    alert('Añadido a la lista');
  }

  public buy(price: any, discount: any) {
    // ?MODAL
    var modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
      // ?WINDOW
      window.onclick = function (event) {
        if (event.target == modal) {
          if (modal != null) modal.style.display = 'none';
        }
      };
    }
  }
  public closeModal() {
    var modal = document.getElementById('myModal');
    if (modal != null) modal.style.display = 'none';
  }

  public btnStore() {
    alert('Compra Realizada con éxito');
  }
}
