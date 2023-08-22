import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _count = 0;
  constructor(name: string) {
    super(name);
    Necromancer._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;