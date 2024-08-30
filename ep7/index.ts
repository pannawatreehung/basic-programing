const score: number[] =[10,23,26,30,33]

let sum: number = 0
for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("total; ", sum)
console.log("avg; ", avg)

const myStudents: string = "่เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray : string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)

const animal: string = "่dog*cat*rabbit*bear"

const animalArray : string[] = animal.split(',')


const friendsName: string = "เต้, โต้, ต้า, ตุ๋ย"
const friendsNameArray: string[] = friendsName.split(',')

friendsNameArray.sort()

console.log("เรียง ก - ฮ: ", friendsNameArray)

friendsNameArray.reverse()

console.log("เรียง ฮ - ก: ", friendsNameArray)

const me = {
    firstName: 'Pannawat',
    lastName: 'Reehung',
    age: 19,
    gender: male,
    phoneNumber: "0909778777",
    address: 'Mukdahan Thailand',
}
console.log (me)
