/**
 * Created by Vladimir on 2017/3/30.
 */
export class hero 
{
  public name:string;
  public alterEgo:string;
  protected sayData:string="hello!";

  constructor(name:string="",alterEgo:string="") {
    this.alterEgo=alterEgo;
    this.name=name;
  }

  protected say(words:string) {
    console.log(words);
  }

}

