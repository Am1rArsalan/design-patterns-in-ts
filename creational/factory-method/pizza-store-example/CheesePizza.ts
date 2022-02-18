import { Pizza } from './Pizza';

export class CheesePizza implements Pizza {
    constructor() {
        this.bake();
        this.cut();
        this.prepare();
        this.box();
    }

    bake() {
        // bake cheese pizza 
    };
    prepare() {
        // prepare cheese pizza 
    };

    cut() {
        // cut cheese pizza 
    };

    box() {
        // box cheese pizza 
    };
}

