function CommonStore() {
    riot.observable(this);

    var self = this;
    
    self.authenticated = false;
    self.token = undefined;

    self.on('login', function(data) {
		$.ajax("/login/authenticate", {
			data: data,
			method: "POST",
			success: function(data, status, xhr) {
				console.log(data);
			},
			error: function(xhr, status, error) {
				self.trigger('login_response', {message: error});
				console.log("Error encountered: " + error);
			}
		});
    });
}
