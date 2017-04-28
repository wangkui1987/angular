

import {hero} from "./hero";
export class superHero extends hero
{
  constructor(name:string="",alterEgo:string="") {
    super(name,alterEgo);
  }

  public say() {
    let words:string="super power!";
    super.say("superHero : ${words}");
  }

  public toSay():void{
    super.say("superHero : ${words}");
  }
}
