import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-share-links',
  templateUrl: './share-links.component.html',
  styleUrls: ['./share-links.component.scss']
})
export class ShareLinksComponent implements OnInit {

  @Input() product: Product | undefined;
  url = '';



  constructor() { }

  ngOnInit(): void {
  }

}
