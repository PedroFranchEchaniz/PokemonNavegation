import { Component } from '@angular/core';
import { Berry } from 'src/app/model/berry-list.interface';
import { BerriesService } from 'src/app/service/berries.service';

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.component.html',
  styleUrls: ['./berries-list.component.css']
})
export class BerriesListComponent {

  berryList: Berry[] = [];

  constructor(private berryService: BerriesService) {}

  ngOnInit(): void{
    this.berryService.getBerryList().subscribe(resp =>{
      this.berryList = resp.results;
    })
  }

}
