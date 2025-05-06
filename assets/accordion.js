
   // A $( document ).ready() block.
    $( document ).ready(function() {
        console.log( "ready!" );
    $(function() {
       
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

 	$(".accordion > .accordion-item").click(function() {
      
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
  
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
 	});
 });
    });
    
