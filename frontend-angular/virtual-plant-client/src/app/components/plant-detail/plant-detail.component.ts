import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plant: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log('detail id =', id);
  this.apiService.getPlantById(id).subscribe((data) => {
    console.log('detail data =', data);
    this.plant = data;
  });
}

}
