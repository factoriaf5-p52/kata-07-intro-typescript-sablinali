// let a = 180;
// let b = 74;


// const calculateBmi = (height, weight) => {

//     return "Normal (healthy weight)";
// }

// console.log(calculateBmi(a, b));


export function bmiCalculator(){}

let calculateBmi = (height: number, weight: number): string => {
    let bmi = weight / ((height / 100)** 2);
    //let bmi = weight / (height * height);
    if (bmi < 18.4){
        return "underweight"
    }
    if (bmi >= 18.4 && bmi <= 24.9){
        return "normal"
    }
    if (bmi >= 25 && bmi <= 29.9){
        return "overweight"
    }
    if (bmi >= 30){
        return "obese"
    }
}
console.log(calculateBmi(156, 50))

