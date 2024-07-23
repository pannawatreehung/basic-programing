function add(a: number, b: number) {
    return a + b
}



console.log(add(5, 8))






function subtract(a: number, b: number) {
    return a - b
}



console.log(subtract(10, 5))





function multiply(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}



console.log(multiply(5, 4, 2, 1))




function grade (homework: number, midterm : number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return 'เกรด D'
    } else if (score < 70) {
        return 'เกรด C'
    } else if (score < 80) {
        return 'เกรด B'   
    } else {
        return 'เกรด A'
    }
}

console.log(grade(50, 100, 100))