import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {}

  static createdArchetypesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType; 

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number { 
    return this._cost;
  } 
}
export default Archetype;