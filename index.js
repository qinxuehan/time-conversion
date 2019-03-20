module.exports = function(formats, timestamps) {
    var timeType
    var time
    var value = formats
        // console.log('timestamps', timestamps)
    if (timestamps) {
        timeType = new Date(timestamps) // 将时间戳参数格式化
    } else {
        timeType = new Date() // 将当前时间格式化
    }
    var Y = timeType.getFullYear()
    var M = timeType.getMonth() + 1 < 10 ? '0' + (timeType.getMonth() + 1) : (timeType.getMonth() + 1)
    var D = timeType.getDate() < 10 ? '0' + timeType.getDate() : timeType.getDate()
    var h = timeType.getHours() < 10 ? '0' + timeType.getHours() : timeType.getHours()
    var m = timeType.getMinutes() < 10 ? '0' + timeType.getMinutes() : timeType.getMinutes()
    var s = timeType.getSeconds() < 10 ? '0' + timeType.getSeconds() : timeType.getSeconds()

    function quchong(str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] !== str[i + 1]) {
                newStr += str[i];
            }
        }
        return newStr;
    }
    // 将时间格式去重
    var str = quchong(value)

    function tihuan(str) {
        var guize = ['Y', 'M', 'D', 'h', 'm', 's']
        var guize2 = [Y, M, D, h, m, s]
        var result
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < guize.length; j++) {
                if (str[i] === guize[j]) {
                    result = str.replace(str[i], guize2[j])
                    time = result
                    return tihuan(result)
                }
            }

        }
    }
    // 用Y替换去重后的时间格式'Y'
    tihuan(str)

    return time
}
