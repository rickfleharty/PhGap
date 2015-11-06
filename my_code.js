$(document).ready(function() {
	
  $("#testbutton").click(function() {
	$("p").hide(2000);
    $("#testbutton2").css("background-color","white");

	$("p").toggle(2000);
    $("strong").css("background-color","white");	
  });
});
