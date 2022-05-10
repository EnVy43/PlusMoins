import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import Game from 'src/classes/Game';
import { CheckAllService } from '../check-all.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private router:Router,private checkAll:CheckAllService) { }

  ngOnInit(): void {
  }

  startGame = false;
  game!: Game;
  reset="";
  lastTour = false;

// creation d'un objet game
nameJoueur(names:Array<string>)
{
  this.game = new Game(names[0],names[1]);
  this.startGame = true;
  this.game.setTour = 1;
  this.game.setHasard = Math.floor(Math.random() * (1000-0+1))+0;
  this.game.setRound = 1;
  
}

// envoie du numero saisi
sendNumber(valueNumberChoose:string)
{
this.checkAll.checkGame(valueNumberChoose,this.game);
this.reset = "";

  if(this.game.getTour == 10)
  {
    this.lastTour = true;
  }
  else{
    this.lastTour = false;
  }
}

//Bouton en fin de Game
restart()
{
  this.game.setEndGame = false;
  this.startGame = true;
  this.game.setScoreJ1 = 0;
  this.game.setScoreJ2 = 0;
  this.game.setTour = 1;
  this.game.setHasard = Math.floor(Math.random() * (1000-0+1))+0;
  this.game.setRound = 1;
}
//
changeName()
{
  this.router.navigate([""]).then(()=>this.router.navigate(["game"]));
}

}
