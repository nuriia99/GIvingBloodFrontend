import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cilindre',
  templateUrl: './cilindre.component.html',
  styleUrls: ['./cilindre.component.css']
})
export class CilindreComponent {
  @Input() peopleDay!:number;
  heightCilindre:string = '300px';
  ngOnInit(){
    this.heightCilindre = Math.floor(225/1100 * this.peopleDay) + 'px';
  }
}
