import { Component, Input } from '@angular/core';
import { Berry } from 'src/app/model/berry-list.interface';

@Component({
  selector: 'app-berries-detail',
  templateUrl: './berries-detail.component.html',
  styleUrls: ['./berries-detail.component.css']
})
export class BerriesDetailComponent {

  @Input() berry!: Berry;
  
}
