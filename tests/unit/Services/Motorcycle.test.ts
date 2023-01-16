import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes das funcionalidaades de Motorcycle', function () {
  const service = new MotorcycleService();

  const motorName = 'Honda Cb 600f Hornet';

  const onceMotorcycle: IMotorcycle = {
    model: motorName,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  
  afterEach(function () {
    Sinon.restore();
  }); 
  
  it('Cadastro de um carro com SUCESSO com status definido', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: motorName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
  
    Sinon.stub(Model, 'create').resolves(motorcycleOutput);
      
    const result = await service.create(onceMotorcycle);
      
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Cadastro de um carro com SUCESSO sem status definido', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: motorName,
      year: 2005,
      color: 'Yellow',
      status: false,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
  
    Sinon.stub(Model, 'create').resolves(motorcycleOutput);
      
    const result = await service.create(onceMotorcycle);
      
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Listagem de todos os carros com SUCESSO', async function () {
    const motorcycleInput = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
  
    const motorcycleOutput = motorcycleInput.map((item) => new Motorcycle(item));
  
    Sinon.stub(Model, 'find').resolves(motorcycleOutput);
  
    const result = await service.getAll();
      
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Listagem de um carro pelo ID com SUCESSO', async function () {
    const motorcycleOutput = new Motorcycle({
      id: '634852326b35b59438fbea31',
      ...onceMotorcycle,
    });
  
    Sinon.stub(Model, 'find').resolves([motorcycleOutput]);
  
    const result = await service.getById('634852326b35b59438fbea31');
      
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Atualização de um carro pelo ID no formato errado', async function () {
    const motorcycleInput = {
      model: motorName,
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
  
    Sinon.stub(Model, 'update').resolves();
  
    try {
      await service.updateById('WRONG ID', motorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
    }
  });
});
