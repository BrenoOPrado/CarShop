import IMotorcycle from '../Interfaces/IMotorcycle';
import Veihicle from './Vehicle';

export default class Car extends Veihicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    motorcycle: IMotorcycle,
  ) {
    super(
      motorcycle.id,
      motorcycle.model,
      motorcycle.year,
      motorcycle.color,
      motorcycle.status, 
      motorcycle.buyValue,
    );    
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}