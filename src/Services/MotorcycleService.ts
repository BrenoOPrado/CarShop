import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  private model = new MotorcycleModel();

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }

  public async getAll() {
    const motorcycles = await this.model.find();
    const motorcyclesArr = motorcycles.map((motorcycle) =>
      new Motorcycle(motorcycle));
    return motorcyclesArr;
  }

  public async getById(id: string) {
    const motorcycles = await this.model.findById(id);
    const [motorcyclesArr] = motorcycles.map((motorcycle) => new Motorcycle(motorcycle))
      .filter((motorcycle) => motorcycle.id === id); 
    return motorcyclesArr;
  }

  public async updateById(id: string, body: IMotorcycle) {
    const motorcycles = await this.model.update(id, body);
    if (motorcycles !== null) {
      const [motorcyclesArr] = [motorcycles].map((motorcycle) => new Motorcycle(motorcycle))
        .filter((motorcycle) => motorcycle.id === id);
      return motorcyclesArr;
    }
  }

  public async deleteById(id: string) {
    await this.model.deleteById(id);
  }
}