import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tabs = [
    {label: 'СТРАНИЦА 1', link: '/'},
    {label: 'СТРАНИЦА 2', link: '/list'},
  ];
  activeLink = this.router.url

  constructor(private router: Router) {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        this.activeLink = value.url
      }
    })
  }

}
