$(document).ready(function() {
	$('.pages-paging').on('afterChange', function(event, slick, currentSlideIndex) {
		var index = currentSlideIndex + 1; //获取当前幻灯片的索引+1
		// console.log(index)
		$(".paging>i span").html(index)
		
		if (index == 1) {
			$(".slide-left-img>.img2").addClass("opacb");
			$(".slide-left-img>.img3").addClass("opacb");
			$(".slide-left-img>.img4").addClass("opacb");
			$(".slide-left-img>.img5").addClass("opacb");
		} else {
			$(".slide-left-img>.img2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.img3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.img4").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.img5").removeClass("opacb").addClass("opac");
		}
		if (index == 2) {
			$(".slide-left-img>.img6").addClass("img6-1");
		} else {
			$(".slide-left-img>.img6").removeClass("img6-1");
		}
		// if(index == 3){
		// 	$(".slide-left-img>video")[0].play()
		// }
		if (index == 4) {
			$(".slide-left-img>.gapt1").addClass("opacb");
			$(".slide-left-img>.gapt2").addClass("opacb");
			$(".slide-left-img>.gapt3").addClass("opacb");
			$(".slide-left-img>.gapt4").addClass("opacb");
			$(".slide-left-img>.gapt5").addClass("opacb");
		} else {
			$(".slide-left-img>.gapt1").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.gapt2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.gapt3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.gapt4").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.gapt5").removeClass("opacb").addClass("opac");
		}
		if (index == 5) {
			$(".slide-left-img>.bygxa").addClass("opacb");
			$(".slide-left-img>.bygx1").addClass("opacb");
			$(".slide-left-img>.bygx2").addClass("opacb");
			$(".slide-left-img>.bygx3").addClass("opacb");
		} else {
			$(".slide-left-img>.bygxa").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.bygx1").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.bygx2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.bygx3").removeClass("opacb").addClass("opac");
		}
		if (index == 6) {
			$(".slide-left-img>.jbh2").addClass("opacb");
			$(".slide-left-img>.jbh3").addClass("opacb");
			$(".slide-left-img>.jbh4").addClass("opacb");
			$(".slide-left-img>.jbh5").addClass("opacb");
			$(".slide-left-img>.jbh6").addClass("opacb");
			$(".slide-left-img>.jbh7").addClass("opacb");
			$(".slide-left-img>.jbh8").addClass("opacb");
		} else {
			$(".slide-left-img>.jbh2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.jbh3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.jbh4").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.jbh5").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.jbh6").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.jbh8").removeClass("opacb").addClass("opac");
		}
		if (index == 7) {
			$(".slide-left-img>.xjbh").addClass("opacb");
			$(".slide-left-img>.xjbh2").addClass("opacb");
			$(".slide-left-img>.xjbh3").addClass("opacb");
			$(".slide-left-img>.xjbh4").addClass("opacb");
			$(".slide-left-img>.xjbh5").addClass("opacb");
			$(".slide-left-img>.xjbh6").addClass("opacb");
			$(".slide-left-img>.xjbh7").addClass("opacb");
			$(".slide-left-img>.xjbh8").addClass("opacb");
		} else {
			$(".slide-left-img>.xjbh").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh4").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh5").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh6").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh7").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xjbh8").removeClass("opacb").addClass("opac");
		}
		if (index == 8) {
			$(".slide-left-img>.xmoke2").addClass("opacb");
			$(".slide-left-img>.xmoke3").addClass("opacb");
			$(".slide-left-img>.xmoke4").addClass("opacb");
		} else {
			$(".slide-left-img>.xmoke2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xmoke3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.xmoke4").removeClass("opacb").addClass("opac");
		}
		if (index == 9) {
			$(".slide-left-img>.aon0").addClass("opacb");
			$(".slide-left-img>.aon1").addClass("opacb");
			$(".slide-left-img>.aon2").addClass("opacb");
			$(".slide-left-img>.aon3").addClass("opacb");
			$(".slide-left-img>.aon4").addClass("opacb");
		} else {
			$(".slide-left-img>.aon0").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.aon1").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.aon2").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.aon3").removeClass("opacb").addClass("opac");
			$(".slide-left-img>.aon4").removeClass("opacb").addClass("opac");
		}
		if (index == 10) {
			$(".slide-left-img .comp").addClass("opacb");
			$(".slide-left-img .daloumap").addClass("opacb");
			$(".slide-left-img .dalou1").addClass("opacb");
			$(".slide-left-img .dalou2").addClass("opacb");
			$(".slide-left-img .dalou3").addClass("opacb");
			$(".slide-left-img .dalou4").addClass("opacb");
			$(".slide-left-img .dalou5").addClass("opacb");
			$(".slide-left-img .dalou6").addClass("opacb");
			$(".slide-left-img .dalou7").addClass("opacb");
		} else {
			$(".slide-left-img .comp").removeClass("opacb").addClass("opac");
			$(".slide-left-img .daloumap").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou1").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou2").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou3").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou4").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou5").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou6").removeClass("opacb").addClass("opac");
			$(".slide-left-img .dalou7").removeClass("opacb").addClass("opac");
		}
		if (index == 11) {
			$(".slide-left-img .maocu").addClass("opacb");
			$(".slide-left-img .maocu1").addClass("opacb");
			$(".slide-left-img .maocu2").addClass("opacb");
			$(".slide-left-img .maocu3").addClass("opacb");
			$(".slide-left-img .maocu4").addClass("opacb");
		} else {
			$(".slide-left-img .maocu").removeClass("opacb").addClass("opac");
			$(".slide-left-img .maocu1").removeClass("opacb").addClass("opac");
			$(".slide-left-img .maocu2").removeClass("opacb").addClass("opac");
			$(".slide-left-img .maocu3").removeClass("opacb").addClass("opac");
			$(".slide-left-img .maocu4").removeClass("opacb").addClass("opac");
		}
		if (index == 12) {
			$(".slide-left-img .teacher1").addClass("opacb");
			$(".slide-left-img .teacher2").addClass("opacb");
			$(".slide-left-img .teacher3").addClass("opacb");
			$(".slide-left-img .teacher4").addClass("opacb");
		} else {
			$(".slide-left-img .teacher1").removeClass("opacb").addClass("opac");
			$(".slide-left-img .teacher2").removeClass("opacb").addClass("opac");
			$(".slide-left-img .teacher3").removeClass("opacb").addClass("opac");
			$(".slide-left-img .teacher4").removeClass("opacb").addClass("opac");
		}
		if (index == 13) {
			$(".slide-left-img .zb1").addClass("opacb");
			$(".slide-left-img .zb2").addClass("opacb");
			$(".slide-left-img .zb3").addClass("opacb");
			$(".slide-left-img .zb4").addClass("opacb");
			$(".slide-left-img .zb5").addClass("opacb");
			$(".slide-left-img .zb6").addClass("opacb");
		} else {
			$(".slide-left-img .zb1").removeClass("opacb").addClass("opac");
			$(".slide-left-img .zb2").removeClass("opacb").addClass("opac");
			$(".slide-left-img .zb3").removeClass("opacb").addClass("opac");
			$(".slide-left-img .zb4").removeClass("opacb").addClass("opac");
			$(".slide-left-img .zb5").removeClass("opacb").addClass("opac");
			$(".slide-left-img .zb6").removeClass("opacb").addClass("opac");
		}
		if (index == 14) {
			$(".slide-left-img .bwg2").addClass("opacb bounceln");
			$(".slide-left-img .bwg3").addClass("opacb bounceln");
			$(".slide-left-img .bwg4").addClass("opacb bounceln");
			$(".slide-left-img .bwg5").addClass("opacb bounceln");
			$(".slide-left-img .bwg6").addClass("opacb bounceln");
			$(".slide-left-img .bwg7").addClass("opacb bounceln");
			$(".slide-left-img .bwg10").addClass("opacb bounceln");
			$(".slide-left-img .bwg11").addClass("opacb bounceln");
			$(".slide-left-img .bwg12").addClass("opacb bounceln");
			$(".slide-left-img .bwg13").addClass("opacb bounceln");
			$(".slide-left-img .bwg14").addClass("opacb bounceln");
		} else {
			$(".slide-left-img .bwg2").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg3").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg4").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg5").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg6").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg7").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg10").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg11").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg12").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg13").removeClass("opacb").addClass("opac");
			$(".slide-left-img .bwg14").removeClass("opacb").addClass("opac");
			
		}
	});
})
