import { Pizza } from './Pizza';

export interface PizzaFactory {
    getPizza : () => Pizza 
}

