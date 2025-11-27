import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ← add RouterModule here
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPlants().subscribe((data) => {
      console.log('plants from API = ', data);
      this.plants = Array.isArray(data) ? data : [];
    });
  }
}
