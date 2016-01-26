var url = "https://www.reddit.com/r/earthporn.json";
function getSubreddit() {
	$.getJSON(url)
	.done(function(data) {
		console.log(data.data.children[0].data.url);
		$('#topPost')[0].innerHTML = data.data.children[0].data.url;
	});
}