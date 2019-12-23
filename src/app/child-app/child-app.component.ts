import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.scss']
})
export class ChildAppComponent implements OnInit {

  constructor() { }

  @Input() view: TemplateRef<any>;
  ngOnInit() {
    console.log("I am child", this.view);
  }

}
