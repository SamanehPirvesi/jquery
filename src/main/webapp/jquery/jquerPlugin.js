$(function(){
	$("#tabs").tabs().tabs("add","jqueryPlugin.html","food");
	//$("#datepicker").datepicker();
	$("#datepicker").datepicker({
		onSelect : function(dateText , inst){
			$('#title').text("you picked:"+ dateText);
		}
		
	});
});