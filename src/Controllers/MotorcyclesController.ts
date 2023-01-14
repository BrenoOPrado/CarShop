import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const Motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(Motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    const Motorcycles = await this.service.getAll();
    return this.res.status(200).json(Motorcycles);
  }

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ message: 'Invalid mongo id' });
    }
    const Motorcycle = await this.service.getById(id);
    if (!Motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
    return this.res.status(200).json(Motorcycle);
  }

  public async updateById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ message: 'Invalid mongo id' });
    }
    const Motorcycle = await this.service.getById(id);
    if (!Motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
    try {
      const result = await this.service.updateById(id, this.req.body);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}