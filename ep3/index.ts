function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() //ไม่มี input ไม่มี output

function helloName(name: string){
    console.log(name)
}

helloName('First') //มี input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) //ไม่มี input แต่มี output

function teach(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

teach('mix','zane')

function study(fname: string, sname: string, tname:string) {
    if ((fname === 'mix' || sname === 'zane') && tname === "forth") {
        console.log("พร้อมเรียน")
    } else {
        console.log("ไม่พร้อมเรียน")
    }
}
study("mix","zane","forth")

function soldier(sex: string, hight: number, weight:number) {
    if (sex === 'male' && ( hight > 170 || weight > 50 && weight <= 110))  {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่ผ่านเกณฑ์")
    }
}
soldier("sex",170,50)

function savings(age: number, salary: number, total: number) {
    if(age >= 16 && salary < 70000 && total < 500000) {
        console.log ("รับ10000")
    } else {
        console.log("อด")
    }
}
savings(17,20000,300000)
