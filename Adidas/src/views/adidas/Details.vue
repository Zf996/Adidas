<template>

    <div>
        <my-header></my-header>
        <div class="container">
            <div class="left-out">
                <img @click="toTop" class="arrow-top" style="width:40px;height:40px;" :src="toTopImgUrl" alt="">
                <div class="left">
                    <ul :style="unStyle" >
                        <li v-for="(item,i) of imgUrl" :key="i">
                            <img @click="get" :data-aaa='item.urlmd'  :src="item.url" alt="" style="width:50px;height:50px;border:1px solid #CCCCCC" /> 
                        </li>   
                    </ul>
               
                </div>
                 <img @click="toBottom" class="arrow-bottom" style="width:40px;height:40px;" :src="toBottomImgUrl" alt="">
            </div>
            <div class="center" style="width:350px;height:350px" >
                <img :src="ImgUrl" alt="" style="width:100%;height:100%;border:1px solid #CCCCCC"/>
            </div>
            <div class="right">
                <h2>ULTRABOOST 19 M 跑步鞋</h2>
                <span class="pingjia">
                    <img src="../../assets/star.png" alt="">
                    <img src="../../assets/star.png" alt="">
                    <img src="../../assets/star.png" alt="">
                    <img src="../../assets/star.png" alt="">
                    <a href="javascript:;">共条111条评价</a>
                </span>
                <span class="price">￥1399</span>
                <span class="details">1号黑色/亮白/橘色[G27519]</span>
                <div>
                    <img src="" alt="">
                </div>
                <div class="ruler">
                    <img src="../../assets/ruler.png" alt="">
                    <a href="javascript:;">查看尺码对照表</a>
                </div>
                <div class="size">
                    <span>请选择尺码
                        <div>
                            <img @click="select" :class="show2" 
                            src="../../assets/select-expand.png" alt="">
                        </div>
                        <div>
                            <img @click="select2" :class="show1" 
                            src="../../assets/select-expand2.png" alt="">
                        </div>
                    </span>
                    <div class="list" :class="show1">
                        <a>40</a>
                        <a>40.5</a>
                        <a>41</a>
                        <a>42</a>
                        <a>42.5</a>
                        <a>43</a>
                        <a>44</a>
                        <a>44.5</a>
                        <a>45</a>
                    </div>
                </div>
                <div class="buy">
                    <a href="">立即购买<span>→</span></a>
                    <a href=""></a>
                    <a href="">加入购物袋<span>→</span></a>
                    <a href=""></a>
                </div>
            </div>
        </div>
<my-footer></my-footer>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                imgUrl:[
                    {index:1,url:require('../../assets/details-one.jpg'),urlmd:require('../../assets/details-one-md.jpg')},
                    {index:2,url:require('../../assets/details-two.jpg'),urlmd:require('../../assets/details-two-md.jpg')},
                    {index:3,url:require('../../assets/details-three.jpg'),urlmd:require('../../assets/details-three-md.jpg')},
                    {index:4,url:require('../../assets/details-four.jpg'),urlmd:require('../../assets/details-four-md.jpg')},
                    {index:5,url:require('../../assets/details-five.jpg'),urlmd:require('../../assets/details-five-md.jpg')},
                    {index:6,url:require('../../assets/details-seven.jpg'),urlmd:require('../../assets/details-seven-md.jpg')},
                    {index:7,url:require('../../assets/details-ten.jpg'),urlmd:require('../../assets/details-ten-md.jpg')}
                ],
                ImgUrl:require('../../assets/details-one-md.jpg'),
                toTopImgUrl:require('../../assets/arrow-top-wihte.png'),
                toBottomImgUrl:require('../../assets/arrow-bottom-black.png'),
                toImgUrl:[
                    require('../../assets/arrow-top-wihte.png'),
                    require('../../assets/arrow-top-black.png'),
                    require('../../assets/arrow-bottom-wihte.png'),
                    require('../../assets/arrow-bottom-black.png')
                ],
                show1:{
                    show:false,
                    hide:true
                },
                show2:{
                    show:true,
                    hide:false
                },
                unStyle:{
                    "margin-top":0,
                    transition:""
                },
                i:0
            }
        },
        methods:{
             toTop(){
                this.toBottomImgUrl=this.toImgUrl[3];
                this.i--;
               if(this.i>=0){
                var mp= (parseInt(this.unStyle["margin-top"])+52)+"px";
                this.unStyle["margin-top"]=mp;
                this.unStyle["transition"]="margin-top .5s linear";
                if(this.i==0){
                     this.toTopImgUrl=this.toImgUrl[0];
                }
               }else{
                   this.i=0;
               }
               console.log(this.unStyle["margin-top"]);
           },
           toBottom(){
               this.toTopImgUrl=this.toImgUrl[1];
               this.i++;
               if(this.i<=3){
                var mp= (parseInt(this.unStyle["margin-top"])-52)+"px";
                this.unStyle["margin-top"]=mp;
                this.unStyle["transition"]="margin-top .5s linear";
                 if(this.i==3)
                 {
                    //  console.log(this.i);
                   this.toBottomImgUrl=this.toImgUrl[2];
                   }
               }else{
                   this.i=3;
               }
              
               console.log(this.unStyle["margin-top"]);
              
           },
            get(e){
                this.ImgUrl=e.target.dataset.aaa;
            
            },
            select(){
                // console.log(111);
                this.show1.show=true;//向上显示
                this.show1.hide=false;//
                this.show2.show=false;//向下隐藏
                this.show2.hide=true;
            },
            select2(){
                // console.log(222);
                this.show1.show=false;//向上隐藏
                this.show1.hide=true;
                this.show2.show=true;//向下显示
                this.show2.hide=false;
            }
        }
    }
</script>
<style scoped>

*{margin:0px;
padding:0px;
box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #ECEEF0;
    margin-top:50px;
    height: 500px;

}
.container .left-out{
    margin-left:200px;
}
.container .left ul{
    list-style-type: none;
} 
.container .center {
      margin-left:50px;
}

.container .right{
    position: relative;
    top:0px;
    left:0px;
    border:1px solid #E9E9E9;
    background-color: #fff;
    padding-left: 10px;
    box-shadow: 0 1px 6px 0 rgba(85, 85, 85, 0.5);
    height:500px;  
    margin-left: 50px;
}
.container .right span{
    display: block;
    margin-bottom: 15px;
}
.container .right span.price{
    font-weight: bold;
}
.container .right span.pingjia{
    display: block;
    display: flex;
    justify-content:flex-start ;
    align-items: center;
}
.container .right span.details{
    font-size:12px;
}
.container .right a{
    color:#000;
    font-size :12px;
}
.container .right h2{
    margin-top:20px;
}
.container .right div.ruler{
   display: flex;
   justify-content: flex-start;
   margin-bottom: 10px;

}
.container .right div.size {
   position: relative;
    width: 400px;
    height: 60px;
    /* border:1px solid #ddd; */
} 
.container .right div.size span{
    display: inline-block;
    width:200px;
    height: 40px;
    border:1px solid #000;
    line-height: 40px;
    padding-left: 5px;
    margin-bottom: 0px;
    position: absolute;

}
.container .right div.size span div:first-child img{
    position: absolute;
    top:13px;
    left: 170px;
}
.container .right div.size span div:last-child img{
    position: absolute;
    top:13px;
    left: 170px;
    /* z-index: -1; */
}
.container .right div.size div.list{
    position: absolute;
    top:40px;
    left:0px;
    width:300px;
    height:200px;
    border: 1px solid #000;
    z-index: 200;
  background-color:#000;
}
.right .size .list a{
    color:#fff;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    text-decoration: none;
    width:50px;
    height:50px;
    border:1px solid #C8CBCC;
     margin-top:10px;
    margin-left:20px;
}
.show{
    display: block;
    /* opacity: 1; */
}
.hide{
    display: none;
    /* opacity: 0; */
}
.container .right div.buy{
    position: relative;
}
.container .right div.buy a{
    text-decoration: none;
}
.container .right div.buy a:first-child{
    display: block;
    width:300px;
    height: 42px;
    background-color: #000;
    border:1px solid #000;
    color:#fff;
    text-align: left;
    padding-left:20px;
    line-height: 42px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom:20px;
}
.container .right div.buy a:first-child span{
    display: inline-block;
    color:#fff;
    margin-left:200px;
}
.container .right div.buy a:nth-child(2){
    position: absolute;
    top:2px;
    left:2px;
    width:300px;
    height: 42px;
    border:1px solid #000;
}
.container .right div.buy a:nth-child(3){
    display: block;
    width:300px;
    height: 42px;
    background-color: #fff;
    border:1px solid #000;
    color:#000;
    text-align: left;
    padding-left:20px;
    line-height: 42px;
    font-weight: bold;
    font-size: 14px;
}
.container .right div.buy a:nth-child(3) span{
    display: inline-block;
    color:#000;
    margin-left:186px;
}
.container .right div.buy a:nth-child(4){
    position: absolute;
    top:64px;
    left:2px;
    width:300px;
    height: 42px;
    border:1px solid #000;
    z-index: -5;
}
/* 左侧ul图片列表 */
.left{
    border:1px solid #000;
    width:52px;
    height:215px;
    overflow: hidden;
    
}
.left-out{
    position: relative;
}
.left-out .arrow-top{
    position: absolute;
    top:-40px;
    left:5px;

}
.left-out .arrow-bottom{
    position: absolute;
    bottom:-40px;
    left:5px;

}

</style>
