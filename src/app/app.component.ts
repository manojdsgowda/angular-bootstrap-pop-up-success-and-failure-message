import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showMsg: boolean =false;
  Test="none";
  
  onSubmit() {
        this.showMsg= true;
        if(!this.showMsg)
        {
          this.Test="block";
        }
      };
  }

