$(document).ready(getposts);

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