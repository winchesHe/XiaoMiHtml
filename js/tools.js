// 获取元素的样式代码
function getstyle(obj, name) {
    return getComputedStyle(obj, null)[name];
}


// 定时移动的代码
function move(obj, attr, target, speed, callback) {
    /*
        obj    要移动的物体
        attr  可以改变想要的参数 left  top  width  top  等等
        target  要移动的位置
        speed  移动的速度
        callback  回调函数，将会在动画执行完毕后执行
    */
    //    判断speed的正负
    var current = parseInt(getComputedStyle(obj, null)[attr]);
    if (current > target) {
        speed = -speed;
    }
    // 使用obj.time  来解决定将计时器定义到全局作用域中侮辱全局作用域变量的隐患
    // 开始前要关闭上一个计时器
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var box1left = parseInt(getComputedStyle(obj, null)[attr]);
        var newleft = box1left + speed;
        obj.style[attr] = newleft + "px";
        // 判断反向以及位置
        if (parseInt(newleft) >= target && speed > 0 || parseInt(newleft) < target && speed < 0) {
            obj.style[attr] = target + "px";
            clearInterval(obj.time);
            // 动画结束后调用回调函数
            // 如果传了callback就调用，没传就不调用
            callback && callback();
        }
    }, 100);
}

 // 添加类函数
 function addClass(obj,cn){
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
}

// 判断是否有该类名
function  hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b")
    return reg.test(obj.className);
}
// 删除的类名的函数
function removeClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    // alert(reg);
    obj.className = obj.className.replace(reg,"");
}
// toggleClass  可以用来切换一个类
    // 如果有就删除，没有就加上
function toggleClass (obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }
    else{
        addClass(obj,cn);
    }
}