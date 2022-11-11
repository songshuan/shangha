$(document).ready(function(){
	$(".header").load("../public/header.html",function(){
		$("nav>ul>li").hover(function(){
			$(this).children("#li_none").stop(true).fadeToggle(400);
			$(this).siblings().children("#li_none").fadeOut(400)
			$(this).children("#li_none").css("display","block")
		})
		$("#li_none").hover(function(){
			$(this).stop(true).show(400);
		})
	});
	
	// search 搜索
	$(".fixed-search").load("../public/nav-branch.html",function(){
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
	});
	
	// 
	$(".fixed-left").load("../public/nav-branch2.html",function(){
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
		// 767px 下拉导航
		$(".phone-nav>ul>li>h4").click(function(){
			$(this).siblings("ul").stop(true).slideToggle(400).parent().siblings().find("ul").slideUp(400);
			$(this).find("img:eq(0)").stop(true).toggle().parent().parent().siblings().find("h4>img:eq(0)").show();
			$(this).parent().not(":has(ul)").siblings().find("ul").stop(true).slideUp(400).end()
			.siblings().find("h4>img:eq(0)").show();
		})
	}) 
	$(".left-fixed-click").load("../public/nav-branch3.html",function(){
		// 满屏
		if($(window).scrollTop() >= 450){ //默认出现
			$(".left-fixed-click").css({"transform":"translateX(0px)","transition":"all .5s"});
			$(".left-fixed-click>i").css({"right":"0px","top":"172px"})
			$(".left-fixed-click>.nav-span").css({"right":"0px","top":"91px"})
			$('.left-fixed-click>.drap-span').css({"right":"-1px",top:"0px"})
		}else{
			$(".left-fixed-click").css({"transform":"translateX(-100px)","transition":"all .4s"});
			$(".left-fixed-click>i").css({"right":"150px","top":"182px"})
			$(".left-fixed-click>.nav-span").css({"right":"150px","top":"101px"})
			$('.left-fixed-click>.drap-span').css({"right":"150px",top:"10px"})
		}
		$(window).scroll(function(){
			if($(window).scrollTop() >= 450){
				$(".left-fixed-click").css({"transform":"translateX(0px)","transition":"all .5s"});
				$(".left-fixed-click>i").css({"right":"0px","top":"172px"})
				$(".left-fixed-click>.nav-span").css({"right":"0px","top":"91px"})
				$('.left-fixed-click>.drap-span').css({"right":"-1px",top:"0px"})
			}else{
				$(".left-fixed-click").css({"transform":"translateX(-100px)","transition":"all .4s"});
				$(".left-fixed-click>i").css({"right":"150px","top":"182px"})
				$(".left-fixed-click>.nav-span").css({"right":"150px","top":"101px"})
				$('.left-fixed-click>.drap-span').css({"right":"150px",top:"10px"})
			}
		})
		
	})
	$(".right-nav").load("../public/nav-branch4.html",function(){
		if($(window).scrollTop() > 133){
			$("header>.header-list").css({"opacity":"0","transition":"all .5s"})
			$(".right-nav").css({"right":"0px","transition":"all .6s"})
		}else{
			$("header>.header-list").css({"opacity":"1","transition":"all 1.5s"})
			$(".right-nav").css({"right":"-98px","transition":"all .6s"})
		}
		$(window).scroll(function(){
			if($(window).scrollTop() > 133){
				$("header>.header-list").css({"opacity":"0","transition":"all .5s"})
				$(".navigation-none").css({"visibility":"visible","opacity":"1","transition":"all .5s"})
				$(".right-nav").css({"right":"0px","transition":"all .6s"})
			}else{
				$("header>.header-list").css({"opacity":"1","transition":"all 1.5s"})
				$(".navigation-none").css({"visibility":"hidden","opacity":"0","transition":"all .5s"})
				$(".right-nav").css({"right":"-98px","transition":"all .6s"})
			}
		})
		// 点击回顶部
		$("#return_Top").click(function(){
			$("html").animate({scrollTop:"0"},800);
		})
	})
})
