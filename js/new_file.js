$(document).ready(function(){
	$("#nav_content>ul>li").hover(function(){
		$(this).toggleClass("li_change").children("span").toggleClass("span_change");
	});
	$("#case1_content>ul>li").hover(function(){
		$(this).removeClass("img_change").removeClass("text_change").children("span:last-child").toggleClass("img_change").children("span:last-child>span:first-child").toggleClass("text_change");
	});
})