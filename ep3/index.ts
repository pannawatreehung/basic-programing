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

function st(fname: string, sname: string) {

    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix','zane')

function tc(fname: string, sname: string, tname:string) {
    if ((fname === 'mix' || sname === 'zane') && tname === "forth") {
        console.log("เริ่มสอน")
    } else {
        console.log("ไม่สอน")
    }
}
tc("mix","zane","forth")

function sd(sex: string, hight: number, weight:number) {
    if (sex === 'male' && hight > 170 || weight == 50 >= 110)  {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่ผ่านเกณฑ์")
    }
}
sd("sex","hight","weight")
