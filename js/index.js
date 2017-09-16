var aside_btn=document.getElementsByClassName("aside_btn");
var main=document.getElementsByClassName("main")[0];
var footer=document.getElementsByClassName("footer")[0];
var option=document.getElementsByClassName("option");
var flagA,flagB,flagC,flagD;
var amn={
	name:'amn',
	src:'images/amn.png',
	alt:'阿玛尼',
	discounts:'2.8折',
	desc:'意大利•阿玛尼（Armani ）柔润红唇膏 3.8g，乳霜般的质地，羽毛般的轻薄，炫丽灿烂的颜色，点亮你的双唇。保湿滋润，持久亮泽。像是咬下一口夏日新鲜的水果味道。宛如女性的一枚新印章，色泽饱满莹润，体现你的优雅气质。',
	marketValue:'市场价 ￥140</br>您节省 ￥100.1',
	currentPrice:'39.9',
	num:'1518'
};
var MAC={
	name:'MAC',
	src:'images/mac.png',
	alt:'魅可',
	discounts:'4折',
	desc:'外色内润，与时尚一吻定情，魅可（MAC）时尚唇膏3g（多色可选）！柔美丝绒触感加高度饱和显色，诠释唇部色彩，将性感的“唇”情本色演绎！持久唇色不沾杯，一次补妆维持一天的亮丽唇色，唇色诱惑让他无法抗拒！',
	marketValue:'市场价 ￥180</br>您节省 ￥52.3',
	currentPrice:'100',
	num:'3425'
};
var qb={
	name:'qb',
	src:'images/qb.png',
	alt:'倩碧',
	discounts:'4.8折',
	desc:'倩碧(Clinique)卓越润肤乳啫喱配方125ml（无油），配方与肌肤自然滋润成分如出一辙，复制水油平衡状态，让肌肤即刻变成擅长导入养分的湿海绵。倩碧三部曲，创造净、透、光采好肌肤！护肤效果事半功倍，绽放肌肤健康光采！',
	marketValue:'市场价 ￥380</br>您节省 ￥152.3',
	currentPrice:'180',
	num:'2445'
};
var arr=[amn,MAC,qb];	
for(var i=0;i<aside_btn.length;i++){
	aside_btn[i].setAttribute("index",i);
	aside_btn[i].onmouseover=function(){
		var index=this.getAttribute("index");
		for(var i=0;i<aside_btn.length;i++){
			aside_btn[i].style.backgroundColor="#e7e7e7";
		}
		this.style.backgroundColor="#fff";
		if(index==0){
			footer.innerHTML="<li class='option'>意大利•阿玛尼（Armani ）柔润红唇膏 3.8g</li>\
								<li class='option'>魅可（MAC）时尚唇膏3g（多色可选）</li>\
								<li class='option'>倩碧(Clinique)卓越润肤乳啫喱配方125ml</li>";
			if(!(flagA==undefined)){
				changeColor(flagA);
			}else{
				flagA=0;
			}
			innerHTML(flagA);				
			for(var j=0;j<option.length;j++){
				option[j].setAttribute("flagA",j);
				option[j].onmouseover=function(){
					flagA=this.getAttribute("flagA");
					innerHTML(flagA);
					for(var j=0;j<option.length;j++){
						option[j].style.backgroundColor="#5a5a52";
					}
					this.style.backgroundColor="#ef3163";
				}
			}
		}else if(index==1){
			footer.innerHTML="<li class='option'>萌宝新主张 最高满199减100</li>\
								<li class='option'>换季补水大作战 好用水乳大盘点</li>\
								<li class='option'>N元任选专区 最高199元10件</li>\
								<li class='option'>和大幂幂一起逆龄生长</li>";
			if(!(flagB==undefined)){
				changeColor(flagB);				
			}else{
				flagB=0;
			}
			main.innerHTML="<img src='images/buy_"+(Number(flagB)+1)+".png' alt='宝宝用品'/>";					
			for(var j=0;j<option.length;j++){
				option[j].style.width="192px";
				option[j].setAttribute("flagB",j);
				option[j].onmouseover=function(){
					flagB=this.getAttribute("flagB");
					main.innerHTML="<img src='images/buy_"+(Number(flagB)+1)+".png' alt='特惠商城'/>";
					for(var j=0;j<option.length;j++){
						option[j].style.backgroundColor="#5a5a52";
					}
					this.style.backgroundColor="#ef3163";
				}
			}
		}else if(index==2){
			footer.innerHTML="<li class='option'>玛丽黛佳 新艺术彩妆品牌</li>\
								<li class='option'>一叶子 驻守青春模样</li>\
								<li class='option'>悦诗风吟 我的换季肌肤保卫战</li>\
								<li class='option'>迪奥经典.瑰丽绽放</li>\
								<li class='option'>明星香水精选大赏</li>";
			if(!(flagC==undefined)){
				changeColor(flagC);				
			}else{
				flagC=0;
			}
			main.innerHTML="<img src='images/sale_"+(Number(flagC)+1)+".png' alt='特惠商城'/>";					
			for(var j=0;j<option.length;j++){
				option[j].style.width="152px";
				option[j].setAttribute("flagC",j);
				option[j].onmouseover=function(){
					flagC=this.getAttribute("flagC");
					main.innerHTML="<img src='images/sale_"+(Number(flagC)+1)+".png' alt='特惠商城'/>";
					for(var j=0;j<option.length;j++){
						option[j].style.backgroundColor="#5a5a52";
					}
					this.style.backgroundColor="#ef3163";
				}
			}
		}else if(index==3){
			footer.innerHTML="<li class='option'>MICHAEL KORS拎出你的潮流</li>\
								<li class='option'>萌娃新主张 满减专区</li>\
								<li class='option'>全球高颜值美食 吃货私藏心愿单</li>\
								<li class='option'>精华用到位 助力逆龄肌</li>";
			if(!(flagD==undefined)){
				changeColor(flagD);				
			}else{
				flagD=0;
			}
			main.innerHTML="<img src='images/shop_"+(Number(flagD)+1)+".png' alt='缤纷活动'/>";					
			for(var j=0;j<option.length;j++){
				option[j].style.width="192px";
				option[j].setAttribute("flagD",j);
				option[j].onmouseover=function(){
					flagD=this.getAttribute("flagD");
					main.innerHTML="<img src='images/shop_"+(Number(flagD)+1)+".png' alt='缤纷活动'/>";
					for(var j=0;j<option.length;j++){
						option[j].style.backgroundColor="#5a5a52";
					}
					this.style.backgroundColor="#ef3163";
				}
			}
		}		
	}
}
window.onload=function hot(){
	for(var j=0;j<option.length;j++){
		option[j].setAttribute("flagA",j);
		option[j].onmouseover=function(){
			flagA=this.getAttribute("flagA");
			innerHTML(flagA);
			for(var j=0;j<option.length;j++){
				option[j].style.backgroundColor="#5a5a52";
			}
			this.style.backgroundColor="#ef3163";
		}
	}	
}	
function innerHTML(flag){
	main.innerHTML="<img class='main_left' src='"+arr[flag].src+"' alt='"+arr[flag].alt+"'/>\
					<div class='main_right'>\
						<img class='alarm' src='images/alarm.png' alt='倒计时'/>\
						<span class='countdown'>距团购结束<strong class='time'>22:36:10</strong></span>\
						<p class='desc'><strong class='discounts'>"+arr[flag].discounts+"/</strong>"+arr[flag].desc+"</p>\
						<div class='price'>\
							<span class='marketValue'>"+arr[flag].marketValue+"</span>\
							<div class='onSale'>\
								<span class='arrow_left'></span>\
								<span class='currentPrice'><strong class='rmb'>￥</strong>"+arr[flag].currentPrice+"</span>\
								<button class='toLook'>去看看</button>\
							</div>\
						</div>\
						<div class='tips'>\
							<span class='new'>新品上线，快来试试吧</span>\
							<span class='numToBuy'><strong class='num'>"+arr[flag].num+"</strong>人已经购买</span>\
						</div>\
					</div>";
}
function changeColor(flag){
	for(var j=0;j<option.length;j++){
		option[j].style.backgroundColor="#5a5a52";
	}
	option[flag].style.backgroundColor="#ef3163";
}