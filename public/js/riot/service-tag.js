<service-tag>
	<object data="/McKinney LD Service Schedule.pdf" class="s12">
		alt : <a href="/McKinney LD Service Schedule.pdf">Service Schedule</a>
	</object>

    <script>
        var self = this;

        self.status_message = '';

        self.submit_login = function(e) {
            RiotControl.trigger('login', {username: $('#username').val(), password: $('#password').val()});
        };
        
        RiotControl.on('login_response', function(data) {
			self.status_message = data.message;
			self.update();
		});
    </script>
</service-tag>
