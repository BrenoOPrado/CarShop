import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  private invalidId = 'Invalid mongo id';
  private notFound = 'Car not found';

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  }

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ message: this.invalidId });
    }
    const car = await this.service.getById(id);
    if (!car) return this.res.status(404).json({ message: this.notFound });
    return this.res.status(200).json(car);
  }

  public async updateById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ message: this.invalidId });
    }
    const car = await this.service.getById(id);
    if (!car) return this.res.status(404).json({ message: this.notFound });
    try {
      const result = await this.service.updateById(id, this.req.body);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422)
        .json({ message: this.invalidId });
    }
    const car = await this.service.getById(id);
    if (!car) return this.res.status(404).json({ message: this.notFound });
    await this.service.deleteById(id);
    return this.res.status(204).json();
  }
}