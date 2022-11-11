$(document).ready(function() {
	var i = 0;
	$(window).resize(function(){
		if($(window).width() < 768){
			$(".bot-top li:odd").addClass("tran")
			$(".bot-top li:even").addClass("tran")
		}else{
			$(".bot-top li:odd").removeClass("tran")
			$(".bot-top li:even").removeClass("tran")
		}
	})
	if($(window).width() > 768){
		$(document).on("mousewheel DOMMouseScroll", function(e) {
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
				(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
			if (delta > 0) { //向上滚动
				var num = 2;
				$(".bot-top li:odd").css("transform", "translateY(" + (num + i--) + "px)")
				$(".bot-top li:even").css("transform", "translateY(-" + (num + i--) + "px)")
				console.log(i)
				if (i <= 0) {
					i = 0;
					$(".bot-top li:odd").css("transform", "translateY(0px)")
					$(".bot-top li:even").css("transform", "translateY(-0px)")
				}
			}
			if (delta < 0) { //向下滚动
				var num = 2;
				$(".bot-top li:odd").css("transform", "translateY(" + (num + i++) + "px)")
				$(".bot-top li:even").css("transform", "translateY(-" + (num + i++) + "px)")
				if (i >= 88) {
					i = 88;
					$(".bot-top li:odd").css("transform", "translateY(88px)")
					$(".bot-top li:even").css("transform", "translateY(-88px)")
				}
			}
		})
	}
})
