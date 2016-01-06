jqCore.prototype.addClass = function (className) {
    $.initCss();
    this.each(function (n, i) {
        $.initCss.acceptCss(i, className);

    })

}