//click button, gifs are pulled and added to page
$(".charButton").click(function() {
	$.ajax({
		url: "http://api.giphy.com/v1/gifs/search?q=" + $(this).attr("id") + "&limit=10&api_key=",
		method: "GET"
	})
	.done(function(response) {
		console.log(response);
		for (var i = 0; i < response.data.length; i++){
			$("#gifsGoHere").prepend("<p>Rating: " + response.data[i].rating + "</p><p><img src=\"" + response.data[i].images.original_still.url + "\" still=\"" + response.data[i].images.original_still.url + "\" moving=\"" + response.data[i].images.original.url + "\" status=\"still\"></p>");
		}
		$("img").unbind();
		$("img").click(function() {
			if ($(this).attr("status") == "still") {
				$(this).attr("status", "moving");
				$(this).attr("src", $(this).attr("moving"));
			} else if ($(this).attr("status") == "moving") {
				$(this).attr("status", "still");
				$(this).attr("src", $(this).attr("still"));
			}
		})
	})
})

//add your own character
$("#submit").click(function() {
	var newCharArray = $("#newChar").val().split(" ");
	var newCharURLInput = newCharArray[0];
	if (newCharArray.length > 1) {
		for (var i = 1; i<newCharArray.length; i++) {
			newCharURLInput = newCharURLInput + "+" + newCharArray[i];
		}
	}
	$("#buttonDiv").append("<button class=\"charButton\" id=\"" + newCharURLInput + "\">" + $("#newChar").val() + "</button>&nbsp;");
	$(".charButton").unbind(); //have to unbind then re-establish the click function otherwise multiple identical cick functions will be joined to the buttons
	$(".charButton").click(function() {
		$.ajax({
			url: "http://api.giphy.com/v1/gifs/search?q=" + $(this).attr("id") + "&limit=10&api_key=",
			method: "GET"
		})
		.done(function(response) {
			console.log(response);
			for (var i = 0; i < response.data.length; i++){
				$("#gifsGoHere").prepend("<p>Rating: " + response.data[i].rating + "</p><p><img src=\"" + response.data[i].images.original_still.url + "\" still=\"" + response.data[i].images.original_still.url + "\" moving=\"" + response.data[i].images.original.url + "\" status=\"still\"></p>");
			}
			$("img").unbind();
			$("img").click(function() {
				if ($(this).attr("status") == "still") {
					$(this).attr("status", "moving");
					$(this).attr("src", $(this).attr("moving"));
				} else if ($(this).attr("status") == "moving") {
					$(this).attr("status", "still");
					$(this).attr("src", $(this).attr("still"));
				}
			})
		})
	})
})