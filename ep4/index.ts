function  seyHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log("สวัสดีวันอาทิตย์")
    } else if (dayOfWeek === 2) {
        console.log("สวัสดีวันจันทร์")
    } else if (dayOfWeek === 3) {
        console.log("สวัสดีวันอังคาร")
    } else if (dayOfWeek === 4) {
        console.log("สวัสดีวันพุธ")
    } else if (dayOfWeek === 5) {
        console.log("สวัสดีวันพฤหัสบดี")
    } else if (dayOfWeek === 6) {
        console.log("สวัสดีวันศุกร์")
    } else if (dayOfWeek === 7) {
        console.log("สวัสดีเสาร์")
    }
}
seyHi (6)

function scoldingMyself(shirtSize: string) {
    if (shirtSize === "s") {
        console.log("ไอแห้ง")
    } else if (shirtSize === "m") {
        console.log("หล่อจัดด")
    } else if (shirtSize === "l") {
        console.log("หล่อเกินปุยมุ้ยย")
    } else if (shirtSize === "xl") {
        console.log("เริ่มอ้วนแล้วนะเรา")
    } else if (shirtSize === "2xl") {
        console.log("ยักษ์ละนะะ")
    }
}
scoldingMyself ("2xl")


function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67676, 10))


function fix(a: number) {
    return a.toLocaleString()
}
console.log(fix(100000))


const str: string = "Pannawat"

console.log(str.toLowerCase())


const str: string = "Pannawat"

console.log(str.toUpperCase())


function checkStringLength(x: string) {
    console.log (x.length)
}
checkStringLength('Pannawat')

function getCharByIndex(msg: string,index: number) {
    return msg.charAt(index)

}
console.log

