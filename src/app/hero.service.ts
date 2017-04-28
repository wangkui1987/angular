/**
 * Created by Vladimir on 2017/3/31.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService
{
  constructor()
  {
    this.words="hello world!";
  }
  private words:string;
  public say():void
  {
    let words:string=this.words;
    console.log("hero: ${words}");
  }

}
