import { Component, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'ng-template-practice';

  @ViewChild("demoTemplate", {static: false}) demoTemplate: TemplateRef<any>;

  ngAfterViewInit(){
    console.log(this.demoTemplate);
  }

}
