// let a = 180;
// let b = 74;


// const calculateBmi = (height, weight) => {

//     return "Normal (healthy weight)";
// }

// console.log(calculateBmi(a, b));

const calculateBmi = (height: number, weight: number): string => {
    let result = weight / ((height / 100)** 2);
    if (result < 18.4){
        return "underweight"
    }
    if (result >= 18.4 && result <= 24.9){
        return "normal"
    }
    if (result >= 25 && result <= 29.9){
        return "overweight"
    }
    if (result >= 30){
        return "obese"
    }
}
console.log(calculateBmi(156, 49.5))

