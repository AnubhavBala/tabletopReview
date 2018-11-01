import { DnD } from '../models/dnd.model';
import { DndService } from './dnd.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {
private dnd: DnD;
  constructor(private router: Router, private dndService: DndService) { }

  ngOnInit() {
    this.dndService.getDndSession().subscribe(dnd => {this.dnd = dnd; });
  }

}
