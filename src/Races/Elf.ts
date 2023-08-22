import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity, Elf.createdRacesInstances());
    this._maxLifePoints = 99;
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;