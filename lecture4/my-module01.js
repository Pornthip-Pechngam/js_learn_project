let dataX = 'Hello...' //ley แก้ได้

const SAU = 'Southeast Asia University' //const แก้ไม่ได้

function showWow(){
    console.log('Wow wow wow')
}

//เป็นการสร้าง module แบบ CommonJS
module.exports = {
    dataX, 
    SAU, 
    showWow
}