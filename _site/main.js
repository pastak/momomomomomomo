function main(){
	$('.section').click(function(){
		id=$(this).data('for');
		$(('#'+id)).slideToggle();
	})
}
