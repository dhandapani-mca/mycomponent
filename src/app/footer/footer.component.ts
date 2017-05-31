import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class ="footer">
    <app-nav></app-nav>
    <p> copyright: &copy -
    </p>
      Footer
    </div>`,
  styles: [
    `
    .footer{ 
      color:red;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
