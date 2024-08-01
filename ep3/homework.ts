function bmi (height: number , weight: number) {
    let bmi = weight / (height * height) ;

    if (bmi < 18.5) {
        return "ผอมเกิน" ;
    } else if (bmi >=18.5 && bmi < 22.9) {
        return "สมส่วน" ;
    } else if (bmi >=23 && bmi < 24.9) {
        return "เริ่มอ้วน" ;
    } else if (bmi >=25 && bmi < 29.9) {
        return "อ้วน" ;
    } else if (bmi > 30) {
        return "อ้วนมาก" ;
    } else {
        return "error"
    }
}
console.log (bmi(1,55,55)