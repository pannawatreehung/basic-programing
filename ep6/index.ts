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