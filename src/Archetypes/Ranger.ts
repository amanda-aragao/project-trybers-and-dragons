import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _count = 0;
  constructor(name: string) {
    super(name);
    Ranger._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;