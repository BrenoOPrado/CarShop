import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model = new CarModel();

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return new Car(newCar);
  }

  public async getAll() {
    const cars = await this.model.find();
    const carsArr = cars.map((car) =>
      new Car(car));
    return carsArr;
  }

  public async getById(id: string) {
    const cars = await this.model.findById(id);
    const [carsArr] = cars.map((car) => new Car(car))
      .filter((car) => car.id === id); 
    return carsArr;
  }

  public async updateById(id: string, body: ICar) {
    const cars = await this.model.update(id, body);
    if (cars !== null) {
      return new Car(cars);
    }
  }

  public async deleteById(id: string) {
    await this.model.deleteById(id);
  }
}