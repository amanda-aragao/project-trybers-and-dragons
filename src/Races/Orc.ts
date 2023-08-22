import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity, Orc.createdRacesInstances());
    this._maxLifePoints = 74;
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;