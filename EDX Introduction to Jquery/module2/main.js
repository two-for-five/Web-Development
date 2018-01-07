$(document).ready(function(){
	var click = null;
	$('#update-max-value').click(function(){
		var number_of_circle = $('#max-value').val();
		$('#rating-container').find('.rating-hover').removeClass('rating-hover');
		$('#rating-container').find('.rating-chosen').removeClass('rating-chosen');
		for(i = 0; i < number_of_circle; i++){
			$('#rating-container').append("<div class='rating-circle'></div>");
		}
	})
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

})