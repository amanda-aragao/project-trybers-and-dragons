import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _count = 0;
  constructor(name: string) {
    super(name);
    Mage._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;