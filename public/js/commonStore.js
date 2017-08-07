function CommonStore() {
    riot.observable(this);

    var self = this;

    self.authenticated = AUTHENTICATED || false;
    self.token = undefined;

    self.on('login', function(data) {
        $.ajax("/login", {
            data: data,
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            method: "POST",
            success: function(data, status, xhr) {
                self.authenticated = data.status;
                if (self.authenticated) {
                    self.trigger('login_response', {message: 'Logged in successfully'});
                    window.location = data.url;
                } else {
                    self.trigger('login_response', {message: 'Failed to log in'});
                }
            },
            error: function(xhr, status, error) {
                self.trigger('login_response', {message: error});
                console.log("Error encountered: " + error);
            }
        });
    });

    self.on('logout', function(data) {
        $.ajax("/logout", {
            method: "GET",
            success: function(data, status, xhr) {
                self.authenticated = data.status;
                window.location = data.url;
            },
            error: function(xhr, status, error) {
                console.log("Error encountered: " + error);
            }
        });
    });
}
