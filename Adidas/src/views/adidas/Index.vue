<template>
    <div>
         <!-- 当鼠标滚轮滑动到一定距离的时候顶部会出现悬浮的搜索框 -->
    <div id="d1" class="top-sousuo show">
        <img class="img-du" src="../../assets/du-logo.png" alt="">
        <input type="text" placeholder="搜索您想要的商品 如：Nike">
    </div>
    <script>
        //1.找到要绑定事件的元素
        //2.绑定事件
        window.onscroll = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 200) {
                d1.className = "top-sousuo" + " " + "show";
            } else {
                d1.className = "top-sousuo";
            }
        }
    </script>
    <!-- 最上面的导航栏 -->
    <div class="nav">
        <p class="nav-left">
            <a href="">hello,欢迎来到毒</a>
            <a href="">请登录</a>
            <a href="">免费注册</a>
        </p>
        <p class="nav-right">
            <a href="#">我的毒</a>
            <a href="#">购物车</a>
            <a href="#">收藏夹</a>
            <a href="#">|</a>
            <a href="#">手机版</a>
            <a href="#">淘宝网</a>
            <a href="#">商家支持</a>
            <a href="#">网站导航</a>
        </p>
    </div>
    <div class="logo-sousuo">
        <!-- 导航栏下面的logo -->
        <img class="du-logo" src="../../assets/du-logo.png" alt="">
        <!-- 搜索栏 -->

        <input class="sousuo" type="text" placeholder="搜索 Adidas Nike ">
        <a class="sousuo2" href="#">搜索</a>
    </div>
    <!-- 搜索栏下面的分类 -->
    <p class="top-content">
        <a href="#">推荐</a>
        <a href="#">新品</a>
        <a href="#">人气</a>
        <a href="#">女神</a>
        <a href="#">球鞋</a>
        <a href="#">T-恤</a>
        <a href="#">短裤</a>
        <a href="#">国潮</a>
    </p>
    <!-- 网页主体 -->
    <div class="content">
        <!-- 轮播图 -->

        <div class="banner">
            <div class="btn-left"></div>
            <ul id="ul-imgs" style="width:5000px; margin-left:0px;">
                <li><a href="javascript:;"><img src="../../assets/133c32133ae940338e7ccfaaf6d42b8a.gif" alt=""></a></li>
                <li><a href="javascript:;"><img src="../../assets/1041_415618_52e85384da54f79.jpg" alt=""></a></li>
                <li><a href="javascript:;"><img src="../../assets/20140919123519556.jpg" alt=""></a></li>
                <li><a href="javascript:;"><img src="../../assets/t0102909e0313c3c6ef.jpg" alt=""></a></li>
                <li><a href="javascript:;"><img src="../../assets/133c32133ae940338e7ccfaaf6d42b8a.gif" alt=""></a></li>
            </ul>
            <ul id="ul-idxs">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="btn-right"></div>
        </div>

        <script>
            var i = 0;//变量i存储的是轮播图中每一张图片的序号（0代表第一张图片......）
            var LIWIDTH = 1000;//等于每一张图片的宽度 用来控制轮播图的margin-left的移动距离
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
        </script>


        <!--  轮播图上左侧的选择栏 -->
        <div class="category-tab-content">
            <ul>
                <li>
                    <a href="#">品牌</a>
                    <div class="pinpai">
                        <ul>
                            <li>
                                <a href=""><img src="../../assets/nike.png" alt=""></a> <a href=""><img src="../../assets/ad.png" alt=""></a>
                                    <a href=""><img src="../../assets/aj.png" alt=""></a>
                                    <a href=""><img src="../../assets/vans.png" alt=""></a>
                                    <a href=""><img src="../../assets/puma.png" alt=""></a>
                            </li>
                            <li>
                                <a href=""><img src="../../assets/boy.png" alt=""></a>
                                <a href=""><img src="../../assets/cha.png" alt=""></a>
                                <a href=""><img src="../../assets/kuang.png" alt=""></a>
                                <a href=""><img src="../../assets/ling.png" alt=""></a>
                                <a href=""><img src="../../assets/lining.png" alt=""></a>
                            </li>
                            <li>
                                <a href=""><img src="../../assets/new.png" alt=""></a>
                                <a href=""><img src="../../assets/off.png" alt=""></a>
                                <a href=""><img src="../../assets/palace.png" alt=""></a>
                                <a href=""><img src="../../assets/san.png" alt=""></a>
                                <a href=""><img src="../../assets/sup.png" alt=""></a>

                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#">系列</a>
                    <div class="xilie">
                        <ul class="left">
                            <li>
                                <p>Nike ></p>
                            </li>
                            <li>
                                <p>AirJordan ></p>
                            </li>
                            <li>
                                <p>Adidas ></p>
                            </li>
                            <li>
                                <p>Vans ></p>
                            </li>
                            <li>
                                <p>New Balance ></p>
                            </li>
                            <li>
                                <p>Puma ></p>
                            </li>
                            <li>
                                <p>Converse ></p>
                            </li>
                        </ul>
                        <p class="right1">
                            <a href="">Air Force</a>
                            <a href="">PG</a>
                            <a href="">Kyrie</a>
                            <a href="">Kobe</a>
                            <a href="">KD</a>
                            <a href="">Air Max</a>
                            <a href="">Dunk SB</a>
                            <a href="">Zoom fly</a>
                            <a href="">M2K</a>
                            <a href="">React Element</a>
                            <a href="">Blazer</a>
                            <a href="">The Ten</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air Jordan 1</a>
                            <a href="#">Air Jordan 2</a>
                            <a href="#">Air Jordan 3</a>
                            <a href="#">Air Jordan 4</a>
                            <a href="#">Air Jordan 5</a>
                            <a href="#">Air Jordan 6</a>
                            <a href="#">Air Jordan 7</a>
                            <a href="#">Air Jordan 8</a>
                            <a href="#">Air Jordan 9</a>
                            <a href="#">Air Jordan 10</a>
                            <a href="#">Air Jordan 11</a>
                            <a href="#">Air Jordan 12</a>
                            <a href="#">Air Jordan 13</a>
                        </p>
                        <p class="right3">
                            <a href="#">Ultra Boost</a>
                            <a href="#">Pure Boost</a>
                            <a href="#">EQT</a>
                            <a href="#">Harden</a>
                            <a href="#">Superstar</a>
                            <a href="#">NMD</a>
                            <a href="#">Yung-1</a>
                            <a href="#">Samba</a>
                            <a href="#">Yeezy350</a>
                            <a href="#">Yeezy700</a>
                        </p>
                        <p class="right4">
                            <a href="#">Old Skool</a>
                            <a href="#">SK8 HI</a>
                            <a href="#">slip-on</a>
                            <a href="#">Style 36</a>
                            <a href="#">Era</a>
                            <a href="#">Authentic</a>
                            <a href="#">SK8 MID</a>
                            <a href="#"> Style 73</a>
                            <a href="#">Bold</a>
                            <a href="#">Vault</a>
                        </p>
                        <p class="right5">
                            <a href="#">NB 580</a>
                            <a href="#">NB 990</a>
                            <a href="#">NB 996</a>
                            <a href="#">NB 997</a>
                            <a href="#">NB 998</a>
                            <a href="#">NB 999</a>
                        </p>
                        <p class="right6">
                            <a href="#">Rihanna Fenty</a>
                            <a href="#">Suede</a>
                            <a href="#">Puma Thunder</a>
                            <a href="#">Basket</a>
                            <a href="#">Smash</a>
                            <a href="#">Disc Blaze</a>
                            <a href="#">Bari</a>
                            <a href="#">Cali</a>
                            <a href="#">Puma Cell</a>
                            <a href="#">Altertion PN</a>
                        </p>
                        <p class="right7">
                            <a href="#">1970s</a>
                            <a href="#">one star</a>
                            <a href="#">all star</a>
                            <a href="#">Jack Purcell</a>
                            <a href="#">Star Series</a>
                            <a href="#">Lucky Star</a>
                            <a href="#">ERX</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">休闲</a>
                    <div class="xiuxian">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">球鞋</a>
                    <div class="qiuxie">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">跑鞋</a>
                    <div class="paoxie">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">潮搭</a>
                    <div class="chaoda">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">潮玩</a>
                    <div class="chaowan">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">手表</a>
                    <div class="shoubiao">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
                <li>
                    <a href="#">数码</a>
                    <div class="shuma">
                        <ul class="left">
                            <li>推荐女鞋 ></li>
                            <li>推荐男鞋 ></li>
                            <li>实战专用 ></li>
                            <li>理财专用 ></li>
                        </ul>
                        <p class="right1">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air Jordan 11白蛇</a>
                            <a href="#">Air Jordan 黑红</a>
                            <a href="#">Air Jordan 手稿</a>
                        </p>
                        <p class="right2">
                            <a href="#">Air jordan 1 红脚趾</a>
                            <a href="#">Air jordan 1 黑脚趾</a>
                            <a href="#">Air jordan 1 小闪电</a>
                            <a href="#">Air jordan 1 影子</a>
                        </p>
                        <p class="right3">
                            <a href="#">KD4</a>
                            <a href="#">Air Jordan 4 黑红</a>
                            <a href="#">Air Jordan 11 酷灰</a>
                            <a href="#">詹姆斯10</a>
                        </p>
                        <p class="right4">
                            <a href="#">Yeezy 350</a>
                            <a href="#">Yeezy 500</a>
                            <a href="#">Yeezy 700</a>
                            <a href="#">Yeezy 350</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 轮播图下面的内容 -->
        <div class="adidas">
            <img class="adi-logo" src="../../assets/logo-new.png" alt="">
            <ul class="adi-sel">
                <li class="adi-sel-one">
                    <a href="">男子</a>
                </li>
                <!-- 当鼠标悬停在导航上面的选项时出现的选择栏 -->
                <!-- 当鼠标悬停在"男子"上时出现的选择栏 -->
                <div class="man">
                    <ul class="man-one">
                        <li><a href="">精品推荐</a></li>
                        <li><a href="">全部男子折扣</a></li>
                        <li><a href="">最新上市</a></li>
                        <li><a href="">新品发售日历</a></li>
                        <li><a href="">限量发售</a></li>
                        <li><a href="">本周热卖</a></li>
                    </ul>
                    <ul class="man-two">
                        <li><a href="">鞋类</a></li>
                        <li><a href="">Originals</a></li>
                        <li><a href="">跑步</a></li>
                        <li><a href="">帆布/滑板</a></li>
                        <li><a href="">拖鞋/凉鞋</a></li>
                        <li><a href="">复古/老爹鞋</a></li>
                        <li><a href="">adidas neo</a></li>
                        <li><a href="">篮球</a></li>
                        <li><a href="">足球</a></li>
                        <li><a href="">户外</a></li>
                    </ul>
                    <ul class="man-three">
                        <li><a href="">服饰类</a></li>
                        <li><a href="">短袖T恤/上衣</a></li>
                        <li><a href="">POLO衫</a></li>
                        <li><a href="">卫衣/套头衫</a></li>
                        <li><a href="">夹克/外套</a></li>
                        <li><a href="">短裤</a></li>
                        <li><a href="">长裤/运动裤</a></li>
                        <li><a href="">比赛服</a></li>
                        <li><a href="">泳裤</a></li>
                    </ul>
                    <ul class="man-four">
                        <li><a href="">附配件类</a></li>
                        <li><a href="">包</a></li>
                        <li><a href="">袜子</a></li>
                        <li><a href="">帽子/手套/围巾</a></li>
                        <li><a href="">球类</a></li>
                        <li><a href="">运动装备</a></li>
                    </ul>
                </div>
                <li class="adi-sel-two">
                    <a href="">女子</a>
                </li>
                <div class="woman">
                    <ul class="woman-one">
                        <li><a href="">精品推荐</a></li>
                        <li><a href="">全部男子折扣</a></li>
                        <li><a href="">最新上市</a></li>
                        <li><a href="">新品发售日历</a></li>
                        <li><a href="">限量发售</a></li>
                        <li><a href="">本周热卖</a></li>
                    </ul>
                    <ul class="woman-two">
                        <li><a href="">鞋类</a></li>
                        <li><a href="">Originals</a></li>
                        <li><a href="">adidas neo</a></li>
                        <li><a href="">跑步</a></li>
                        <li><a href="">小白鞋</a></li>
                        <li><a href="">复古/老爹鞋</a></li>
                        <li><a href="">拖鞋/凉鞋</a></li>
                        <li><a href="">户外</a></li>
                    </ul>
                    <ul class="woman-three">
                        <li><a href="">服饰类</a></li>
                        <li><a href="">短袖T恤/上衣</a></li>
                        <li><a href="">卫衣/套头衫</a></li>
                        <li><a href="">夹克/外套</a></li>
                        <li><a href="">运动胸衣</a></li>
                        <li><a href="">短裤/短裙</a></li>
                        <li><a href="">连衣裙</a></li>
                        <li><a href="">紧身裤</a></li>
                        <li><a href="">长裤/运动裤</a></li>
                    </ul>
                    <ul class="woman-four">
                        <li><a href="">附配件类</a></li>
                        <li><a href="">包</a></li>
                        <li><a href="">袜子</a></li>
                        <li><a href="">帽子/手套/围巾</a></li>
                        <li><a href="">球类</a></li>
                        <li><a href="">运动装备</a></li>
                    </ul>
                </div>
                <li class="adi-sel-three">
                    <a href="">儿童</a>
                </li>
                <div class="children">
                    <ul class="children-one">
                        <li><a href="">精品推荐</a></li>
                        <li><a href="">全部儿童折扣</a></li>

                        <li><a href="">最新上市</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">套装系列</a></li>
                        <li><a href="">亲自系列</a></li>
                        <li><a href="">Superstar</a></li>
                    </ul>
                    <ul class="children-two">
                        <li><a href="">大童(8-14岁)</a></li>
                        <li><a href="">男大童:鞋类</a></li>
                        <li><a href="">女大童:鞋类</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">男大童:服装</a></li>
                        <li><a href="">女大童:服装</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">箱包附配件</a></li>
                    </ul>
                    <ul class="children-three">
                        <li><a href="">小童(4-8岁)</a></li>
                        <li><a href="">男大童:鞋类</a></li>
                        <li><a href="">女大童:鞋类</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">男大童:服装</a></li>
                        <li><a href="">女大童:服装</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">箱包附配件</a></li>
                    </ul>
                    <ul class="children-four">
                        <li><a href="">婴幼儿(0-4岁)</a></li>
                        <li><a href="">男大童:鞋类</a></li>
                        <li><a href="">女大童:鞋类</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">男大童:服装</a></li>
                        <li><a href="">女大童:服装</a></li>
                        <li><a href="">——</a></li>
                        <li><a href="">箱包附配件</a></li>
                    </ul>
                </div>
                <li class="adi-sel-four">
                    <a href="">|</a>
                </li>
                <li class="adi-sel-five">
                    <a href="">运动品牌</a>
                </li>
                <li class="adi-sel-six">
                    <a href="">精选系列</a>
                </li>
            </ul>

        </div>
        <div class="content-first">
            <img class="sumhpy" src="../../assets/sumhpy.jpg" alt="">
            <a href="" class="buy1">立即选购 →</a>
            <a href="" class="buy2"></a>
        </div>
        <div class="content-two">
            <img src="../../assets/boost1.jpg" alt="">
            <img src="../../assets/boost2.jpg" alt="">
            <a href="" class="buy1">立即选购 →</a>
            <a href="" class="buy1-2"></a>
            <a href="" class="buy2">立即选购 →</a>
            <a href="" class="buy2-2"></a>
        </div>
        <div class="four-shoes">
            <ul>
                <li>
                    <a href="#"><img src="../../assets/eqt-silos.png" alt=""></a>
                    <span><a href="">EQT GAZELLE</a></span>
                </li>
                <li>
                    <a href="#"><img src="../../assets/nj-silo.png" alt=""></a>
                    <span><a href="">NITE JOGGER</a></span>
                </li>
                <li>
                    <a href="#"><img src="../../assets/ultraboostclima-keysilo.png" alt=""></a>
                    <span><a href="">UltraBOOST CLIMA</a></span>
                </li>
                <li>
                    <a href="#"><img src="../../assets/keysilo_ub19_blockbust.png" alt=""></a>
                    <span><a href="">UltraBOOST 19</a></span>
                </li>
            </ul>
            
        </div>
        <div class="pri-month">
            <p>本月主推</p>
            <ul id="ulImgs">
                <li>
                    <div id="btn-left" class="disabled">
                        <img src="../../assets/left_ar.png" alt="">
                    </div> 
                    <img  src="../../assets/15615502901673685_324X324.jpg" alt="">
                    <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                </li>
                <li>
                    <img src="../../assets/15561607431025232_324X324.jpg" alt="">
                     <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                </li>
                <li>
                    <img src="../../assets/15502210146609184_324X324.jpg" alt="">
                    <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                </li>
                <li>
                    <img src="../../assets/1560156734813240_324X324.jpg" alt="">
                    <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                </li>
                <li>
                    <img src="../../assets/15616005522667435_324X324.jpg" alt="">
                    <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                </li>
                <li>
                    <img src="../../assets/15608416734622021_324X324.jpg" alt="">
                    <p>UltraBOOST 19 m跑步鞋</p>
                    <p>￥1399</p>
                    <div id="btn-right" class="">
                        <img  src="../../assets/right_ar.png" alt="">
                    </div> 
                </li>
            </ul>
            <div class="clear"></div>
            <script src="../../js/jquery-1.11.3.js"></script>
            <script>
                var $btnLeft=$("#btn-left");
                var $btnRight=$("#btn-right");
                var times=0;
                var IMGWIDTH=250;
                $btnRight.click(function(){
                    $btn=$(this)
                    if($btn.is(":not(.disabled)")){
                        times++;
                        if(times<=3){
                            $("#ulImgs").css({"marginLeft":-IMGWIDTH*times,
                            "transition":"all .5s linear"});
                        }else if(times>3){
                            $btn.addClass("disabled");
                        }
                        $btnLeft.removeClass("disabled");
                    }
                
                })
                $btnLeft.click(function(){
                    
                        var $btn=$(this);
                        if($btn.is(":not(.disabled)")){
                        times--;
                        if(times>0){
                             
                             $("#ulImgs").css({"marginLeft":-IMGWIDTH*times,
                             "transition":"all .5s linear" })
                             }else if(times==0){
                                 $btn.addClass("disabled");
                             }
                        }
                              
                })
            </script>
        </div>
        <div class="nike">
            <img src="" alt="">
            <ul>
                <li>男子</li>
                <li>女子</li>
                <li>儿童</li>
                <li>专属定制</li>
                <li>流行单品</li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    
</script>
<style scoped>

</style>
