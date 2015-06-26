$(document).ready(getblog);

function getblog(){
	pager();
	$.getJSON("entries.json", function(data){
		$.each(data.entries, function(key, val){
			if (key < 5){// now 5 posts show up at a time 
				console.log(key);
				var formatted_post = "<div id=" +key+ " class='col-sm-12 blogpost'><small><p class='muted' style='float:right;'>" + val.date + "</p></small><h5>" + val.title + "</h5><p>"+ val.text + "</p><hr/></div>"
				$('#blog').prepend(formatted_post);
			}	
		});
	});
}

function pager(){
	$("<input type='button' name='prev' value='Prev'/>").click(function(){
		//function code goes here!
		//set interval decrement key length
		//hide on page one
		alert('hi2');
		//here i need functionality to get the last 5 posts and display them or hide the button if first page
	}).appendTo("#blog");
	$("<input type='button' name='next' value='Next'/>").click(function(){
		//function code goes here~!
		//set interval increment key lenght 
		//hide on page last 
		alert('hi');
		//here I need to get the next 5 posts and display them or hide the button if last page
	}).appendTo("#blog");
}

//check what page im on or do it check which posts are displaying
//then load up the page based on next or prev. 
//


// var interval = undefined;//use for a fadein et unnescessaris

// function get_prev(){
// 	var $curr = $("#blog"),
// 	$next = ($curr.prev().length) ? $curr.prev() : $("#blog").last()
// };

// function get_next(){
// 	var $curr = $("#blog"), 
// 	$next = ($curr.next().length) ? $curr.next() : $("#blog").first();
// };


