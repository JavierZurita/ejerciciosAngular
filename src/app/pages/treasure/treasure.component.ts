import { Component } from '@angular/core';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss']
})
export class TreasureComponent {
  filas: number = 2;
  columns: number = 2;
  tabla: boolean = false;
  imageSrc: string[][] = [];
  filasArray: any[] = [];
  columnasArray: any[] = [];
  Treasure: any[] = [];

  constructor(){}

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columns});
    this.imageSrc = [];
    this.Treasure [0] = this.getRandom(this.filas);
    this.Treasure [1]  = this.getRandom(this.columns);

    for(let i=0; i<this.filas; i++) {
      this.imageSrc[i] = [];
      for(let j=0; j<this.columns; j++) {
        this.imageSrc[i][j] = "../../../assets/treasure/x.png";
      }
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }

  voltearImagen(fila: number, columna: number) {
    
    if (this.imageSrc[fila][columna] === "../../../assets/treasure/skull.png") {
      this.imageSrc[fila][columna] = "../../../assets/treasure/x.png";
    } else {
      this.imageSrc[fila][columna] = "../../../assets/treasure/skull.png";
    } 

    if (this.Treasure[0] == fila && this.Treasure[1] == columna){
      this.imageSrc[fila][columna] = "../../../assets/treasure/chest.png";
      setTimeout(() => {
      alert ("You Win! Now you are rich");
      }, 50);
    }
  }

}
