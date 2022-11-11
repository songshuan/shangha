$(document).ready(function() {
	$("nav").css("left", "0px");
	$("#sub").click(function() {
		// 验证姓名
		if ($("input[name='name']").val().length == "") {
			window.confirm("请输入你的姓名!", function() {
				$("input[name='name']").focus();
			});
			return false;
		}
		//验证电话
		if($("input[name='phone']").val().length == ""){
			window.confirm("请输入你的电话号!",function(){
				$("input[name='phone']").focus();
			})
			return false;
		}
		if($("input[name='phone']").val().length < 11 || $("input[name='phone']").val().length > 11){
			window.confirm("请输入正确的电话号!",function(){
				$("input[name='phone']").focus();
			})
			return false;
		}
		// 验证邮箱
		if($("input[name='mail']")){
			if($(this).val() == "" || ($(this).val() != "" && !/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test($(this).val()))){
				window.confirm('请输入正确的邮箱地址!')
				return false;
			}
		}
		// 验证留言
		if($("input[name='message']").val() == ""){
			window.confirm("请输入留言内容!")
			return false;
		}
		// 验证码
		if($("input[name='exam']").val().length < 4 || $("input[name='exam']").val() == ""){
			window.confirm("请输入正确的验证码!")
		}
	})
})
