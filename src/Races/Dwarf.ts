import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity, Dwarf.createdRacesInstances());
    this._maxLifePoints = 80;
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;