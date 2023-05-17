import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Center {
  id:number,
  Name:string,
  City: string,
  Street: string, 
  MaxNumberAppointments: number
}

@Component({
  selector: 'app-want-give',
  templateUrl: './want-give.component.html',
  styleUrls: ['./want-give.component.css']
})

export class WantGiveComponent {
  open:Boolean = false;
  searchValue:any;
  centers: Center[] = [];


  http = inject(HttpClient);


  filterCities(centers: Center[]): Center[] {
    const uniqueCities = new Set();
    let filteredCenters: Center[] = centers.filter((center: Center) => {
      if (uniqueCities.has(center.City)) return false;
      if (center.City.toLowerCase().includes(this.searchValue.toLowerCase())) {
        uniqueCities.add(center.City);
        return true;
      }
      return false
    });
    return filteredCenters;
  }

  updateSearchValue() {
    if(this.searchValue.length > 0) {
      this.http.get<Center>('http://127.0.0.1:8000/api/centers')
      .subscribe((data: any) => {
              this.centers = this.filterCities(data);
            });
      this.open = true;
    }
    else this.open = false;
    
  }
}
