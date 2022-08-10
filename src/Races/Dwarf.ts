import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _intancesCount = 0;

  constructor(name:string, dexteriry:number) {
    super(name, dexteriry);
    this._maxLifePoints = 80;
    Dwarf._intancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._intancesCount;
  }
}
