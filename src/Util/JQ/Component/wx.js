if (!cc.sys.isNative) {
    $.weixin = {};

    setTimeout(function () {
        var img = document.createElement("img");
        img.src = "http://wshxbqq.sinaapp.com/static/share_img.png";
        img.style.display = "none";
        document.body.appendChild(img);
        img.parentNode.removeChild(img);
    }, 3000);

    $.weixin.showMask = function () {
        var css = [
           '     .share_wx {                          ',
           '         width: 100%;                     ',
           '         height: 100%;                    ',
           '         background:rgba(0, 0, 0, 0.7) ;  ',
           '         position: absolute;              ',
           '         z-index: 150;                    ',
           '     }                                    ',
           '                                          ',
           ' .share_wx img {                          ',
           '         position: absolute;              ',
           '         right: 0;                        ',
           '         width: 240px;                    ',
           '     }                                    '
        ].join('');
        var cssDom = document.createElement("style");
        cssDom.innerHTML = css;
        
        document.body.appendChild(cssDom);
        
        var html = [
            '<div id="weixin_share_content" class="share_wx" style="display: block;">',
            '    <img src="http://wshxbqq.sinaapp.com/static/share_img.png">  ',
            '</div>                                        '
        ].join('');
        document.body.insertAdjacentHTML("afterbegin", html);
        
        var mask = document.getElementById("weixin_share_content");
        mask.addEventListener("touchend", function (e) {
            $.weixin.hideMask();
        });

      
    }

    $.weixin.hideMask = function () {
        var d = document.getElementById("weixin_share_content");
        d.parentNode.removeChild(d);
    }



















}