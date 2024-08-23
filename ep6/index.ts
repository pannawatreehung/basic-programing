console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('total: ', sum)

let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++
}
crossOriginIsolated.log('Total: ', sum) 

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda', 'BYD']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


console.log(cars.includes('BYD'))

const str: string = 'Forth'

const Yakiniku: string[] = ['Ale', 'Pim', 'View', 'Tare', 'Ink']
for (let i = 0; i < Yakiniku.length; i++) {
    if (Yakiniku[i] === 'Pim') {
        console.log('ไปกินหมูกระทะกัน')
    }
}

const lek: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let i = 0; i <= 10; i++) {
    if (lek[i] === 3 || lek[i] === 5 || lek[i] === 7) {
        lek[i] = 0
    }
}

console.log(lek)