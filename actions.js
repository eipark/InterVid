

$(function(){
	var p = Popcorn('#video').play()
	.webpage({
		id:"wiki",
		start: 0, 
		end: 1000 ,
		src: "http://en.wikipedia.org/wiki/Newton%27s_laws",
		target: 'webpage-frame'
	})
	.footnote({
		start: 5, // seconds
		end: 200, // seconds
		text: '',
		target: 'questions'
	});		

	p.exec(128, function(){
		p.pause(); 	
		var html = "\
		<h3>Concept Check #1 (2:08):</h3>\
		A 3N force is pushing a 2kg block across a table (parallel to surface). What is the magnitude of acceleration in m/s^2?<br />\
		<input type='radio' name='answer'>1.5</input><br />\
		<input type='radio' name='answer'>6</input><br />\
		<input type='radio' name='answer'>100</input><br />\
		<input type='submit' id='submit-answer' value='Submit Answer'></input>";
		$("#questions").append(html);
		
		$("#submit-answer").click(function(){

			p.currentTime(60).play();
			$("#eqn").css('color', 'red');
			$("#questions").append("<br />Incorrect. Watch clip and try again. Look at red equations -->.");
		});
	});
	

	
	p.playbackRate(1.00);
});