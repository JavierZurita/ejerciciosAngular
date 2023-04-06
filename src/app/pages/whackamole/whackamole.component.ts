import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whackamole',
  templateUrl: './whackamole.component.html',
  styleUrls: ['./whackamole.component.scss']
})
export class WhackamoleComponent implements OnInit{
  contador: number = 30;
  score: number = 0;
  filasArray: number[] = [1,1,1,1];
  columnsArray: number[] = [1,1,1,1];
  imageSrc: string[][] = [];
  topo: number[] = [];

  urlBase: string = "../../../assets/whackamole/bg.jpg";
  urlMole: string = "../../../assets/whackamole/mole.png";
  
  constructor(){}

  ngOnInit(): void {
    this.defaultBoard();
  }

  gameStart(){
    this.contador = 30;
    this.score = 0;
    this.defaultBoard();

    let timer: any;
      timer = setInterval(() => {

        let contPrueba = 2;

        let pintarTopo = setInterval(()=>{
          this.defaultBoard();

          contPrueba--;

          this.topo[0] = this.getRandom(this.filasArray.length);
          this.topo[1] = this.getRandom(this.columnsArray.length);
          this.imageSrc[this.topo[0]][this.topo[1]] = this.urlMole;
  
          if(contPrueba<=0){
            clearInterval(pintarTopo);
          }
        },500)

        if(this.contador <= 1){
          clearInterval(timer);
        }

        this.contador--;
      }, 1000);
  }

  sumaScore(i: number, j: number){
    if(this.imageSrc[i][j] === this.urlMole){
      this.imageSrc[i][j] = this.urlBase;
      this.score++;
    }
  }

  defaultBoard(){
    for(let i=0; i<this.filasArray.length; i++) {
      this.imageSrc[i] = [];
      for(let j=0; j<this.columnsArray.length; j++) {
        this.imageSrc[i][j] = this.urlBase;
      }
    }
  }

  getRandom(num: number){
    return Math.floor(Math.random()*num);
  }
}
