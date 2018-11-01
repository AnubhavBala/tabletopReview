import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DnD } from '../models/dnd.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DndService {

  constructor(private http:HttpClient) {}

 //private dndUrl = 'http://localhost:8080/bgttreview';
  private dndUrl = '/api/dnd';

  public getDndSession() {
    console.log("calling get function");
    return this.http.get<DnD>(this.dndUrl+'/stry');
  }


}