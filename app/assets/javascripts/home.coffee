# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
var self = this;

self.sections = ['Service', 'Registration', 'Directory', 'Login'];

self.go_to = function(e) {
	var section = e.item.section;
	$.ajax("/" + section.toLowerCase(), {
		method: "POST",
		success: function(data, status, xhr) {
			//RiotControl.trigger('set_contents', {contents: data});
			//riot.route("/" + section.toLowerCase(), section);
		},
		error: function(xhr, status, error) {
			console.log("Error encountered: " + error);
		}
	});
};

//RiotControl.on('set_contents', function(data) {
//	self.root.children[0].innerHTML = data.contents;
//	self.update();
//});
