import { Component } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nghttp';
  customText = 'my custom text';
  constructor(private starWars: StarWarsService){}
  ngOnInit(){
    this.title = 'Angular http demo with observables';
    this.starWars.getPerson().subscribe((data:Object)=>{
      this.customText = JSON.stringify(data);
    },
    error => this.customText = 'connection Error');
  }
}
