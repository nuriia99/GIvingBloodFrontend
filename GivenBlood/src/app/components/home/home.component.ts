import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'GivenBlood';
  lenguageButton = 'es';
  peopleDay1 = 700;
  peopleDay2 = 200;
  peopleDay3 = 400;

  changeLenguage(leng: string) {
      this.lenguageButton = leng;
  }


 
  
  // http = inject(HttpClient);

  // changeTitle() {
  //   this.title = "Nuria";
  // }

  // ngOnInit() { // useEffect
  //   this.http.get<Product>('https://api.escuelajs.co/api/v1/products')
  //     .subscribe((data: any) => {
  //       this.products = data;
  //     });
  // }

}
