import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public isTrue:string;
  constructor() {
    this.isTrue="true";
    console.log("Lc");
  }

  ngOnInit() {
    console.log("List");
  }

}
