import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Review } from '../models/review.model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
private review: Review;
  constructor(private router: Router, private reviewService : ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(review => {this.review = review; });
  }

}
