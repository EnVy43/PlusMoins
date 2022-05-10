import { Injectable, Input } from '@angular/core';
import Game from 'src/classes/Game';

@Injectable({
  providedIn: 'root'
})
export class CheckAllService {

  constructor() { }

  //Check la game 
  checkGame(numberChoose:string,game:Game)
  {
    console.log(game.getHasard);
        if(numberChoose.length == 0)
        {
          alert("SAISIR UN NOMBRE SVP !");
        }
        else
        {
          this.checkNumber(Number(numberChoose),game);

          if(game.getTour == 10)
          {
            this.newManche(game,false);
          }
          else{
            game.setTour = game.getTour + 1;
          }
        }
  }

// Nouvelle manche 
  newManche(game:Game,afterWin:boolean)
  {

    if (game.getRound + 1 == 6) {
      this.checkWiner(game);
      game.setEndGame = true;
    }
    else{

      if (afterWin == true) {
        game.setTour = 0;
      }
      else
      {
        game.setTour = 1;
      }

      game.setHasard = Math.floor(Math.random() * (1000-0+1))+0;
      game.setRound = game.getRound + 1;
      alert("DEBUT DE LA MANCHE : "+game.getRound);
    }    
  }

// Verif qui gagne 
  checkWiner(game:Game)
  {
    if(game.getScoreJ1 < game.getScoreJ2)
    {
      alert("LE CHAMPION EST : "+game.getJoueur2);
    }
    else if(game.getScoreJ1 > game.getScoreJ2)
    {
      alert("LE CHAMPION EST : "+game.getJoueur1);
    }
    else 
    {
      alert("ÉGALITÉ");
    }
  }

//check si le nombre est plus grand / plus petit / ou trouvé 
  checkNumber(numberChoose:number,game:Game)
  {
    
    if((numberChoose == game.getHasard) && (game.getTour % 2 == 0)) {
        alert(game.getJoueur2+" A TROUVÉ "+game.getHasard+" ET GAGNE LA MANCHE : "+game.getRound);
        game.setScoreJ2 = game.getScoreJ2 + 1;
        this.newManche(game,true);
    }
    else if((numberChoose == game.getHasard) && (game.getTour % 2 != 0))
    {
        alert(game.getJoueur1+" A TROUVÉ "+game.getHasard+" ET GAGNE LA MANCHE : "+game.getRound);
        game.setScoreJ1= game.getScoreJ1 + 1;
        this.newManche(game,true);
    }
    else{ 
    
      if(numberChoose > game.getHasard) {
        alert("TROP GRAND");
      }
      else
      {
        alert("TROP PETIT");
      }
    }
  }
}

