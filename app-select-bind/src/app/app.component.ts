import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public cars = [

    {id: 1, name: 'Chevrolet Cruze'},
    {id: 2,name: 'Volkswagen Polo'},
    {id: 3,name: 'Maruti Swift'},
    {id: 4,name: 'Renault Duster'}

  ];

      private current: number = 2;
     private carSelected: string;

     private Dropdown(id: number): void {
        const NAME = this.cars.find( (item: any) => item.id == id ).name;
        this.carSelected += ` He is driving ${NAME}\n `
    }
}
