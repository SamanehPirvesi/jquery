/*
jQuery(document).ready(function(){
	alert("this works");
	});
	jQuery('<p> my name is</p>');
$myCustomMethod=function(){alert('hi');};
jQuer.listBox={
		show:function(){}
		};

*/
/*
$(function(){
	
 	$("#title").text("I can now get h1 title");
	//$("#first").html("<h2>great picture </h2>");
 	$("#first").prepend("<h2> great quotes</h2>");
	$("#first").append("<h3>.... for your ponder...</h3>");
	$("#title").addClass("standout");
	 
	//$('#first').addClass('highlight');
	//$('#first , p').addClass('highlight');
	//$('li:contains("three")').addClass('highlight');
	//$('li:contains("three")').siblings().addClass('highlight');
	//$('li:nth-child(1)').addClass('highlight');
//	$('p[name="mysecondpara"]').addClass('highlight');
//	$('p[name!="mysecondpara"]').addClass('highlight');
	//$('p').not('[name]').addClass('highlight');
	$('li:even').addClass('highlight');
	$('p:empty').text('you seemed only');
	
});
*/
$(function(){
	$('#success').hide();
	var score=0;
	$('#pic').click(function(){
		score++;
		$('#score').text(score);
		$('#success').show('slow').fadeOut(2000);
		});
	$('#startover').hover(function(){
		score=0;
		$('#score').text(score);
		$('#startover').addClass('hoverIn');
	}, function(){
		$('#startover').removeClass('hoverIn').addClass('hoverOut');
	});
	
	});


