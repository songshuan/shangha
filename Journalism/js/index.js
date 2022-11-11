$(document).ready(function(){
	if($(window).width() > 767){
		$(".imgimg").css({"background-image":"url(./img/20171104182927_59fd9687ded04.jpg)","background-position":"left top"})
	}else{
		$(".imgimg").css({"background-image":"url(./img/20171012143402_59df0cda5586c.jpg)","background-position":"center top"})
	}
	$(window).resize(function(){
		if($(this).width() <= 767){
			$(".imgimg").css({"background-image":"url(./img/20171012143402_59df0cda5586c.jpg)","background-position":"center top"})
		}else{
			$(".imgimg").css({"background-image":"url(./img/20171104182927_59fd9687ded04.jpg)","background-position":"left top"})
		}
	})
})