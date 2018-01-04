var click = null;

$('#rating-container').hover(enter, exit);
function enter(){
	$('#rating-container div').on("mouseover",function(){
		var mouse_index = $(this).index();
		$("#rating-container").children().removeClass('rating-chosen');
		$('.rating-circle').each(function(index){
			if(index <= mouse_index){
				$(this).addClass('rating-hover');
			}
			else{
				$(this).removeClass('rating-hover');
			}
		})
		$("#rating-container").click(function(){
			click = mouse_index;
			$("#rating-container").find('.rating-hover').addClass('rating-chosen');
		})
	})
}
function exit(){
	$("#rating-container").find('.rating-hover').removeClass('rating-hover');
	if (click !== null){
		$('.rating-circle').each(function(index){
			if(index <= click){
				$(this).addClass('rating-chosen');
			}
		})
	}
}
// $('#rating-container').mouseout(function(){
// 	$("#rating-container").find('.rating-hover').removeClass('rating-hover');
// 	if (click !== null){
// 		$('.rating-circle').each(function(index){
// 			if(index <= click){
// 				$(this).addClass('rating-chosen');
// 			}
// 		})
// 	}
// })

