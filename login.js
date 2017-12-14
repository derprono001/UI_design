$("input").on('click', function(event) {
	event.stopPropagation();
	$("#login").css({
		boxShadow: '5px 5px 5px #cccccc',
		backgroundColor: '#1e90ff'
	});

});
$("body").on('click', function(event) {
	$("#login").css({
		boxShadow: '10px 10px 10px #cccccc',
		backgroundColor: '#00bfff'
	});
});