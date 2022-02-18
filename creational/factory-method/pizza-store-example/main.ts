import { PizzaStoreImpl , PizzaFactoryImpl} from './';


(function run() {
    const orderedCheesePizza = new PizzaStoreImpl(new PizzaFactoryImpl("cheese")).orderPizza();
    console.log(orderedCheesePizza);
}()) 



