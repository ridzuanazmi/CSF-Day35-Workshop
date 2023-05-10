import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameResponse } from './model/Boardgame';
import { BoardgameService } from './services/boardgame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  gameForm!: FormGroup
  response$!: Promise<String[]>
  gameNames: string[] = []

  constructor(private fb: FormBuilder, private bgSrvc: BoardgameService) { }

  ngOnInit(): void {
    this.gameForm = this.createForm();
  }

  testForm() {
    console.log(">>> limit: ", this.gameForm.value['limit'])
  }
  // TODO: add pagination
  process() {
    const limit = this.gameForm.value['limit']
    const response$ = this.bgSrvc.getGames(limit)
    response$.then((names) => {
      console.log(names); // an array of game names
      this.gameNames = names
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      limit: this.fb.control<number>(0, [ Validators.required ])
    })
  }
}
