import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RACES } from '../mock/mock-races';
import { Race } from '../race';
import { PONIES } from '../mock/mock-ponies';

@Component({
  selector: 'app-add-race-reactive',
  templateUrl: './add-race-reactive.component.html',
  styleUrls: ['./add-race-reactive.component.css']
})
export class AddRaceReactiveComponent implements OnInit {
  poniesSelect: Array<Boolean> = [];
  ponies = PONIES;

  raceForm = this.fb.group({
    location: ['',Validators.required],
    date: ['',Validators.required],
    ponies: [this.fb.array(this.poniesSelect),Validators.required]
  })

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {

  }

  getPonies(){
    return this.raceForm.get("ponies") as FormArray
  }

  onSubmit(): void {
    let res: Race;
    res = this.raceForm.value;
    for( let i in this.poniesSelect){
      if(this.poniesSelect[i]){
        res.ponies.push(this.ponies[i]);
      }
    }
    RACES.push(res);
    this.router.navigate([''])

  }

}
