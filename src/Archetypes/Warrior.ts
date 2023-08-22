import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _count = 0;
  constructor(name: string) {
    super(name);
    Warrior._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;