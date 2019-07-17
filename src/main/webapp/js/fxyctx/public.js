var BASE_URL="https://server.fu51.cn/"
function doHttpAjax(uri, method, data, successCallback, errorCallback) {

    var requestData = JSON.stringify(data);
    if (isStringEmpty(data)) {
        requestData = data;
    }
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = date.getMonth() + 1;
    var months=month.toString();
    var day = date.getDate().toString();
    if (months < 10) {
        months = "0" + months;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var time = year + "-" + months + "-" + day;
    $.ajax({
        url: BASE_URL + uri,
        type: method,
        data: requestData,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Origin-Secret":$.md5('auf6c51803h-cmit-@DSF@^6-'+time+'-xmcmit')

        },
        success: successCallback,
        error: errorCallback,

    })
}





/**
 * 获取页面url的参数
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}



/**
 * 判断字符串是否为空
 */
function isStringEmpty(toCheck) {
    if (toCheck == null || toCheck == undefined || toCheck === '' || 'null' == toCheck) {
        return true;
    }
    return false;
}
