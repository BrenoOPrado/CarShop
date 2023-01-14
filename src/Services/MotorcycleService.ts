import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  public async create(motorcycle: IMotorcycle) {
    try {
      const model = new MotorcycleModel();
      const newMotorcycle = await model.create(motorcycle);
      return new Motorcycle(newMotorcycle);
    } catch (error) {
      throw new Error('');
    }
  }

  public async getAll() {
    const model = new MotorcycleModel();
    const motorcycles = await model.find();
    const motorcyclesArr = motorcycles.map((motorcycle) =>
      new Motorcycle(motorcycle));
    return motorcyclesArr;
  }

  public async getById(id: string) {
    const model = new MotorcycleModel();
    const motorcycles = await model.findById(id);
    const [motorcyclesArr] = motorcycles.map((motorcycle) => new Motorcycle(motorcycle))
      .filter((motorcycle) => motorcycle.id === id); 
    return motorcyclesArr;
  }

  public async updateById(id: string, body: IMotorcycle) {
    const model = new MotorcycleModel();
    const motorcycles = await model.update(id, body);
    if (motorcycles !== null) {
      const [motorcyclesArr] = [motorcycles].map((motorcycle) => new Motorcycle(motorcycle))
        .filter((motorcycle) => motorcycle.id === id);
      return motorcyclesArr;
    }
  }
}