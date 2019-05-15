import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public metros = 0;
  public gonzalos = 0;

  public metrosGonzalos() {
    console.log('M a Gon');
    this.gonzalos = this.metros / 1.75;
  }

  public gonzalosMetros() {
    console.log('Gon a M');
    this.metros = this.gonzalos * 1.75;
  }
}
