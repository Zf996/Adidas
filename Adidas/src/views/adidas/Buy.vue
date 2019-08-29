<template>
<div>
    <my-header></my-header>
    <div class="all">  
    <div class="left">
        <div class="one-out">
            <div class="one">
                <span>您的选择</span>
                <span>重置筛选</span>
            </div>
            <div class="one-bot"></div>
        </div>
        <div class="two-out">
            <div class="two">
                <span>筛选条件</span>
            </div>
        </div>
        <!-- 第三层：性别 -->
        <div class="three-out">
            <div class="three">
                <div class="three-top">
                    <span>性别</span>
                    <span>^</span>
                </div>
                <div class="three-bottom">
                    <ul>
                        <li>
                            <div @click="bot1" :style="bStyle1"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top1" :style="tStyle1"></div>
                        </li>
                        <li>
                            <div @click="bot2" :style="bStyle2"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top2" :style="tStyle2"></div>
                        </li>
                        <li>
                            
                            <div @click="bot3" :style="bStyle3"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top3" :style="tStyle3"></div>
                        </li>
                        <li>
                            
                            <div @click="bot4" :style="bStyle4"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top4" :style="tStyle4"></div>
                        </li>
                    </ul>
                    <ul>
                        <li>男子</li>
                        <li>女子</li>
                        <li>男童</li>
                        <li>女童</li>
                    </ul>
                </div>    
            </div>
        </div>
        <!--  第四层：年龄段-->
        <div class="four-out">
            <div class="four">
                <div class="four-top">
                    <span>年龄段</span>
                    <span>^</span>
                </div>
                <div class="four-bottom">
                    <ul id="sel">
                        <li>
                            <div @click="bot5" :style="bStyle5"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top5" :style="tStyle5"></div>
                        </li>
                        <li>
                            <div @click="bot6" :style="bStyle6"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top6" :style="tStyle6"></div>
                        </li>
                        <li>
                            
                            <div @click="bot7" :style="bStyle7"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top7" :style="tStyle7"></div>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>婴童(0-4岁)</li>
                        <li>小童(4-8岁)</li>
                        <li>大童(8-14岁)</li>
                    </ul>
                </div>    
            </div>
        </div>
        <!-- 第五层：产品类型 -->
        <div class="five-out">
            <div class="five">
                <div class="five-top">
                    <span>产品类型</span>
                    <span>^</span>
                </div>
                <div class="five-bottom">
                    <ul id="sel2">
                       <li>
                            <div @click="bot8" :style="bStyle8"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top8" :style="tStyle8"></div>
                        </li>
                        <li>
                            <div @click="bot9" :style="bStyle9"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top9" :style="tStyle9"></div>
                        </li>
                        <li>
                            <div @click="bot10" :style="bStyle10"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top10" :style="tStyle10"></div>
                        </li>
                        <li>
                            <div @click="bot11" :style="bStyle11"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top11" :style="tStyle11"></div>
                        </li>
                         <li>
                            <div @click="bot12" :style="bStyle12"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top12" :style="tStyle12"></div>
                        </li>
                    </ul>
                    <ul>
                        <li>短袖T恤</li>
                        <li>卫衣/套头衫</li>
                        <li>夹克/外套</li>
                        <li>背心</li>
                        <li>运动套装</li>
                    </ul>
                </div>    
            </div>
        </div>
        <!-- 第六层：产品系列 -->
        <div class="six-out">
            <div class="six">
                <div class="six-top">
                    <span>产品系列</span>
                    <span>^</span>
                </div>
                <div class="six-bottom">
                    <ul id="sel3">
                        <li>
                            <div @click="bot13" :style="bStyle13"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top13" :style="tStyle13"></div>
                        </li>
                        <li>
                            <div @click="bot14" :style="bStyle14"><img src="../../assets/check-box.png" alt=""></div>
                            <div @click="top14" :style="tStyle14"></div>
                        </li>
                        <li>
                            
                            <div @click="bot15" :style="bStyle15"><img  src="../../assets/check-box.png" alt=""></div>
                            <div @click="top15" :style="tStyle15"></div>
                        </li>
                       
                    </ul>
                    <ul>
                        <li>Superstar</li>
                        <li>Falcon</li>
                        <li>Yung</li>
                        <li></li>
                    </ul>
                </div>    
            </div>
        </div>
        <!-- 第n层：筛选色 -->
        <div class="n-out">
            <div class="n">
                <div class="n-top">
                    <span>筛选色</span>
                    <span>^</span>
                </div>
                <div class="n-bottom">
                    <ul>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                    </ul>
                    <ul>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                    </ul>
                    <ul>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                    </ul>
                    <ul>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                        <li><a href="javascript:;"></a></li>
                    </ul>
                    <div></div> 
                </div>   
                <div style="clear:both;"></div> 
                
            </div>
        </div>
        <!-- 最后一层：尺码 -->
        <div class="m-out">
            <div class="m">
                <div class="m-top">
                    <span>尺码</span>
                    <span>^</span>
                </div>
                <div class="m-bottom">
                    <select name="" id="" size="3">
                        <option value="1">
                            <a href="javascript:;">30</a>
                        </option>    
                        <option value="2">
                            <a href="javascript:;">32</a>
                        </option>
                        <option value="3">
                            <a href="javascript:;">34</a>
                        </option>
                        <option value="4">
                            <a href="javascript:;">36</a>
                        </option>
                        <option value="5">
                            <a href="javascript:;">36.5</a>
                        </option>
                        <option value="6">
                            <a href="javascript:;">39</a>
                        </option>
                        <option value="7">
                            <a href="javascript:;">36</a>
                        </option>    
                        <option value="8">
                            <a href="javascript:;">36.5</a>
                        </option>
                        <option value="9">
                            <a href="javascript:;">39</a>
                        </option>
                        <option value="10">
                            <a href="javascript:;">40</a>
                        </option>   
                        <option value="11">
                            <a href="javascript:;">41</a>
                        </option>
                        <option value="12">
                            <a href="javascript:;">42</a>
                        </option>
                        <option value="13">
                            <a href="javascript:;">43</a>
                        </option>    
                        <option value="13">
                            <a href="javascript:;">44</a>
                        </option>
                        <option value="13">
                            <a href="javascript:;">45</a>
                        </option>
                    </select>
                </div>    
            </div>
        </div>
    </div>
    <div class="right">
        <div class="top">
            <div class="top-left">
                <select name="sort" id="1">
                    <option value="1">请选择排序方式</option>
                    <option value="2">默认排序</option>
                    <option value="3">销量从高到低</option>
                    <option value="4">最新上架时间</option>
                    <option value="5">价格从低到高</option>
                </select>
            </div>
            <div class="top-center">
                <span>显示</span>
                <span>50</span>
                <span>|</span>
                <span>100</span>
            </div>
            <div class="top-right">
                <span>页数</span>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <span>/14</span>
                <a href="javascript:;">&lt;</a>
                <a href="javascript:;">&gt;</a>
            </div>
        </div>
        <div class="one-floor">
            <div class="aaa">
                <img src="../../assets/1561550303961584_324X324.jpg" alt="">
                <div class="aaa-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="bbb">
                <img src="../../assets/15269513174383794_230X230.jpg" alt="">
                <div class="bbb-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ccc">
                <img src="../../assets/15350784945156878_2000X2000.jpg" alt="">
                <div class="ccc-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ddd">
                <img src="../../assets/1541157109424901_230X230.jpg" alt="">
                <div class="ddd-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
        </div>
        <div class="two-floor">
            <div class="aaa">
                <img src="../../assets/1.jpg" alt="">
                <div class="aaa-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="bbb">
                <img src="../../assets/2.jpg" alt="">
                <div class="bbb-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ccc">
                <img src="../../assets/5.jpg" alt="">
                <div class="ccc-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ddd">
                <img src="../../assets/6.jpg" alt="">
                <div class="ddd-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
        </div>
        <div class="three-floor">
            <div class="aaa">
                <img src="../../assets/9.jpg" alt="">
                <div class="aaa-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="bbb">
                <img src="../../assets/10.jpg" alt="">
                <div class="bbb-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ccc">
                <img src="../../assets/11.jpg" alt="">
                <div class="ccc-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ddd">
                <img src="../../assets/15.jpg" alt="">
                <div class="ddd-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
        </div>
        <div class="four-floor">
            <div class="aaa">
                <img src="../../assets/3.jpg" alt="">
                <div class="aaa-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="bbb">
                <img src="../../assets/4.jpg" alt="">
                <div class="bbb-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ccc">
                <img src="../../assets/7.jpg" alt="">
                <div class="ccc-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>

                </div>
            </div>
            <div class="ddd">
                <img src="../../assets/8.jpg" alt="">
                <div class="ddd-text">
                    <span>UltraBoost LACLESS Parley</span>
                    <span>跑步鞋</span> 
                    <span>￥1699</span>
                    <a href="javascript:;" class="buy1">加入购物车→</a>
                    <a href="javascript:;" class="buy2"></a>
                </div>
            </div>
        </div>
    </div>
</div>
<my-footer></my-footer>
</div>
</template>
<script>
export default {
    data(){
        return{
           tStyle1:{
               "z-index":10
           },
           bStyle1:{
               "z-index":10
           },
           tStyle2:{
               "z-index":10
           },
           bStyle2:{
               "z-index":10
           },
           tStyle3:{
               "z-index":10
           },
           bStyle3:{
               "z-index":10
           },
           tStyle4:{
               "z-index":10
           },
           bStyle4:{
               "z-index":10
           },
           tStyle5:{
               "z-index":10
           },
           bStyle5:{
               "z-index":10
           },
           tStyle6:{
               "z-index":10
           },
           bStyle6:{
               "z-index":10
           },
           tStyle7:{
               "z-index":10
           },
           bStyle7:{
               "z-index":10
           },

            tStyle8:{
               "z-index":10
           },
           bStyle8:{
               "z-index":10
           },
           tStyle9:{
               "z-index":10
           },
           bStyle9:{
               "z-index":10
           },
           tStyle10:{
               "z-index":10
           },
           bStyle10:{
               "z-index":10
           },
           tStyle11:{
               "z-index":10
           },
           bStyle11:{
               "z-index":10
           },
           tStyle12:{
               "z-index":10
           },
           bStyle12:{
               "z-index":10
           },

            tStyle13:{
               "z-index":10
           },
           bStyle13:{
               "z-index":10
           },
           tStyle14:{
               "z-index":10
           },
           bStyle14:{
               "z-index":10
           },
           tStyle15:{
               "z-index":10
           },
           bStyle15:{
               "z-index":10
           },
        }
    },
    methods:{
      top1(){
          this.bStyle1["z-index"]+=1;
      },
      bot1(){
          this.tStyle1["z-index"]+=1;
      },
       top2(){
          this.bStyle2["z-index"]+=1;
      },
      bot2(){
          this.tStyle2["z-index"]+=1;
      },
       top3(){
          this.bStyle3["z-index"]+=1;
      },
      bot3(){
          this.tStyle3["z-index"]+=1;
      },
       top4(){
          this.bStyle4["z-index"]+=1;
      },
      bot4(){
          this.tStyle4["z-index"]+=1;
      },

      top5(){
          this.bStyle5["z-index"]+=1;
      },
      bot5(){
          this.tStyle5["z-index"]+=1;
      },
       top6(){
          this.bStyle6["z-index"]+=1;
      },
      bot6(){
          this.tStyle6["z-index"]+=1;
      },
       top7(){
          this.bStyle7["z-index"]+=1;
      },
      bot7(){
          this.tStyle7["z-index"]+=1;
      },


      top8(){
          this.bStyle8["z-index"]+=1;
      },
      bot8(){
          this.tStyle8["z-index"]+=1;
      },
       top9(){
          this.bStyle9["z-index"]+=1;
      },
      bot9(){
          this.tStyle9["z-index"]+=1;
      },

      top10(){
          this.bStyle10["z-index"]+=1;
      },
      bot10(){
          this.tStyle10["z-index"]+=1;
      },
       top11(){
          this.bStyle11["z-index"]+=1;
      },
      bot11(){
          this.tStyle11["z-index"]+=1;
      },
       top12(){
          this.bStyle12["z-index"]+=1;
      },
      bot12(){
          this.tStyle12["z-index"]+=1;
      },
    
      top13(){
          this.bStyle13["z-index"]+=1;
      },
      bot13(){
          this.tStyle13["z-index"]+=1;
      },
       top14(){
          this.bStyle14["z-index"]+=1;
      },
      bot14(){
          this.tStyle14["z-index"]+=1;
      },
       top15(){
          this.bStyle15["z-index"]+=1;
      },
      bot15(){
          this.tStyle15["z-index"]+=1;
      },
    }
}
</script>
<style scoped>
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}
.all{
    display: flex;
    justify-content: space-between;
}
.left{
width:200px;
height:1100px;
border:1px solid #eee;
margin-top:20px;
}
.one-out{
    padding:0 10px;
    background-color:#eee;
}
.one{
    height:40px;
    display: flex;
    justify-content:space-between;
    align-items: center;
   
    border-bottom:1px solid rgb(214, 213, 213);
}
.one span:first-child{
    font-size:16px;
    font-weight:bold;

}
.one span:last-child{
    font-size: 10px;

}
.one-bot{
    height:25px;
}

.two-out{
    padding:0 10px;
  
}
.two {
    height:40px;
    border-bottom:1px solid rgb(214, 213, 213);
    display: flex;
    justify-content:flex-start;
    align-items: center;
}

.two span{
    font-size:16px;
    font-weight:bold;

}
/* 第三层：性别=============================================== */
.three-out{
    padding:0 10px;
  
}
.three{
    border-bottom:1px solid rgb(214, 213, 213);
}
.three-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.three-top span:first-child{
    font-weight:bold;
}

.three-bottom{
    /* border:2px solid #000; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top:10px;
}
.three-bottom ul{
    list-style-type: none;
}
.three-bottom ul:first-child{
    position: relative;
}
.three-bottom ul:first-child li:nth-child(1){
    margin:10px 0px ;
    position: absolute;
    top:-65px;
    left:0px;
}
.three-bottom ul:first-child li:nth-child(2){
    margin:10px 0px ;
    position: absolute;
    top:-35px;
    left:0px;
}
.three-bottom ul:first-child li:nth-child(3){
    margin:10px 0px ;
    position: absolute;
    top:-5px;
    left:0px;
}
.three-bottom ul:first-child li:nth-child(4){
    margin:10px 0px ;
    position: absolute;
    top:25px;
    left:0px;
}
.three-bottom ul:first-child li div{
    width:20px;
    height:20px;
    border:2px solid #000;
}
.three-bottom ul:first-child li img{
    width:25px;
    height:25px;
    margin-left:-4px;
    margin-top:-4px;
}
.three-bottom ul:last-child li {
    /* margin-left: 5px;
    margin-bottom: 3px; */
    margin:10px 10px;
    margin-left:25px;
    font-size: 14px;
    font-weight: bold;
}
.three-bottom ul:first-child li div:last-child{
    position: absolute;
    top:0px;
    left:0px;
    background-color: #fff;
    z-index:10;
} 
.three-bottom ul:first-child li div:first-child{
    position: absolute;
    top:0px;
    left:0px;

    z-index: 10;
}
/* .active{
   opacity: 0;
   display: none;
}
/* 第四层：年龄段=============================================== */
.four-out{
    padding:0 10px;
  
}
.four{
    border-bottom:1px solid rgb(214, 213, 213);
}
.four-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.four-top span:first-child{
    font-weight:bold;
}

.four-bottom{
    /* border:2px solid #000; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top:10px;
}
.four-bottom ul{
    list-style-type: none;
}

.four-bottom ul:first-child{
    position: relative;
}
.four-bottom ul:first-child li:nth-child(1){
    margin:10px 0px ;
    position: absolute;
    top:-50px;
    left:0px;
}
.four-bottom ul:first-child li:nth-child(2){
    margin:10px 0px ;
    position: absolute;
    top:-20px;
    left:0px;
}
.four-bottom ul:first-child li:nth-child(3){
    margin:10px 0px ;
    position: absolute;
    top:10px;
    left:0px;
}

.four-bottom ul:first-child li div{
    width:20px;
    height:20px;
    border:2px solid #000;
}
.four-bottom ul:first-child li img{
    width:25px;
    height:25px;
    margin-left:-4px;
    margin-top:-4px;
}
.four-bottom ul:last-child li {
    /* margin-left: 5px;
    margin-bottom: 3px; */
    margin:10px 10px;
    margin-left:25px;
    font-size: 14px;
    font-weight: bold;
}
.four-bottom ul:first-child li div:last-child{
    position: absolute;
    top:0px;
    left:0px;
    background-color: #fff;
    z-index:10;
} 
.four-bottom ul:first-child li div:first-child{
    position: absolute;
    top:0px;
    left:0px;

    z-index: 10;
}
/* 第五层：产品类型========================================== */
.five-out{
    padding:0 10px;
  
}
.five{
    border-bottom:1px solid rgb(214, 213, 213);
}
.five-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.five-top span:first-child{
    font-weight:bold;
}
.five-bottom{
    /* border:2px solid #000; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top:10px;
}
.five-bottom ul{
    list-style-type: none;
}
.five-bottom ul:first-child{
    position: relative;
}
.five-bottom ul:first-child li:nth-child(1){
    margin:10px 0px ;
    position: absolute;
    top:-80px;
    left:0px;
}
.five-bottom ul:first-child li:nth-child(2){
    margin:10px 0px ;
    position: absolute;
    top:-50px;
    left:0px;
}
.five-bottom ul:first-child li:nth-child(3){
    margin:10px 0px ;
    position: absolute;
    top:-20px;
    left:0px;
}
.five-bottom ul:first-child li:nth-child(4){
    margin:10px 0px ;
    position: absolute;
    top:10px;
    left:0px;
}
.five-bottom ul:first-child li:nth-child(5){
    margin:10px 0px ;
    position: absolute;
    top:40px;
    left:0px;
}
.five-bottom ul:first-child li div{
    width:20px;
    height:20px;
    border:2px solid #000;
}
.five-bottom ul:first-child li img{
    width:25px;
    height:25px;
    margin-left:-4px;
    margin-top:-4px;
}
.five-bottom ul:last-child li {
    /* margin-left: 5px;
    margin-bottom: 3px; */
    margin:10px 10px;
    margin-left:25px;
    font-size: 14px;
    font-weight: bold;
}
.five-bottom ul:first-child li div:last-child{
    position: absolute;
    top:0px;
    left:0px;
    background-color: #fff;
    z-index:10;
} 
.five-bottom ul:first-child li div:first-child{
    position: absolute;
    top:0px;
    left:0px;

    z-index: 10;
}
/* 第六层：产品系列 ========================================*/
.six-out{
    padding:0 10px;
  
}
.six{
    border-bottom:1px solid rgb(214, 213, 213);
}
.six-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.six-top span:first-child{
    font-weight:bold;
}
.six-bottom{
    /* border:2px solid #000; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top:10px;
}
.six-bottom ul{
    list-style-type: none;
}

.six-bottom ul:first-child{
    position: relative;
}
.six-bottom ul:first-child li:nth-child(1){
    margin:10px 0px ;
    position: absolute;
    top:-50px;
    left:0px;
}
.six-bottom ul:first-child li:nth-child(2){
    margin:10px 0px ;
    position: absolute;
    top:-20px;
    left:0px;
}
.six-bottom ul:first-child li:nth-child(3){
    margin:10px 0px ;
    position: absolute;
    top:10px;
    left:0px;
}

.six-bottom ul:first-child li div{
    width:20px;
    height:20px;
    border:2px solid #000;
}
.six-bottom ul:first-child li img{
    width:25px;
    height:25px;
    margin-left:-4px;
    margin-top:-4px;
}
.six-bottom ul:last-child li {
    /* margin-left: 5px;
    margin-bottom: 3px; */
    margin:10px 10px;
    margin-left:25px;
    font-size: 14px;
    font-weight: bold;
}
.six-bottom ul:first-child li div:last-child{
    position: absolute;
    top:0px;
    left:0px;
    background-color: #fff;
    z-index:10;
} 
.six-bottom ul:first-child li div:first-child{
    position: absolute;
    top:0px;
    left:0px;

    z-index: 10;
}
/* 第n层：筛选色 */
.n-out{
    padding:0 10px;
  
}
.n{
    border-bottom:1px solid rgb(214, 213, 213);
}
.n-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.n-top span:first-child{
    font-weight:bold;
}
.n-bottom{
/* display: none; */
margin-top:10px;
position: relative;
height:180px;
}
.n-bottom ul{
     
    list-style-type: none;

}
.n-bottom div{
    clear: both;
}
.n-bottom ul:nth-child(1){
    position: absolute;
    top:10px;
    left:0px;
}
/* 每个ul里面的小li a 的颜色 */
.n-bottom ul:nth-child(1) li:nth-child(1) a{
    background-color:rgba(32, 5, 5, 0.692);
}
.n-bottom ul:nth-child(1) li:nth-child(2) a{
    background-color:rgb(20, 2, 2);
}
.n-bottom ul:nth-child(1) li:nth-child(3) a{
    background-color:rgb(27, 102, 8);
}
.n-bottom ul:nth-child(1) li:nth-child(4) a{
    background-color:rgba(228, 117, 13, 0.767);
}
.n-bottom ul:nth-child(2){
    position: absolute;
    top:10px;
    left:40px;
}
/* 每个ul里面的小li a 的颜色 */
.n-bottom ul:nth-child(2) li:nth-child(1){ 
    background-color:rgb(236, 219, 219);
}
.n-bottom ul:nth-child(2) li:nth-child(2) a{
    background-color:rgb(138, 9, 120);
}
.n-bottom ul:nth-child(2) li:nth-child(3) a{
    background-color:rgba(0, 0, 0, 0.363);
}
.n-bottom ul:nth-child(2) li:nth-child(4) a{
    background-color:rgb(62, 247, 15);
}
.n-bottom ul:nth-child(3){
    position: absolute;
    top:10px;
    left:80px;
}
/* 每个ul里面的小li a 的颜色 */
.n-bottom ul:nth-child(3) li:nth-child(1) a{
    background-color:rgb(226, 19, 19);
}
.n-bottom ul:nth-child(3) li:nth-child(2) a{
    background-color:rgb(239, 243, 17);
}
.n-bottom ul:nth-child(3) li:nth-child(3) a{
    background-color:rgb(20, 191, 243);
}
.n-bottom ul:nth-child(3) li:nth-child(4) a{
    background-color:rgb(86, 10, 226);
}
.n-bottom ul:nth-child(4){
    position: absolute;
    top:10px;
    left:120px;
}
/* 每个ul里面的小li a 的颜色 */
.n-bottom ul:nth-child(4) li:nth-child(1) a{
    background-color:rgb(0, 0, 0);
}
.n-bottom ul:nth-child(4) li:nth-child(2) a{
    background-color:rgb(228, 31, 31);
}
.n-bottom ul:nth-child(4) li:nth-child(3) a{
    background-color:rgb(0, 0, 0);
}
.n-bottom ul:nth-child(4) li:nth-child(4) a{
    background-color:rgb(20, 175, 223);
}
.n-bottom ul li {
    margin-bottom:20px;
}
.n-bottom ul li a{
    display: inline-block;
    width:20px;
    height:20px;
    /* border:2px solid #000; */
}

/* 第m层：筛选色 */
.m-out{
    /* margin-top:200px; */
    padding:0 10px;
    margin:px;
}
.m{
    border-bottom:1px solid rgb(214, 213, 213);
}
.m-top{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.m-top span:first-child{
    font-weight:bold;
}
.m-bottom{
/* display: none; */
margin-top:10px;
position: relative;
}
.m-bottom select{
    width:100px;
}
.m-bottom  option{
    display: inline-block;
    width:30px;
    height:25px;
    border:1px solid #ccc;
}
/* 右边大图================================================== */
.right{
    margin-top:20px;
    margin-right:250px;

}
.right .one-floor{
    display: flex;
    justify-content: center;

}
.right .one-floor  img{
    width:200px;
    height:200px;
}
.right .one-floor div{
    margin-left:20px;

}
/* 第一层第一张图片 */
.right .one-floor .aaa{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .one-floor .aaa .aaa-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .one-floor .aaa img{
    vertical-align: middle;
    transition:all 1s;
}
.right .one-floor .aaa:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .one-floor .aaa:hover .aaa-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .one-floor .aaa .aaa-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .one-floor .aaa .aaa-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .one-floor .aaa .aaa-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .one-floor .aaa .aaa-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;

    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .one-floor .aaa .aaa-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第一层第二张图片 */
.right .one-floor .bbb{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .one-floor .bbb .bbb-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .one-floor .bbb img{
    vertical-align: middle;
    transition:all 1s;
}
.right .one-floor .bbb:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .one-floor .bbb:hover .bbb-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .one-floor .bbb .bbb-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .one-floor .bbb .bbb-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .one-floor .bbb .bbb-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .one-floor .bbb .bbb-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .one-floor .bbb .bbb-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第一层第三张图片 ========================================*/
.right .one-floor .ccc{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .one-floor .ccc .ccc-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .one-floor .ccc img{
    vertical-align: middle;
    transition:all 1s;
}
.right .one-floor .ccc:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .one-floor .ccc:hover .ccc-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .one-floor .ccc .ccc-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .one-floor .ccc .ccc-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .one-floor .ccc .ccc-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .one-floor .ccc .ccc-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .one-floor .ccc .ccc-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第一层第四张图片 */
.right .one-floor .ddd{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .one-floor .ddd .ddd-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .one-floor .ddd img{
    vertical-align: middle;
    transition:all 1s;
}
.right .one-floor .ddd:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .one-floor .ddd:hover .ddd-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .one-floor .ddd .ddd-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .one-floor .ddd .ddd-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .one-floor .ddd .ddd-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .one-floor .ddd .ddd-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .one-floor .ddd .ddd-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}

/* 第二层===================================================== */
.right .two-floor{
    display: flex;
    justify-content: center;

}
.right .two-floor  img{
    width:200px;
    height:200px;
}
.right .two-floor div{
    margin-left:20px;

}
/* 第二层第一张图片 */
.right .two-floor .aaa{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .two-floor .aaa .aaa-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .two-floor .aaa img{
    vertical-align: middle;
    transition:all 1s;
}
.right .two-floor .aaa:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .two-floor .aaa:hover .aaa-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .two-floor .aaa .aaa-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .two-floor .aaa .aaa-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .two-floor .aaa .aaa-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .two-floor .aaa .aaa-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;

    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .two-floor .aaa .aaa-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第二层第二张图片 */
.right .two-floor .bbb{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .two-floor .bbb .bbb-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .two-floor .bbb img{
    vertical-align: middle;
    transition:all 1s;
}
.right .two-floor .bbb:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .two-floor .bbb:hover .bbb-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .two-floor .bbb .bbb-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .two-floor .bbb .bbb-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .two-floor .bbb .bbb-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .two-floor .bbb .bbb-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .two-floor .bbb .bbb-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第二层第三张图片 ========================================*/
.right .two-floor .ccc{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .two-floor .ccc .ccc-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .two-floor .ccc img{
    vertical-align: middle;
    transition:all 1s;
}
.right .two-floor .ccc:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .two-floor .ccc:hover .ccc-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .two-floor .ccc .ccc-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .two-floor .ccc .ccc-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .two-floor .ccc .ccc-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .two-floor .ccc .ccc-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .two-floor .ccc .ccc-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第二层第四张图片 */
.right .two-floor .ddd{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .two-floor .ddd .ddd-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .two-floor .ddd img{
    vertical-align: middle;
    transition:all 1s;
}
.right .two-floor .ddd:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .two-floor .ddd:hover .ddd-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .two-floor .ddd .ddd-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .two-floor .ddd .ddd-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .two-floor .ddd .ddd-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .two-floor .ddd .ddd-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .two-floor .ddd .ddd-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第三层========================================================== */
.right .three-floor{
    display: flex;
    justify-content: center;

}
.right .three-floor  img{
    width:200px;
    height:200px;
}
.right .three-floor div{
    margin-left:20px;

}
/* 第三层第一张图片 */
.right .three-floor .aaa{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .three-floor .aaa .aaa-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .three-floor .aaa img{
    vertical-align: middle;
    transition:all 1s;
}
.right .three-floor .aaa:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .three-floor .aaa:hover .aaa-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .three-floor .aaa .aaa-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .three-floor .aaa .aaa-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .three-floor .aaa .aaa-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .three-floor .aaa .aaa-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;

    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .three-floor .aaa .aaa-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第三层第二张图片 */
.right .three-floor .bbb{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .three-floor .bbb .bbb-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .three-floor .bbb img{
    vertical-align: middle;
    transition:all 1s;
}
.right .three-floor .bbb:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .three-floor .bbb:hover .bbb-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .three-floor .bbb .bbb-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .three-floor .bbb .bbb-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .three-floor .bbb .bbb-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .three-floor .bbb .bbb-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .three-floor .bbb .bbb-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第三层第三张图片 ========================================*/
.right .three-floor .ccc{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .three-floor .ccc .ccc-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .three-floor .ccc img{
    vertical-align: middle;
    transition:all 1s;
}
.right .three-floor .ccc:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .three-floor .ccc:hover .ccc-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .three-floor .ccc .ccc-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .three-floor .ccc .ccc-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .three-floor .ccc .ccc-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .three-floor .ccc .ccc-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .three-floor .ccc .ccc-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第三层第四张图片 */
.right .three-floor .ddd{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .three-floor .ddd .ddd-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .three-floor .ddd img{
    vertical-align: middle;
    transition:all 1s;
}
.right .three-floor .ddd:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .three-floor .ddd:hover .ddd-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .three-floor .ddd .ddd-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .three-floor .ddd .ddd-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .three-floor .ddd .ddd-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .three-floor .ddd .ddd-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .three-floor .ddd .ddd-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第四层============================================================= */
.right .four-floor{
    display: flex;
    justify-content: center;

}
.right .four-floor  img{
    width:200px;
    height:200px;
}
.right .four-floor div{
    margin-left:20px;

}
/* 第四层第一张图片 */
.right .four-floor .aaa{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .four-floor .aaa .aaa-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .four-floor .aaa img{
    vertical-align: middle;
    transition:all 1s;
}
.right .four-floor .aaa:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .four-floor .aaa:hover .aaa-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .four-floor .aaa .aaa-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .four-floor .aaa .aaa-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .four-floor .aaa .aaa-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .four-floor .aaa .aaa-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;

    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .four-floor .aaa .aaa-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第四层第二张图片 */
.right .four-floor .bbb{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .four-floor .bbb .bbb-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .four-floor .bbb img{
    vertical-align: middle;
    transition:all 1s;
}
.right .four-floor .bbb:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .four-floor .bbb:hover .bbb-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .four-floor .bbb .bbb-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .four-floor .bbb .bbb-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .four-floor .bbb .bbb-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .four-floor .bbb .bbb-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .four-floor .bbb .bbb-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第四层第三张图片 ========================================*/
.right .four-floor .ccc{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .four-floor .ccc .ccc-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .four-floor .ccc img{
    vertical-align: middle;
    transition:all 1s;
}
.right .four-floor .ccc:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .four-floor .ccc:hover .ccc-text{
    opacity: 1;
    /* z-index: 100; */
    
}
.right .four-floor .ccc .ccc-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .four-floor .ccc .ccc-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .four-floor .ccc .ccc-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .four-floor .ccc .ccc-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .four-floor .ccc .ccc-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
/* 第四层第四张图片 */
.right .four-floor .ddd{
    position: relative;
    overflow: hidden;
    border:2px solid #ccc;
    perspective: 800px;
}
.right .four-floor .ddd .ddd-text{
    position: absolute;
    top:0px;
    left:0px;
    z-index: -10;
    opacity: 0;
    transition:all 2s
}
.right .four-floor .ddd img{
    vertical-align: middle;
    transition:all 1s;
}
.right .four-floor .ddd:hover img{
transform-origin: center bottom;
transform:rotateX(75deg);


}
.right .four-floor .ddd:hover .ddd-text{
    opacity: 1;
    /* z-index: 1;  */
    
}
.right .four-floor .ddd .ddd-text span:nth-child(1){
    margin-top:10px;
    display: block;
    font-size: 12px;
}
.right .one-floor .ddd .ddd-text span:nth-child(2){
    display: block;
    font-size: 10px;  
}
.right .four-floor .ddd .ddd-text span:nth-child(3){
    display: block;
    font-size: 12px;
}
.right .four-floor .ddd .ddd-text a.buy1{
    position: absolute;
    top:50px;
    left:0px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    z-index: 10;
}
.right .four-floor .ddd .ddd-text a.buy2{
    position: absolute;
    top:52px;
    left:2px;
    display: block;
    margin-top:10px;
    width:100px;
    height:30px;
    text-decoration: none;
    background-color: #ccc;
    border:1px solid #000;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
.right .one-floor,.two-floor,.three-floor,.four-floor{
    margin-bottom: 20px;
}
.right .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;
    margin-left:20px;
}
.right .top .top-left select{
    border:none;
    outline: none;
    height: 40px;
    width:150px;
    outline:1px solid #ccc;
}
.right .top .top-left select option{
    border:none;
    outline: none;
    outline:1px solid #000; 
    height:30px;
    padding-top: 40px;
    margin-top:40px;
}
</style>
