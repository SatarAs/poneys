import { Component, OnInit } from '@angular/core';
import { PonyService } from 'src/app/services/pony/pony.service';
import {Pony} from "../pony";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  ponies: Pony[] =  [];

  constructor(private ponyService: PonyService) {
    // this.ponies = PONIES;
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p)
  }

  ngOnInit(): void {
  }

}
