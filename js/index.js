$(document).ready(function(){
	//头部列表显示隐藏
	// $("#li_none").hide();
	// $("nav>ul>li").children("#li_none").hide();
	$("nav>ul>li").hover(function(){
		$(this).children("#li_none").stop(true).fadeToggle(400);
		$(this).siblings().children("#li_none").fadeOut(400)
	})
	$("#li_none").hover(function(){
		$(this).stop(true).show(400);
	})
	
	//fixed 下拉导航
	$(".nav-span").click(function(){
		$(".fixed-left").css("left","0px")
	})
	$(".close").click(function(){
		$(this).parents("#fixed_body").css("left","-200%")
	})
	// 下拉导航 hover图片
	$("#fixed_body>ul>li>img").css({"transform":"translate(-50%,-50%)scale(1.1)","opacity":"0"})
	$("#fixed_body>ul>li>a").hover(function(){
		$(this).siblings("img").css({"transform":"translate(-50%,-50%)scale(1)","opacity":"0.1"})
	},function(){
		$(this).siblings("img").css({"transform":"translate(-50%,-50%)scale(1.1)","opacity":"0"})
	})
	// 767px 下拉导航
	$(".phone-nav>ul>li>h4").click(function(){
		$(this).siblings("ul").stop(true).slideToggle(400).parent().siblings().find("ul").slideUp(400);
		$(this).find("img:eq(0)").stop(true).toggle().parent().parent().siblings().find("h4>img:eq(0)").show();
		$(this).parent().not(":has(ul)").siblings().find("ul").stop(true).slideUp(400).end()
		.siblings().find("h4>img:eq(0)").show();
	})
	//下拉导航 执行动画 添加
	$("#fixed_body>ul>li>a").css("transform","translateY(-50px)");
	$(".fixed-bottom>span").css("transform","translateY(20px)")
	$(".fixed-bottom>i").css("transform","translateY(20px)")
	$(".nav-span").click(function(){
		$("#fixed_body>ul>li>a").css("transform","translateY(0px)");
		$(".fixed-bottom>span").css("transform","translateY(0px)")
		$(".fixed-bottom>i").css("transform","translateY(0px)")
	})
	//下拉导航 执行动画 删除
	$(".close").click(function(){
		$("#fixed_body>ul>li>a").css("transform","translateY(-50px)");
		$(".fixed-bottom>span").css("transform","translateY(20px)")
		$(".fixed-bottom>i").css("transform","translateY(20px)")
	})
	
	// search 搜索
	$(".fixed-search>.search>.share-wrap>span").css("transform","translateY(30px)")
	$(".fixed-search>.search>.share-wrap>i").css("transform","translateY(30px)")
	$(".Carousel-img").click(function(){
		$(this).parents(".fixed-search").css({"left":"-400%","transition":"all 1s"})
		$(".fixed-search>.search>.share-wrap>span").css("transform","translateY(30px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform","translateY(30px)")
	})
	$(".navList>nav>.nav-i").click(function(){
		$(".fixed-search").css({"left":"0%","transition":"all .5s"})
		$(".fixed-search>.search>.share-wrap>span").css("transform","translateY(0px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform","translateY(0px)")
	})
	$(".fixed-search").find(".txt-close").click(function(){
		$(this).parents(".fixed-search").css("left","-100%")
	})
	
	//浏览器高度事件
	$(".mouse").click(function(){
		$("html").animate({scrollTop:"+630"},800);
	})
	$(window).scroll(function(){
		// console.log($(window).scrollTop()); //3729
		if($(window).scrollTop() > 133){
			$("header>.header-list").css({"opacity":"0","transition":"all .5s"})
			$(".video-title").css({"opacity":"0","transition":"all .5s"})
			$(".navigation-none").css({"visibility":"visible","opacity":"1","transition":"all .5s"})
			$(".right-nav").css({"right":"0px","transition":"all .6s"})
		}else{
			$("header>.header-list").css({"opacity":"1","transition":"all 1.5s"})
			$(".video-title").css({"opacity":"1","transition":"all 1s"})
			$(".navigation-none").css({"visibility":"hidden","opacity":"0","transition":"all .5s"})
			$(".right-nav").css({"right":"-98px","transition":"all .6s"})
		}
		// 鼠标下拉
		if($(window).scrollTop() >= 266){
			$(".mouse").css("opacity","0");
		}else{
			$(".mouse").css("opacity","1")
		}
		// 左部固定导航
		// 满屏
		if($(window).scrollTop() >= 700){
			$(".left-fixed-click").css({"transform":"translateX(0px)","transition":"all .5s"});
			$(".left-fixed-click>i").css({"right":"0px","top":"90px"})
			$(".left-fixed-click>.nav-span").css({"right":"0px","top":"6px"})
		}else{
			$(".left-fixed-click").css({"transform":"translateX(-100px)","transition":"all .4s"});
			$(".left-fixed-click>i").css({"right":"150px","top":"100px"})
			$(".left-fixed-click>.nav-span").css({"right":"150px","top":"16px"})
		}
		
		// 轮播
		if($(window).scrollTop() > 200){
			$(".slide-left-1 img.none").css("display","block");
			$(".slide-reight-text").css("display","block");
		}else{
			$(".slide-left-1 img.none").css("display","none");
			$(".slide-reight-text").css("display","none");
		}
		// if($(window).scrollWidth < 1200){
		// 	$(".slide-left-1 img").css({"display":"block","animate":""});
		// 	$(".slide-reight-text").css({"display":"block","animate":""});
		// }
		
	})
	
	// 可视区域宽度变化判断
	$(window).resize(function(){
		// console.log($(window).width());
		if($(window).width() > 1200){
			$(".left-fixed-click>.nav-span").css("display","block")
			$(".left-fixed-click>i").css("display","block")
		}else{
			$(".left-fixed-click>.nav-span").css("display","none")
			$(".left-fixed-click>i").css("display","block")
		}
		if($(window).width() < 1200){
			$(".slide-left-1 img").css("display","block");
			$(".slide-reight-text").css("display","block");
			$(".mouse").hide()
		}else{
			$(".mouse").show()
		}
		if($(window).width() < 1100){
			$(".left-fixed-click i").css("display","none");
		}else{
			$(".left-fixed-click i").css("display","block");
		}
		if($(window).width() < 768){
			$(".slide-right-1").css("width","100%")
		}else{
			$(".slide-right-1").css("width","calc(100% - 58.2%)")
		}
		
	})
	
	// console.log($(".left-fixed-click>i").offset().top);
	//设置左部导航默认出现
	var offset = $(".left-fixed-click>i").offset().top;
	console.log(offset)
	if(offset > 1133){
		$(".left-fixed-click").fadeIn();
		$(".left-fixed-click>i").css({"right":"0px","top":"90px"})
		$(".left-fixed-click>.nav-span").css({"right":"0px","top":"6px"})
	}
	
	// 左侧导航点击搜索
	$(".left-fixed-click>i").click(function(){
		$(".fixed-search").css({"left":"0%","transition":"all .5s"})
		$(".fixed-search>.search>.share-wrap>span").css("transform","translateY(0px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform","translateY(0px)")
	})
	// 990 下拉133显示
	$(".navigation-none>i").click(function(){
		$(".fixed-search").css({"left":"0%","transition":"all .5s"})
		$(".fixed-search>.search>.share-wrap>span").css("transform","translateY(0px)")
		$(".fixed-search>.search>.share-wrap>i").css("transform","translateY(0px)")
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
	
	// slick 轮播
	// 左边图片父盒子的总宽
	var width = $(".slide-left-img").width();
	var len = $(".slide-left-img").length;
	var overall_Width = width * len;
	$(".overall-width").width(overall_Width);
	$(".overall-width").height("100%");
	
	//右边文字父盒子的总宽
	var max_width = $(".slide-reight-text").width();
	var max_len = $(".slide-reight-text").length;
	var max_overall_Width = width * len;
	$(".overall-max-width").width(max_overall_Width);
	$(".overall-max-width").height("100%")
	
	
	function change(){
		var width = $(".slide-left-1").width();
		$('.slide-left-img').width(width)
		
		var paddingLeft = $(".slide-reight-text").css("padding-left")
		var paddingRight = $(".slide-reight-text").css("padding-right")
		console.log(paddingLeft, paddingRight)
		paddingLeft.replace('px', '');
		var paddingLeft = parseInt(paddingLeft.replace('px', ''));
		paddingRight.replace('px', '');
		var paddingRight = parseInt(paddingRight.replace('px', ''));
		var padding = paddingLeft + paddingRight;
		var max_width = $(".slide-right-1").width();
		console.log(max_width)
		$(".slide-reight-text").width(max_width - padding);
	}
	change()
	$(window).resize(function(){
		change()
	})
	
	
	// 列表取消上边框
	// $(".tab-list-right ul>li li:gt(3)").css({"border-top":"none","margin-top":"0px"})
	// 合作客户 切换
	$(".tab-list-right>ul>li").css("display","none")
	$(".tab-list-right>ul>li").eq(0).fadeIn(300)
	$(".tab-bg .bgimg").css("background","url('img/cooperation1.png')  no-repeat right bottom/contain")
	$(".tab-list-left>ul>li").click(function(){
		var i = $(this).index();
		var n = i+1;
		$(this).children("a").addClass("active").parent().siblings().children("a").removeClass("active")
		$(".tab-list-right>ul>li").eq(i).fadeIn(300).siblings().fadeOut(0)
		$(".tab-bg .bgimg").css("background","url('img/cooperation"+n+".png')  no-repeat right bottom/contain")
	})
	
	// 新闻中心
	$(".news-list2").css({"visibility":"hidden","opacity":"0"});
	$(".journalism-left>ul li a").eq(0).css("color","#ff4343")
	$(".journalism-left>ul li a").bind("mouseover",function(){
		// console.log($(this).parent().index())
		$(this).css("color","#FF4343").parent().siblings().children("a").css("color","#464646")
		$(this).parents(".journalism-left").siblings().find("ul").eq($(this).parent().index()).css({"visibility":"visible","opacity":"1"}).siblings().css({"visibility":"hidden","opacity":"0"});
	})
	
	// 点击回顶部
	$("#return_Top").click(function(){
		$("html").animate({scrollTop:"0"},800);
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
	
	// 下拉至3940
	$(".throughout").click(function(){
		$("html").animate({scrollTop:"3940px"},1800)
	})
	
	
})