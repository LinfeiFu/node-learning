//YYYY-MM-DD HH:MM:SS

function convertDate(date){
    const dt = new Date((date))
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth()+1)//
    const d = padZero(dt.getDate())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())
    return y + "-" + m + "-" + d + "  " + hh + ":" + mm + ":" + ss
}
//检查是否需要补0
function padZero(number) {
    return number < 10 ? "0" + number : number
}

module.exports = {
    convertDate
}