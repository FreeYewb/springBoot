var hintAlert = document.getElementById('hintAlert');

// 思路：要想复制到剪贴板，必须先选中这段文字。
function copyNum() {
    var NumClip = document.getElementById("weChatNum");
    var NValue = NumClip.value;
    var valueLength = NValue.length;

    selectText(NumClip, 0, valueLength);
    if (document.execCommand('copy', false, null)) {
        document.execCommand('copy', false, null);// 执行浏览器复制命令
        // console.log("已复制,赶紧分享给朋友吧");
        window.location.href = "weixin://"
    } else {
        // console.log("不兼容");
    }
}

// input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
// 选择文本。createTextRange(setSelectionRange)是input方法
function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) {//ie
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex);//起始光标
        range.moveEnd('character', stopIndex - startIndex);//结束光标
        range.select();//不兼容苹果
    } else {//firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex);
        textbox.focus();
    }
}
