$(document).ready(function() {
	// nav 显示
	$("nav").css("left", "0px");
	//fixed 下拉导航
	$(".nav-span1").click(function() {
		$("#fixed_body").css("left", "0px")
	})
	$(".close").click(function() {
		$(this).parents("#fixed_body").css("left", "-200%")
	})
	// 下拉导航 hover图片
	$("#fixed_body>ul>li>img").css({
		"transform": "translate(-50%,-50%)scale(1.1)",
		"opacity": "0"
	})
	$("#fixed_body>ul>li>a").hover(function() {
		$(this).siblings("img").css({
			"transform": "translate(-50%,-50%)scale(1)",
			"opacity": "0.1"
		})
	}, function() {
		$(this).siblings("img").css({
			"transform": "translate(-50%,-50%)scale(1.1)",
			"opacity": "0"
		})
	})
	// 767px 下拉导航
	$(".phone-nav>ul>li>h4").click(function() {
		$(this).siblings("ul").stop(true).slideToggle(400).parent().siblings().find("ul").slideUp(400);
		$(this).find("img:eq(0)").stop(true).toggle().parent().parent().siblings().find("h4>img:eq(0)").show();
		$(this).parent().not(":has(ul)").siblings().find("ul").stop(true).slideUp(400).end()
			.siblings().find("h4>img:eq(0)").show();
	})
	//下拉导航 执行动画 添加
	$("#fixed_body>ul>li>a").css("transform", "translateY(-50px)");
	$(".fixed-bottom>span").css("transform", "translateY(20px)")
	$(".fixed-bottom>i").css("transform", "translateY(20px)")
	$(".nav-span1").click(function() {
		$("#fixed_body>ul>li>a").css("transform", "translateY(0px)");
		$(".fixed-bottom>span").css("transform", "translateY(0px)")
		$(".fixed-bottom>i").css("transform", "translateY(0px)")
	})
	//下拉导航 执行动画 删除
	$(".close").click(function() {
		$("#fixed_body>ul>li>a").css("transform", "translateY(-50px)");
		$(".fixed-bottom>span").css("transform", "translateY(20px)")
		$(".fixed-bottom>i").css("transform", "translateY(20px)")
	})
	// 搜索导航
	$(".fixed-search>.search>.share-wrap>span").css("transform", "translateY(30px)")
	$(".fixed-search>.search>.share-wrap>i").css("transform", "translateY(30px)")
	$(".nav-i").click(function() {
		$(".fixed-search").css("left", "0%")
		$(".fixed-search>.search>.share-wrap>span").css("transform", "translateY(0px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform", "translateY(0px)")
	})
	$(".Carousel-img").click(function() {
		$(".fixed-search").css("left", "-180%")
		$(".fixed-search>.search>.share-wrap>span").css("transform", "translateY(30px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform", "translateY(30px)")
	})
	$(".fixed-search").find(".txt-close").click(function() {
		$(this).parents(".fixed-search").css("left", "-100%")
	})

	// 990 头部导航 淡入淡出
	$(".navigation-none").hide();
	$(window).resize(function() {
		if ($(this).width() > 1200) {
			$(".navigation-none").fadeOut(300)
		} else {
			$(".navigation-none").fadeIn(300);
		}
	})
	
	$(window).scroll(function(){
		// 右部固定列表
		if($(this).scrollTop() > 100){
			$(".right-nav").css("right","0px")
		}else{
			$(".right-nav").css("right","-98px")
		}
	})
	// 点击回顶部
	$("#return_Top").click(function(){
		$("html").animate({scrollTop:"0"},800);
	})
	
	//箭头抖动
	$(".animate>a").hover(function(){
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
	},function(){
		$(".shake",this).stop(true).animate({paddingLeft:"8px"},130)
	})
	$(".animate1").hover(function(){
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
		$(".shake",this).animate({paddingLeft:"18px"},100,function(){
			$(".shake",this).animate({paddingLeft:"8px"},100)
		})
		$(".shake",this).animate({paddingLeft:"8px"},100,function(){
			$(".shake",this).animate({paddingLeft:"18px"},100)
		})
	},function(){
		$(".shake",this).stop(true).animate({paddingLeft:"8px"},130)
	})
	
	// 弹出框
	$(".guanbi").click(function(){
		$(".popup").addClass("shrink-a")
		$(this).parents(".popup").addClass("shrink-c")
		$(this).parents(".popup-center").addClass("shrink");
		$(this).prevAll().addClass("shrink-a");
		if($(this).click){
			setTimeout(function(){
				autoPlay()
			},60000)
		}
	})
	
	var t;
	function autoPlay(){
		$(".popup").addClass("shrink-b")
		$(".guanbi").parents(".popup").removeClass("shrink-c")
		$(".popup-center").removeClass("shrink");
		$(".guanbi").prevAll().removeClass("shrink-a");
	}
	setTimeout(function(){
		autoPlay()
	},60000)
})
