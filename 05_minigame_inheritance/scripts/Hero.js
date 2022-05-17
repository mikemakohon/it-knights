export class Hero {
  constructor() {
    this.health = 100;
    this.energy = 100;
    this.mana = 100;
    this.attackCost = 20;
    this.defenseCost = 15;
  }
  wait = () => {
    console.log("I wait");
    this.energy += 20;
    this.mana += 20;
    return 0;
  };
  defend = () => {
    console.log("I defend");
  };
  attack = () => {
    console.log("I attack");
  };
  hurt = (points) => {
    this.health = this.health - points;
  };
}
