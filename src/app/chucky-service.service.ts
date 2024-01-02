import { Injectable } from '@angular/core';
import { ChuckQuote } from './chuck-quote';

@Injectable({
  providedIn: 'root'
})
export class ChuckyServiceService {

  randomQuoteUrl = 'https://api.chucknorris.io/jokes/random';


  constructor() { }

  async getRandomQuote(): Promise<ChuckQuote | undefined> {


    const data = await fetch(this.randomQuoteUrl);

    return await data.json() ?? {};
  }
}
