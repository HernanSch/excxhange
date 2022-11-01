import { ChangeService } from './../../services/change.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() list!:any;

  constructor(private changeService: ChangeService) { }

  ngOnInit(): void {



}
}
