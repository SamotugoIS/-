$(document).ready(function() {
	
		$(".main_menu_button").click(function(){
		$(".main_menu ul").slideToggle("slow");
	});

$(".read_more").click(function(){
		$(this).text("свернуть");
		$(this).prev().find(".read_more_p").slideToggle("slow");
		return false;
	});

$(".more_news").click(function(){
		$(".additional").slideToggle("slow");
		return false;
	});

});