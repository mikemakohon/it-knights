import { Hero } from "./Hero.js";

export class Magician extends Hero {
  attack = () => {
    console.log("Magician attacks");
    if (this.mana >= this.attackCost) {
      this.mana = this.mana - 20;
      const attackPower = Math.floor(Math.random() * 21);
      return attackPower;
    } else {
      this.wait();
      return 0;
    }
  };
  defend = () => {
    console.log("Magician defends");
    if (this.mana >= this.defenseCost) {
      this.mana = this.mana - 15;
      const defensePower = Math.floor(Math.random() * 31);
      return defensePower;
    } else {
      this.wait();
      return 0;
    }
  };
}
