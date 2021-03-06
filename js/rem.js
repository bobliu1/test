/**
 * Created by BJHZD on 2016/12/19.
 */
    //动态生成REM值
!(function (win, doc) {
    function setFontSize() {
        // 获取window 宽度
        var winWidth = window.innerWidth;
        var size = (winWidth / 750) * 100;
        /*750为设计搞大小*/
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    }
    //监听是否是横屏
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;
    win.addEventListener(evt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    // 初始化
    setFontSize();
}(window, document));