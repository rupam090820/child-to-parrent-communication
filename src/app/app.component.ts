import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-to-parrent-communication';
  public message:any="";
  send(n1:any){
    
    console.log(n1.value);
   this.message=n1.value;
  }

  
}
