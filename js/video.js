//video视频根据指定时间更换刷新
$(document).ready(function() {
	if ($(window).width() > 1200) {
		var bgimg = "";
		var hours = new Date().getHours();
		console.log(hours);
		if (hours >= 7 && hours <= 10) {
			bgimg = "img/index_video1.mp4";
		}
		if (hours >= 11 && hours <= 15) {
			bgimg = "img/index_video2.mp4";
		}
		if (hours >= 16 && hours <= 20) {
			bgimg = "img/index_video3.mp4";
		}
		if((hours >=21 && hours <= 23) || (hours >= 0 && hours <= 6)){
			bgimg = "img/index_video4.mp4";
		}
		$(".video").attr("src", bgimg);
	}
})
