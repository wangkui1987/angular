import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit,OnDestroy {

  public contact_id:string;
  private sub:any;
  constructor(private _actRoute:ActivatedRoute) {
    console.log("Hc");
  }

  ngOnInit() {
    this.sub=this._actRoute.params.subscribe(params=> {
      this.contact_id=params['id'];
      console.log("Hero"+this._actRoute.snapshot.params['id']);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  public getId():number {
    return parseInt(this.contact_id)+1;
  }

}
