import { Component } from '@angular/core';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.scss']
})
export class StampComponent {

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
