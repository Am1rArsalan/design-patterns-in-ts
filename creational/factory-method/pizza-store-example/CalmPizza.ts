import { Pizza } from './Pizza';

export class CalmPizza implements Pizza {
    constructor() {
        this.bake();
        this.cut();
        this.prepare();
        this.box();
    }

    bake() {
        // bake calm pizza 
    };
    prepare() {
        // prepare calm pizza 
    };

    cut() {
        // cut calm pizza 
    };

    box() {
        // box calm pizza 
    };
}

