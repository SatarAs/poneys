import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from 'src/app/services/race/race.service';
import { PonyService } from 'src/app/services/pony/pony.service';
import { RACES } from '../mock/mock-races';
import {Race} from "../race";
import {Pony} from "../pony";
import {PONIES} from "../mock/mock-ponies";

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  race: Race;
  ponies = PONIES;
  poniesSelect: Array<Pony>;
  listdrop: Array<Pony>;

  constructor(private service: RaceService, private service2: PonyService, private router: Router) {
    this.race = new Race(0, "", new Date())
    this.listdrop = [];
    this.poniesSelect = [];
  }

  ngOnInit(): void {
    this.race = new Race(0,"", new Date())
    this.service2.getAllPonies().subscribe(
      p => {
        console.log("Sub ponies");
        this.poniesSelect = p;
      }
    )
  }

  onSubmit(): void{
    this.race.ponies = this.listdrop;
    console.log(this.race)
    this.service.addRace(this.race);
    this.router.navigate(["/races"]);
  }
}

