var timer;
window.onload=function(){
	
//点击相应的按钮，播放相应的图片：动画名称，图片总数
	document.getElementById("cymbal").onclick = function(){
		 startAnimation("cymbal",13)
	}
	
	document.getElementById("drink").onclick = function(){
		 startAnimation("drink",81)
	}
	
	document.getElementById("eat").onclick = function(){
		 startAnimation("eat",40)
	}
	
	document.getElementById("pie").onclick = function(){
		 startAnimation("pie",24)
	}
	
	document.getElementById("scratch").onclick = function(){
		 startAnimation("scratch",56)
	}
	
	document.getElementById("fart").onclick = function(){
		 startAnimation("fart",28)
	}
	
	

}
//播放动画的方法：动画名称/图片总数

function startAnimation(name,count){
	
	clearInterval(timer);
	var index = 0;
	var img = document.getElementById("cat")
	timer = setInterval(function(){
//判断是否可以继续播放
		if(++index<count){
			img.src = getImageName(name,index);
		}
		else{
			clearInterval(timer);
		}
	},80)
}




//图片路径
//根据动画名和图片你索引返回图片名
function getImageName(name,index){
//img/Buttons/cymbal/cymbal.png"
	return "img/Animations/"+name+"/"+name+"_"+getIndex(index)+".jpg"
 		
}




//实现%2功能，如：1输出01,11输出11
function getIndex(index){
	
	if(index<10){
//若小鱼10，拼接一个0
	return "0"+index;
	}else{
		return index;
	}
// 或者 return index<10 ? "0"+index : index;
	
}
