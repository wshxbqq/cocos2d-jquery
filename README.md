# cocos2d-jquery
Now Use Cocos2dx Like JQuery way :)<br>  
现在你可以用使用 jquery来方式来操作 cocos2dx~<br>  
###Demo看这里: [http://wshxbqq.sinaapp.com/static/cocosjq/html5/index.html](http://wshxbqq.sinaapp.com/static/cocosjq/html5/index.html)  

#### 同时支持 `HTML5` 和 `jsb`
![image](http://wshxbqq-wshxbqq.stor.sinaapp.com/2015-10-27_14-09-07_151___new.gif)
##安装方法:
  引用 `release/cocos.jquery.min.js` 到你的项目即可
  
##如何使用:
#### 1.使用 `cocos-jquery` 的 selector
##### 说明:
`cocos-jquery` 的 选择器分为三种<br>  
######一种是 name 选择器 使用 #开头
######一种是 tag选择器 使用 .开头 
######一种是 class选择器 开头没有特殊字符 `注意,在class选择器目前只能在H5环境下使用`
####举例:
注:这里是支持正则的<br>  
$("#Panel_Color #Button\\w+");<br> 
$("#Panel_Color #Button.*");<br> 
```javascript
//下面该选择器表示查找 nodeName 等于Panel_Color 的元素的里面的nodeName等于Button_1的元素
$("#Panel_Color #Button_1");
//可以使用正则
$("#Panel_Color #Button_[0-9]");
//或者也可以这样.
$("#Panel_Color").find("#Button_1");
$("#Panel_Color").eq(0);
$("#Panel_Color").first();
$("#Panel_Color").last();



//下面该选择器表示查找tag为112的元素
$(".112");

//下面该选择器表示查找 nodeName 等于Panel_Color 的元素的里面的所有的Sprite (此种选择器只支持H5环境)
$("#Panel_Color Sprite");
```

#### 2.使用 `cocos-jquery` 的 事件绑定
```javascript
//一般事件绑定, `touchstart touchend touchmove`
$("#Button_Event").bind("touchstart", function (item) {
  console.log("touchstart  triggered");
}).bind("touchend", function (item) {
    console.log("touchend  triggered");
});

//使用 promise 方式
$("#Button_Event").click(function(){
  console.log("click");
});

$("#Button_Event").touchend(function(){
  console.log("click");
});

```

#### 3.使用 ajax
####这里其实是是对`cc.loader.getXMLHttpRequest` 的封装,所以在jsb下一样可以发出请求.
```javascript
 $.get("index.html", function (data) {
    console.log(data);
});
$.post("index.html", function (data) {
    console.log(data);
});
```

#### 4.动画.
####目前暂 仅支持 {x,y}的平移动画 以后会扩充
```javascript
var button = $("#Panel_Color #Button_Animate");
var raw = button[0].getPosition();
button.animate({ x: 0, y: 0 }, 2, function () {
    button.animate({ x: raw.x, y: raw.y }, 2, function () {
    });

});
```

#### 5.工具
```javascript
var buttons = $("#Panel_Color #Button_.*");
//反射call ,其实等于 buttons 中每一个元素 都执行btn.setColor(args)
buttons.call("setColor", cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random()));

buttons.each(function (n, i) {
    cc.log(i);
});
```
