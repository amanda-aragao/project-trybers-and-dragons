import Fighter from '../Fighter';
import Energy from '../Energy';
import Archetype, { Mage } from '../Archetypes';
import Race, { Elf } from '../Races';
import getRandomInt from '../utils';

class Character implements Fighter {
  private _race: Race; 
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get maxLifePoints(): number { return this._maxLifePoints; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  attack(enemy: Fighter): void {
    // const damage = this.strength - enemy.defense;
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    } 
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints; // a vida do personagem não pode ser maior que o limte de vida da sua raça.
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength - 2);
    this._energy.amount -= 5;
  }
}

export default Character;
