import ICar from '../Interfaces/ICar';
import Veihicle from './Vehicle';

export default class Car extends Veihicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    car: ICar,
  ) {
    super(
      car.id,
      car.model,
      car.year,
      car.color,
      car.status, 
      car.buyValue,
    );    
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}