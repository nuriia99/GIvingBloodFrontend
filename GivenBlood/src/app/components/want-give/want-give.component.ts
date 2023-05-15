import { Component, EventEmitter } from '@angular/core';

interface Hospital {
  id:number,
  address:string
}

@Component({
  selector: 'app-want-give',
  templateUrl: './want-give.component.html',
  styleUrls: ['./want-give.component.css']
})

export class WantGiveComponent {
  open:Boolean = false;
  searchValue:any;
  centers: Hospital[] = [
    { id: 12, address: 'Dr. Nice' },
    { id: 13, address: 'Bombasto' },
    { id: 14, address: 'Celeritas' },
    { id: 15, address: 'Magneta' },
    { id: 16, address: 'RubberMan' },
    { id: 17, address: 'Dynama' },
    { id: 18, address: 'Dr. IQ' },
    { id: 19, address: 'Magma' },
    { id: 20, address: 'Tornado' }
  ];


  updateSearchValue() {
    if(this.searchValue.length > 0) this.open = true;
    else this.open = false;
  }
}
