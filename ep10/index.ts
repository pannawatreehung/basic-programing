//กฏการเข้ารหัส
//เปลี่ยน u เป็น +
//เปลี่ยน 6 เป็น *
//เปลี่ยนเลข 0 เป็น ^
const database = [
    {
        email: 'user@gmail.com',
        password:'loveYo+3^^^'
    },
    {
        email: 'max@gmail.com',
        password: '1234567แปด'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0)  {
        const realPassword = decryptPassword(user[0].password)
        
        if (realPassword === password) {
            alert('เข้าสู่ระบบ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้องโปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('max@gmail.com', '1234567แปด')