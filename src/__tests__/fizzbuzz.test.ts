import FizzBuzz from "../fizzBuzz";

const fizzBuzz = new FizzBuzz();

describe('Tests TDD pour FizzBuzz', () => {
    it("retourne '1' pour l'entrée 1", () => {
        expect(fizzBuzz.answerFor(1)).toEqual("1");
    });

    it("retourne '2' pour l'entrée 2", () => {
        expect(fizzBuzz.answerFor(2)).toEqual("2");
    });

    it("retourne 'Fizz' pour un nombre divisible par 3", () => {
        expect(fizzBuzz.answerFor(3)).toEqual("Fizz");
        expect(fizzBuzz.answerFor(6)).toEqual("Fizz");
    });

    it("retourne 'Buzz' pour un nombre divisible par 5", () => {
        expect(fizzBuzz.answerFor(5)).toEqual("Buzz");
        expect(fizzBuzz.answerFor(10)).toEqual("Buzz");
    });

    it("retourne 'FizzBuzz' pour un nombre divisible à la fois par 3 et 5", () => {
        expect(fizzBuzz.answerFor(15)).toEqual("FizzBuzz");
        expect(fizzBuzz.answerFor(30)).toEqual("FizzBuzz");
    });

    it("retourne le nombre sous forme de chaîne de caractères pour les nombres non divisibles ni par 3 ni par 5", () => {
        expect(fizzBuzz.answerFor(1)).toEqual("1");
        expect(fizzBuzz.answerFor(2)).toEqual("2");
        expect(fizzBuzz.answerFor(4)).toEqual("4");
    });
});
