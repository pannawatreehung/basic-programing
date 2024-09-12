const me = {
    firstName: 'Mr.Chuwabchuwab' ,
    LastName : 'Barhost',
    age : 20,
    phoneNumber : 1112,
    sex : 'male',
    addres : 'USA',
    city : 'newYorkCity',
    numBerCity : 10005,
    street :  'interstat',
    numberStreet : 90,
    mail : 'chuwabchuwab123@gmail.com',
    myBestFriend : {
        firstName : 'Obama',
        lastName : 'Muhahaha',
        cognomen : 'โล้นขาว'
    }
}
console.log(me.myBestFriend.cognomen)
// ประวัติส่วนตัว

// ชื่อ : Achitphol
// นามสกุล : Lervilnareis
// อายุ : 20
//เบอร์โทร : 112
//เพศ : ชาย
//ที่อยู่ : USA
//เมือง : NewYorkCity
//ถนน : interstat
//ถนนหมายเลข : 90
//เมล :chuwanchuwab123@gmail.com


const myFriends = [{
    firstName:'mookem',
    lastName:'munmak',
    AKA:'ounoun',
    age:72,
}, {
    firstName:'Obaba',
    lastName:'moonamtok',
    AKA:'wiwi',
    age:98,
}, {
    firstName:'moohwan',
    lastName:'moofoy',
    AKA:'numtok',
    age:23,
}, {
    firstName:'moohan',
    lastName:'mooprara',
    AKA:'tomyum',
    age:17
}]

const myFriendsAKA = myFriends.map(function(elemant, index){
    return ({
        firstName: elemant.firstName,
        AKA: elemant.AKA
    })
})

const myFriendMoreThen = myFriends.filter(function(elemant, index){
    return elemant.age > 15 && elemant.lastName === 'mooprara'
})

console.log(myFriendMoreThen)