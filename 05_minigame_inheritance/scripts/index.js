"use strict";

import { Hero } from "./Hero.js";
import { Paladin } from "./Paladin.js";
import { Magician } from "./Magician.js";

const triggerButton = document.querySelector(".trigger");
const resultOutput = document.querySelector(".result");

const paladinHealth = document.querySelector(".paladin-health");
const paladinEnergy = document.querySelector(".paladin-energy");

const magicianHealth = document.querySelector(".magician-health");
const magicianMana = document.querySelector(".magician-mana");

const paladin = new Paladin();
const magician = new Magician();
const updateStats = () => {
  paladinHealth.innerText = `${paladin.health}`;
  paladinEnergy.innerText = `${paladin.energy}`;
  magicianHealth.innerText = `${magician.health}`;
  magicianMana.innerText = `${magician.mana}`;
};
updateStats();
const checkWinner = (player1, player2) => {
  if (player1 <= 0 && player2 > 0) {
    resultOutput.innerText = "player2 wins";
    triggerButton.classList.add("d-none");
    return;
  }
  if (player2 <= 0 && player1 > 0) {
    resultOutput.innerText = "player1 wins";
    triggerButton.classList.add("d-none");
    return;
  }
  if (player1 <= 0 && player2 <= 0) {
    resultOutput.innerText = "Draw";
    triggerButton.classList.add("d-none");
    return;
  }
};

// console.log(paladin);
// console.log(magician);

const roundHandler = () => {
  const paladinAction = document.querySelector(
    "input[name=hero1-controls]:checked"
  ).value;
  const magicianAction = document.querySelector(
    "input[name=hero2-controls]:checked"
  ).value;
  const paladinTurnPower = paladin[paladinAction]();
  const magicianTurnPower = magician[magicianAction]();
  paladinTurnPower >= magicianTurnPower
    ? magician.hurt(paladinTurnPower)
    : paladin.hurt(magicianTurnPower);
  updateStats();
  checkWinner(paladin.health, magician.health);
};

triggerButton.addEventListener("click", roundHandler);

// ? Bind task
// const heroAttackButton = document.querySelector(".hero-attack");
// const hero = new Hero();
// heroAttackButton.addEventListener("click", hero.attack.bind(hero));
