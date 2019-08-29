<template>
    <div>
        <div class="footer">
        <div class="footer-black">
            <ul>
                <li>
                    <a href="javasript:;">联系我们</a>
                </li>
                <li>
                    <a href="javasript:;">在线编辑</a>
                </li>
                <li>
                    <a href="javasript:;">400-999-0000</a>
                </li>
                <li>
                    <a href="javasript:;">service@adidas.com</a>
                </li>
                <li>
                    <a href="javasript:;">9:00-22:00</a>
                </li>
                <li>
                    <a href="javascript:;">订单追踪</a>
                </li>
            </ul> 
        </div>
        <div class="white">
            <ul class="left-one">
                <li><a href="javascript:;">产品</a></li>
                <li><a href="javascript:;">鞋类</a></li>
                <li><a href="javascript:;">服装</a></li>
                <li><a href="javascript:;">配件</a></li>
                <li><a href="javascript:;">最新上市</a></li>
                <li><a href="javascript:;">新品发售日历</a></li>
                <li><a href="javascript:;">限量发售</a></li>
            </ul>
            <ul class="left-two">
                <li><a href="javascript">运动</a></li>
                <li><a href="javascript">跑步</a></li>
                <li><a href="javascript">训练</a></li>
                <li><a href="javascript">足球</a></li>
                <li><a href="javascript">篮球</a></li>
                <li><a href="javascript">户外</a></li>
            </ul>
            <ul class="right-two">
                <li><a href="javascript">帮助中心</a></li>
                <li><a href="javascript">关于员工</a></li>
                <li><a href="javascript">尺码表</a></li>
                <li><a href="javascript">adiCLUB会员</a></li>
                <li><a href="javascript">门店查询</a></li>
                <li><a href="javascript">关于我们</a></li>
                <li><a href="javascript">企业社会负责</a></li>
            </ul>
            <ul class="right-one">
                <li><a href="javascript">网站政策</a></li>
                <li><a href="javascript">使用条款</a></li>
                <li><a href="javascript">隐私声明</a></li>
                <li><a href="javascript">物流配送规则</a></li>
                <li><a href="javascript">退换货规则</a></li>
                <li><a href="javascript">adiCLUB会员规则</a></li>
                <li><a href="javascript">下单指南</a></li>
                <li><a href="javascript">印制服务条款</a></li>
            </ul>
            <ul class="other-one">
                <li>
                    <a href="javascript:;">关注我们</a>
                </li>
            </ul>
            <ul class="other-two">
                <li>
                    <a href="javascirpt:;">职业发展</a>
                </li>
            </ul>
        </div>
        <div class="black-two">
            <ul>
                <li>中国</li>
                <li>隐私声明</li>
                <li>|</li>
                <li>使用条款</li>
                <li>|</li>
                <li>网站地图</li>
                <li>|</li>
                <li>@阿迪达斯体育(中国)有限公司保留所有权利</li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
.footer .footer-black{
    position: relative;
    width:100%;
    height:80px;
    background-color:#000;
}
.footer .footer-black ul{
position: absolute;
top:8px;
left:0px;
list-style: none;

}
.footer .footer-black ul>li{
  float:left;
  margin-left:80px;

}
.footer .footer-black ul>li a{
    font-size: 8px;
    font-weight: bold;
    color:#fff;
    text-decoration: none;
}
.footer .footer-black ul>li:last-child{
   margin-left:300px;
}
/* footer白色背景左边第一个模块 */
.white .left-one{
   float: left;
}
.white .left-one li{
 list-style-type: none;
 margin-bottom: 3px;
}
.white .left-one li a{
text-decoration: none;
color:#000;
font-size:13px;
}
.white .left-one li:first-child{
    margin-bottom: 10px;
}
.white .left-one li:first-child a{
    font-size:16px;
    font-weight: bold;
    
}
/* footer白色背景左边第2个模块 */
.white .left-two{
   float: left;
   margin-left: 150px;
}
.white .left-two li{
 list-style-type: none;
 margin-bottom: 3px;
}
.white .left-two li a{
text-decoration: none;
color:#000;
font-size:13px;
}
.white .left-two li:first-child{
    margin-bottom: 10px;
}
.white .left-two li:first-child a{
    font-size:16px;
    font-weight: bold;
    
}
/* footer白色背景右边第2个模块 */
.white .right-two{
    float: left;
    margin-left: 150px;
 }
 .white .right-two li{
  list-style-type: none;
  margin-bottom: 3px;
 }
 .white .right-two li a{
 text-decoration: none;
 color:#000;
 font-size:13px;
 }
 .white .right-two li:first-child{
     margin-bottom: 10px;
 }
 .white .right-two li:first-child a{
     font-size:16px;
     font-weight: bold;
     
 }
 /* footer白色背景右边第1个模块 */
.white .right-one{
    float: left;
    margin-left: 150px;
 }
 .white .right-one li{
  list-style-type: none;
  margin-bottom: 3px;
 }
 .white .right-one li a{
 text-decoration: none;
 color:#000;
 font-size:13px;
 }
 .white .right-one li:first-child{
     margin-bottom: 10px;
 }
 .white .right-one li:first-child a{
     font-size:16px;
     font-weight: bold;
     
 }
 .white .other-one{
    float: left;
    margin-left: 150px;
 }
 .white .other-one li{
     list-style-type: none;
 }
 .white .other-one li a{
    text-decoration: none;
    color:#000;
    font-size:16px;
    font-weight: bold;
 }

 .white .other-two{
    float: left;
    margin-left: 20px;
 }
 .white .other-two li{
     list-style-type: none;
 }
 .white .other-two li a{
    text-decoration: none;
    color:#000;
    font-size:16px;
    font-weight: bold;
 }
 .black-two{
     width:100%;
     height:40px;
     background-color:#000;
     float:left;


 }
 .black-two li{
     float:left;
     color:#eee;
     list-style: none ;
     font-size:8px;
     margin-left:10px;
     margin-right:10px;
 }

</style>
