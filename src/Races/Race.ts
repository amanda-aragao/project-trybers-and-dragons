abstract class Race {
  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
    protected createdRacesInstances: number = 0,

  ) {}

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number; 

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}
export default Race;