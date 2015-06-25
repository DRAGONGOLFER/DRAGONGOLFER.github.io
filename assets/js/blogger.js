$(document).ready(getblog);

function getblog(){
	$.getJSON("entries.json", function(data){
		$.each(data.entries, function(key, val){
			if (key < 5){// now 5 posts show up at a time 
				console.log(key);
				$("#blog").prepend("<p>" + val.text + "</p>");
				$("#blog").prepend("<h6>" + val.date + "</h6>");
				$("#blog").prepend("<h5>" + val.title + "</h5>");	
			}	
		});
	});
}

function pager(){
	$("<input type='button' name='prev' value='Prev'/>").click(previous() {
		alert('hi2');
	}).appendTo("#blog");
	$("<input type='button' name='next' value='Next'/>").click(next() {
		alert('hi');
	}).appendTo("#blog");
}