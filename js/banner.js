
window.onload = function(){
    // 中部的banner轮播图
    var allA = document.querySelectorAll(".point");
    var imgList = document.querySelectorAll(".img-fa img");
    var index = 0;
    var screen = document.getElementById("screen");
    // 设定screen的大小
    screen.style.width = imgList.length*1226+"px";
    // 默认选中第一个
    allA[0].className += " "+"xuanzhong";
    for(var i =0 ;i<allA.length;i++){
        allA[i].num = i;
        allA[i].onclick = function(){
            clearInterval(time);
            // 给小圆点绑定单击响应函数
            index = this.num;
            // screen.style.left = -1226*index +"px";
            move(screen,"left",-1226*index,200,function(){
                setA();
                auto();
            });
        }
    }
    // 定义一个圆点选中功能
    function setA(){
        for(var i=0;i<allA.length;i++){
            removeClass(allA[i],"xuanzhong");
        }
        // allA[index].className += " "+"xuanzhong";
        addClass(allA[index],"xuanzhong");
    }
    // 定义一个自动轮播
    var time;
    function auto(){
    // var index = 0;
    time = setInterval(function(){
        index++;
        index %= imgList.length;
        // console.log(index);
        move(screen,"left",-1226*index,200,function(){
            console.log(index);
            if(index == imgList.length-1){
                index = 0;
                screen.style.left = 0;
            }
            // for(var i=0;i<allA.length;i++){
            //     removeClass(allA[i],"xuanzhong");
            // }
            // addClass(allA[index],"xuanzhong");
            setA();
        });
    },3000)
    }
    auto();
}