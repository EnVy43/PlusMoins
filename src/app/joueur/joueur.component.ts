import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  tableNames: [string,string] = ["",""];
  canSubmit = false;

  //Envoie des données (name Joueur)

  @Output() sendNameToGame = new EventEmitter<Array<string>>();
  
  sendName()
  {
      this.sendNameToGame.emit(this.tableNames);
  }

  // check la validité des pseudo
  checkName()
  {
    if ((this.tableNames[0].length >= 3 && this.tableNames[1].length >= 3) && (this.tableNames[0] != this.tableNames[1]))
    {
      this.canSubmit = true;
    }
    else
    {
      this.canSubmit = false;
    }
  }

  // enregistre les valeur
  setPlayer(joueurId:number,event:any)
  {
    this.tableNames[joueurId] = event.target.value.toUpperCase() ;
    this.checkName();
  }
}
