import {bmiCalculator} from "../bmiCalculator";

describe("calculate bmi #9.1",() => {
test("calculateBmi has to be a function", ()=>{
        expect(typeof bmiCalculator).toBe("function");
    })


test("calculateBmi has to return Underweight", () => {
        expect(bmiCalculator(180,50)).toBe("Underweight");
})

test("calculateBmi has to return Normal (healthy weight)", () => {
    expect(bmiCalculator(180,70)).toBe("Normal");
})



test("calculateBmi has to return Overweight", ()=>{
    expect(bmiCalculator(180,85)).toBe("Overweight");
})

test("calculateBmi has to return Obese", ()=>{
    expect(bmiCalculator(180, 98)).toBe("Obese");
})

});