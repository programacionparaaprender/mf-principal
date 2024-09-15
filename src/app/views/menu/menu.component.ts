import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  standalone:true,
  selector: 'app-menu',
  imports:[RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(location: Location, private router: Router) {
  }


  ngOnInit() {
  }

}
