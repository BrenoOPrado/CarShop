import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testes das funcionalidaades de Cars', function () {
  const service = new CarService();

  afterEach(function () {
    Sinon.restore();
  }); 

  it('Cadastro de um carro com SUCESSO com status definido', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'create').resolves(carOutput);
    
    const result = await service.create(carInput);
    
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Cadastro de um carro com SUCESSO sem status definido', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2003,
      color: 'Black',
      buyValue: 10.99,
      doorsQty: 2,
      seatsQty: 5,
    };
    const carOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2003,
      color: 'Black',
      status: false,
      buyValue: 10.99,
      doorsQty: 2,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'create').resolves(carOutput);
    
    const result = await service.create(carInput);
    
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Listagem de todos os carros com SUCESSO', async function () {
    const carInput = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    const carOutput = carInput.map((item) => new Car(item));

    Sinon.stub(Model, 'find').resolves(carOutput);

    const result = await service.getAll();
    
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Listagem de um carro pelo ID com SUCESSO', async function () {
    const carOutput = new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'find').resolves([carOutput]);

    const result = await service.getById('634852326b35b59438fbea2f');
    
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Atualização de um carro pelo ID no formato errado', async function () {
    const carInput = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carOutput = new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });

    Sinon.stub(Model, 'update').resolves();

    try {
      const result = await service.updateById('WRONG ID', carInput);
      expect(result).to.be.equal(carOutput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
    }
  });
});
