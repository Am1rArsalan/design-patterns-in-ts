export type PizzaType = "cheese" | "peperoni" | "calm";

export interface Pizza {
    bake: () => void;
    prepare: () => void;
    cut: () => void;
    box: () => void;
}

