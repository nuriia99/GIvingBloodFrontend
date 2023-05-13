import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cilindre',
  templateUrl: './cilindre.component.html',
  styleUrls: ['./cilindre.component.css']
})
export class CilindreComponent {
  @Input() peopleDay!:number;
  @Input() day: string = 'HOY';
  heightCilindre:string = '0px';
  ngOnInit(){
    setInterval(() => {
      this.heightCilindre = Math.floor(225/1100 * this.peopleDay) + 'px';
    },500)
    
  }
}
