// 轮播图的js代码
var i = 0; //变量i存储的是轮播图中每一张图片的序号（0代表第一张图片......）
var LIWIDTH = 1200;//等于每一张图片的宽度 用来控制轮播图的margin-left的移动距离
var DURATION = 500;//表示定时器的等待时间
var LICOUNT = 4;//轮播图下面的小圆点的个数
//找到存储图片的ul
var ulImgs = document.getElementById("ul-imgs")
//找到存储小圆点的ul
var ulIdxs = document.getElementById("ul-idxs");
//找到存储轮播图片的ul下的所有的li
var lis = ulIdxs.children;
//定义一个moveTo函数，用来控制轮播图的移动（整个轮播图的核心技术）
function moveTo(to) {
    //如果没有传入参数也就是to=0，默认将i+1
    if (to == undefined) {
        to = i + 1;
    }
    //如果i=0时，就将ulImgs的class添加transition过渡属性
    if (i == 0) {
        //如果to>0就说明用户的需求是想看到轮播图向右移动
        if (to > i) {
            ulImgs.className = "transition";
        } else {//如果to<0就说明用户的需求是想看到轮播to向左移动
            //因为涉及到切换的问题，就需要欺骗用户，所以需要先将transtion过渡属性移除，
            ulImgs.className = "";
            //然后瞬间切换到最后那一张和第一张一样的图片上，其原理就是改变ulImgs的margin-left,这种操作用户用肉眼是看不到的，其实就是欺骗用户，我们已经私下偷偷的改变了将第一张图片换到最后一张的放的和第一张一模一样的图片上，
            ulImgs.style.marginLeft = -LICOUNT * LIWIDTH + "px";
            //然后再用定时器调用moveTo函数将轮播图切换到下标为3的第四张图片（其实就是用户可以看到的最后一张图片）上
            setTimeout(function () {
                moveTo(LICOUNT - 1);
            }, 100)
            return;
        }
    }
    i = to;
    //根据传入的参数to计算出i从而得到存放轮播图片的ul的margin-left从而达到移动图片的效果
    ulImgs.style.marginLeft = -i * LIWIDTH + "px";
    // 先把给小圆点去除所有的class
    for (var li of lis) {
        li.className = ""
    }
    //当i=4时，说明最后一张图片已经轮播完，此时就需要将轮播图切换到第一张图片上，需要衔接第一张图片所以进行下面的操作
    //当i=4时
    if (i == LICOUNT) {
        i = 0;//此时需要将i=0；因为i=4此时轮播图已经轮播到我们用来偷偷切换第一张图片用来欺骗用户的自己添加在最后的和第一张图片完全一样的图片上
        //为了不让用户看到我们偷偷切换的动作所以要把此次操作放到定时器里面，定时器的等待时间正好是transition过度的时间，所以当过度时间完成的一瞬间去掉ulImgs的class的transition属性去掉，通过调节margin-left的方法切换到第一张图片上。
        setTimeout(function () {
            ulImgs.className = "";
            ulImgs.style.marginLeft = 0;
        }, DURATION)
    }
    //再给小圆点当前第i个添加class的active;
    lis[i].className = "active";
}
// 给轮播图两边的耳朵绑定事件=====================================
//1.先找到左右两个小耳朵
var btnLeft = document.getElementsByClassName("btn-left")[0];
var btnRight = document.getElementsByClassName("btn-right")[0];
//定义一个move函数，里面封装左右两个小耳朵要绑定的事件
var canClick = true;
function move(n) {
    if (canClick) {
        console.log(n);
        console.log(i + n);
        moveTo(i + n);

        canClick = false;
        setTimeout(function () {
            canClick = true;
        }, DURATION + 100)
    }
}
//2.先给左边的耳朵绑定事件
btnLeft.onclick = function () {
    move(-1);
}
//3.再给右边的小耳朵绑定事件
btnRight.onclick = function () {
    move(1);
}
//设置轮播图自动播放
//先设置一个定时器，可以实现自动调用moveTo函数，从而达到自动轮播的效果
var interval = 3000;//每次轮播之间的间隔秒数
var timer = setInterval(function () {
    moveTo();
}, interval);
//先找到要绑定事件的元素
var bar = document.getElementsByClassName("banner")[0];
bar.onmouseover = function () {
    clearInterval(timer);
}
bar.onmouseout = function () {
    timer = setInterval(function () {
        moveTo();
    }, interval);
}
//点击小圆点来控制要展示的图片
//找到小圆点，并给它绑定事件
//利用事件委托，在父元素上绑定事件

var ulIdxs = document.getElementById("ul-idxs");
var canClick = true;
ulIdxs.onclick = function (e) {
    if (canClick) {
        var li = e.target;
        if (li.nodeName == "LI") {
            if (li.className !== "active") {
                for (var i = 0; i < lis.length; i++) {
                    if (lis[i] == li) {
                        break;
                    }
                }
                moveTo(i);
                canClick = false;
                setTimeout(function () {
                    canClick = true;
                }, DURATION)
            }
        }
    }
}
// 底部滑动图片的js代码

// 查找要绑定事件的元素
var btnLf=document.getElementById("btn-left");
var btnRi=document.getElementById("btn-right");
 var lid1=document.getElementsByClassName("lid1")[0];
//  var $lid1=$("#lid1")
 var lid2=document.getElementsByClassName("lid2")[0];
 console.log('111111',lid2);
//  var $lid2=$("#lid2");
// 查找要修改的元素（小圆点）
// var uI=document.getElementById("")
btnRi.onclick=function(){
    //查找要修改的元素
    var uImgs=document.getElementById("uImgs");
    uImgs.style.marginLeft=-810+"px";
   
    // $lid1.addClass("active")
    // $lid2.removeClass("active");
    lid2.className="lid2 black";
    lid1.className="lid1";
    console.dir(lid2);
}
btnLf.onclick=function(){
    //查找要修改的元素
    var uImgs=document.getElementById("uImgs");
    uImgs.style.marginLeft=0+"px";
    
    // $lid1.removeClass("active");
    // $lid2.addClass("active");
    lid1.className="black";
    lid2.className="";
    console.log(lid1);
}
