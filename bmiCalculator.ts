// let a = 180;
// let b = 74;


// const calculateBmi = (height, weight) => {

//     return "Normal (healthy weight)";
// }

// console.log(calculateBmi(a, b));


export function bmiCalculator(height: number, weight: number) {

    let bmi = weight / ((height / 100)** 2);
    //let bmi = weight / (height * height);
    if (bmi < 18.4){
        return "Underweight";
    }
    if (bmi >= 18.4 && bmi <= 24.9){
        return "Normal";
    }
    if (bmi >= 25 && bmi <= 29.9){
        return "Overweight";
    }
    if (bmi >= 30){
        return "Obese";
    }
    return ""
}

 console.log(bmiCalculator(171, 68));



