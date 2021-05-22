import { Component, Input } from '@angular/core';
import { range } from 'lodash';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent{

  public maxStars: number[] = range(1, 6);

  @Input() set max(value: number) {
    this.maxStars = range(1, value + 1);
  }

  public rating: number = 0;
  public ceilRating: number = 0;

  @Input() set rate(value: number) {
    this.rating = value;
    this.ceilRating = Math.round(value);
  }

  constructor() { }
}
