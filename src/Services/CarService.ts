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

  public async getAll() {
    const model = new CarModel();
    const cars = await model.find();
    const carsArr = cars.map((car) =>
      new Car(car));
    return carsArr;
  }

  public async getById(id: string) {
    const model = new CarModel();
    const cars = await model.findById(id);
    const [carsArr] = cars.map((car) => new Car(car))
      .filter((car) => car.id === id); 
    return carsArr;
  }

  public async updateById(id: string, body: ICar) {
    const model = new CarModel();
    const cars = await model.update(id, body);
    if (cars !== null) {
      const [carsArr] = [cars].map((car) => new Car(car))
        .filter((car) => car.id === id);
      return carsArr;
    }
  }
}