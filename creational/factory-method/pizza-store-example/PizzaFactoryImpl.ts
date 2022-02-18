import { Pizza , PizzaType} from './Pizza';
import { CalmPizza } from './CalmPizza';
import { PepperoniPizza } from './PepperoniPizza';
import { CheesePizza } from './CheesePizza';
import { PizzaFactory } from './PizzaFactory';

export class PizzaFactoryImpl implements PizzaFactory {
    private pizza: Pizza | undefined ;

    constructor(type: PizzaType) {
        if (type === "calm") {
            this.pizza = new CalmPizza();
        } else if (type === "peperoni") {
            this.pizza = new PepperoniPizza();
        } else if (type === "cheese") {
            this.pizza  = new CheesePizza();
        }
    }

    getPizza(): Pizza {
        return this.pizza as Pizza ;
    }
}

