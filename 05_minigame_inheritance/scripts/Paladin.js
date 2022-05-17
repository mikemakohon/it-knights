import { Hero } from "./Hero.js";

export class Paladin extends Hero {
  attack = () => {
    console.log("Paladin attacks");
    if (this.energy >= this.attackCost) {
      this.energy = this.energy - 20;
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
      this.energy = this.energy - 15;
      const defensePower = Math.floor(Math.random() * 31);
      return defensePower;
    } else {
      this.wait();
      return 0;
    }
  };
}
