import { Hero } from "./Hero.js";

export class Paladin extends Hero {
  attack = () => {
    console.log("Paladin attacks");
    if (this.energy >= this.attackCost) {
      this.energy = this.energy - this.attackCost;
      const attackPower = Math.floor(Math.random() * 21);
      return attackPower;
    } else {
      this.wait();
      return 0;
    }
  };
  defend = () => {
    console.log("Paladin defends");
    if (this.energy >= this.defenseCost) {
      this.energy = this.energy - this.defenseCost;
      const defensePower = Math.floor(Math.random() * 31);
      return defensePower;
    } else {
      this.wait();
      return 0;
    }
  };
}
