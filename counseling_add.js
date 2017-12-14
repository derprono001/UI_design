$(".advisor-list-item").on("click", function(){
   var modal = $("#myModal");
   $("#note").html("");
   var img= $(this).find('> p > img').attr('src');
   $("#advisor-image").attr('src', img);
   var name = $(this).find('> p > span').html();
   $('#advisor-name').html(name);
   modal.css({
   	display : 'none'
   });
   $("#advisor-image").css('display', 'unset');

});