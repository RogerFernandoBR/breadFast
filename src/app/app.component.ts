import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breadFast';

  constructor() {}

    ngAfterViewInit() {      
      let deg = 9.8;
      for (let i = 1; i <= 49; i++) {
        let div = document.querySelector(".stamp div:nth-child(" + i + ")") as HTMLElement;
        div.style.transform = 'rotate(' + deg + 'deg)';
        deg = deg + 9.8;
      }
    }
}
