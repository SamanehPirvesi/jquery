/*
$(function(){
	//alert(AETRIS.version);
	alert(AETRIS.planet.name);
});
var AETRIS={};
AETRIS.version="1.2";
AETRIS.planet={
		id:34,
		name:"instemstesa"
}
*/
/*
$(function(){
	$('#main').append("<img src='plus-8.png' alt='click me t osee ' id='clickMe'>");
	$('#clickMe').toggle(function(){
		$('#message').show('fast');
		$('#clickMe').attr('src','minus-8.png');
	},function(){
		$('#message').hide('slow');
		$('#clickMe').attr('src','plus-8.png')
	});
	
//*****************************
function	
 buildCat(){
	var catName="Tuffy";
	function catFactory(){
		alert(catName);
	}
	return catFactory;
}
	$('#buildcat').click(function(){
		var myNewCat=buildCat();
	myNewCat();
	})
	*/
//**********************
$(function makeSize(size){
return function(){
document.body.style.FontSize=size+'px'
};

});
var size12=makeSize(12);
var size14=makeSize(14);
var size16=makeSize(16);
document.getElementById('#size-12').onclick=size12;
document.getElementById('#size-14').onclick=size14;
document.getElementById('#size-16').onclick=size16;

