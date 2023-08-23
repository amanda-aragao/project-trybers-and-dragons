import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._count += 1;
  }

  static createdRacesInstances(): number {
    return Orc._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;