import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-tracks',
  templateUrl: './card-tracks.component.html',
  styleUrls: ['./card-tracks.component.css']
})
export class CardTracksComponent {
  @Input() items: any = [];
  constructor(){
  }
}
