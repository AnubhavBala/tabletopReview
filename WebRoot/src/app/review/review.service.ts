import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Review } from '../models/review.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReviewService {

  constructor(private http:HttpClient) {}

 //private reviewUrl = 'http://localhost:8080/bgttreview';
  private reviewUrl = '/api';

  public getReviews() {
    console.log("calling get function");
    return this.http.get<Review>(this.reviewUrl+'/rev');
  }


}