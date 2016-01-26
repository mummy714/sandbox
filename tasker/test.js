tk.flash('START');

function getTrafficTime()
{
	tk.flash('Starting getTrafficTime()');
	var outputText = '';
	var sayResult;

	$.ajax({
			url: "http://pipes.yahoo.com/pipes/pipe.run?_id=8e9081f549460d83e20e9cbc0ab461a1&_render=json",
			type: "GET",
			dataType: "json",
			success: function(data){
				tk.flash('Ajax SUCCESS');
				$.each(data.value.items, function(i, obj) {
					outputText += obj.content + ' ';
				});
				tk.flash('Ajax RESULTS: ' + outputText);
				//sayResult = tk.say(outputText);
			},
			error: function(error){
				 tk.flash('Ajax FAILURE');
				 //sayResult = tk.say('Error:' + error);
			}
		});
}

getTrafficTime();