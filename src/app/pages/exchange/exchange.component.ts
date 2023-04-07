import { ExchangeService } from './../../shared/services/exchange.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit{
  coins: number = 1;
  valueCurrency?: number;
  exchangesArray: any = [];
  ratesArray: any = [];
  currencySel: string = "EUR";

  constructor(private exchangeService :ExchangeService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const param = params['curr'];
      console.log(param);
        this.exchangesArray = this.exchangeService.getDataExc(param).subscribe((res: any) => {
          this.exchangesArray = res; 
        })
    })
  }

  updateCurrency(exchangeValue: any){
    return (this.valueCurrency = exchangeValue * this.coins).toFixed(3);
  }

  updateData(currency: string){
    this.ngOnInit();
  }
}