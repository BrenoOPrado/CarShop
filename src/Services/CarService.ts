import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  public async create(car: ICar) {
    try {
      const model = new CarModel();
      const newCar = await model.create(car);
      return new Car(newCar);
    } catch (error) {
      throw new Error('');
    }
  }
}