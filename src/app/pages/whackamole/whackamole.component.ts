import { Component } from '@angular/core';

@Component({
  selector: 'app-whackamole',
  templateUrl: './whackamole.component.html',
  styleUrls: ['./whackamole.component.scss']
})
export class WhackamoleComponent {
  timer: any;
  mole: boolean = false;
  contador: number = 30;
  score: number = 0;
  filasArray: number[] = [1,1,1];
  columnsArray: number[] = [1,1,1];
  imageSrc: string[][] = [];
  topo: number[] = [];

  urlBase: string = "../../../assets/whackamole/bg.jpg";
  urlMole: string = "../../../assets/whackamole/mole.png";

  gameStart(){

    this.defaultBoard();

      this.timer = setInterval(() => {

        let contPrueba = 2;

        let pintarTopo = setInterval(()=>{
          this.defaultBoard();
          contPrueba--;

          this.topo[0] = this.getRandom(3);
          this.topo[1] = this.getRandom(3);
          this.imageSrc[this.topo[0]][this.topo[1]] = this.urlMole;
  
          if(contPrueba<=0){
            clearInterval(pintarTopo);
          }
        },500)

        if(this.contador <= 0){
          clearInterval(this.timer);
        }

        this.contador--;
      }, 1000);
  }

  sumaScore(){
    this.score++;
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
