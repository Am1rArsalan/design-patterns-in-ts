import { Pizza } from './Pizza';
import { PizzaFactoryImpl } from './PizzaFactoryImpl';
import { PizzaStore } from './PizzaStore';


export class PizzaStoreImpl implements PizzaStore {
    private factory: PizzaFactoryImpl;

    constructor(factory: PizzaFactoryImpl) {
        this.factory = factory;
    }

    orderPizza():Pizza {
        return this.factory.getPizza();
    }
}


