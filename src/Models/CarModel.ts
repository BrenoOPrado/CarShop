import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractModel from './AbstractModel';

export default class CarModel extends AbstractModel<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: String },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Payment');
  }
    
  public async find(): Promise<ICar[]> {
    return this.model.find();
  }
    
  public async findByKey(key: string): Promise<ICar[]> {
    return this.model.find({ key });
  }
}