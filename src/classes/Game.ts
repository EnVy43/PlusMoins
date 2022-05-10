export default class Game {

    private joueur1:string;
    private joueur2:string;
    private tour = 0;
    private hasard = 0;
    private scoreJ1 = 0;
    private scoreJ2 = 0;
    private round = 0;
    private endGame = false;

    // constructeur
    constructor(j1:string,j2:string) {
        this.joueur1 = j1;
        this.joueur2 = j2;
    }

    // Getter / Setter Name J1
    public get getJoueur1()
    {
        return this.joueur1;
    }

    public set setJoueur1(input:string)
    {
        this.joueur1 = input;
    }
    //-----------------------------------//
    // Getter / Setter Name J2
    public get getJoueur2()
    {
        return this.joueur2;
    }

    public set setJoueur2(input:string)
    {
        this.joueur2 = input;
    }
    //------------------------------------//
    //Getter / Setter Tour 
    public get getTour()
    {
        return this.tour;
    }

    public set setTour(input:number)
    {
        this.tour = input;
    }
    //------------------------------------//
    // Getter / Setter Score J1
    public get getScoreJ1()
    {
        return this.scoreJ1;
    }

    public set setScoreJ1(input:number)
    {
        this.scoreJ1 = input;
    }
    //------------------------------------//
    // Getter / Setter Score J2
    public get getScoreJ2()
    {
        return this.scoreJ2;
    }

    public set setScoreJ2(input:number)
    {
        this.scoreJ2 = input;
    }
    //------------------------------------//
    // Getter / Setter Hasard
    public get getHasard()
    {
        return this.hasard;
    }

    public set setHasard(input:number)
    {
        this.hasard = input;
    }
    //------------------------------------//
    // Getter / Setter Round of game
    public get getRound()
    {
        return this.round;
    }
    
    public set setRound(input:number)
    {
        this.round = input;
    }
    //------------------------------------//
    // Getter / Setter EndGame 
    public get getEndGame()
    {
        return this.endGame;
    }

    public set setEndGame(input:boolean)
    {
        this.endGame = input;
    }
}