/*slider*/
$(document).ready(function(){
	$('.slider__photo').slick({
		arrows:false,
		slidesToShow:1,
		fade:true,
		asNavFor:".slider__content",
	});

	$('.slider__content').slick({
			asNavFor:".slider__photo",
			slidesToShow:1,
			infinite:true,
			autoplay:false,
			speed:600,
			arrows:true,
		});
});

/*slider*/