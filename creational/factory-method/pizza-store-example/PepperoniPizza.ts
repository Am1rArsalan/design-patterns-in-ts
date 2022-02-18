import { Pizza } from './Pizza';

export class PepperoniPizza implements Pizza {
    constructor() {
        this.bake();
        this.cut();
        this.prepare();
        this.box();
    }

    bake() {
        // bake pepperoni pizza 
    };
    prepare() {
        // prepare pepperoni pizza 
    };

    cut() {
        // cut pepperoni pizza 
    };

    box() {
        // box pepperoni pizza 
    };
}

