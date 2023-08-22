import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static count = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Halfling;