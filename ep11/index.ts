const database = [
    {
        email: 'max@utk.ac.th',
        password: 'ZGl3YWk1NQ=='
    }
]

function login(email: string, password: string) {
    const user = database.filter(function (element, index){
        return element.email === email
    })

    if (user.length > 0) {
        if (atob(user[0].password) === password) {
            console.log('เข้าสู่ระบบแล้ว')
        }else {
            console.log('รหัสผ่านไม่ถูกต้อง')
        }
    }else {
        console.log('ไม่มีผู้ใช้งานในระบบ')
    }
}

login('max@utk.ac.th', 'diwai55')