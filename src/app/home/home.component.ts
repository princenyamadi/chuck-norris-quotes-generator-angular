import { Component, inject } from '@angular/core';
import { ChuckQuote } from '../chuck-quote';
import { ChuckyServiceService } from '../chucky-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    chuckQuote: ChuckQuote | undefined;

    chuckyService : ChuckyServiceService = inject(ChuckyServiceService)

    constructor(){

      this.getQuote();


    }


    getQuote(){
      this.chuckyService.getRandomQuote().then((quote:ChuckQuote) =>{

        console.log(`
          quote: ${quote.value}
        `)
        this.chuckQuote = quote;

       });
    }
}
