class GameObject {
  constructor(sName,baseCost) {
    this.name = sName;
    this.amount = 0;
    this.baseCost = baseCost;
  }
}


// Init:
Game = {};

Game.version = "v0.0.0ppa";
Game.Objects = {}

Game.code = 0;
// Game.
Game.Objects.Keyboard = new GameObject("Keyboard",10);
