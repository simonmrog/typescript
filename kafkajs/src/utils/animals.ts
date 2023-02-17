import Chance from "chance";

const chance = new Chance();

export const generateAnimal = (): string => chance.animal();
