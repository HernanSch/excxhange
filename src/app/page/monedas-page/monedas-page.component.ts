import { ChangeService } from './../../shared/services/change.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monedas-page',
  templateUrl: './monedas-page.component.html',
  styleUrls: ['./monedas-page.component.scss']
})
export class MonedasPageComponent implements OnInit {
  @Input() change!:any;

  constructor(private changeService: ChangeService) { }

  ngOnInit(): void {
    this.changeService.getCoins().subscribe((res:any) => {
      this.change = res
      console.log(this.change);

  })
  }

}
