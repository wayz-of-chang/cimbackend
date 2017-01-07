<login-tag>
	<div class="row"></div>
	<div class="row">
		<div class="col s4 offset-s4">
			{ status_message }
		</div>
	</div>
	<div class="row"></div>
	<div class="row">
		<form class="col s4 offset-s4">
			<div class="row">
				<div class="input-field col s12">
					<input id="username" name="username" type="text" class="validate" />
					<label for="username">Username</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input id="password" name="password" type="password" class="validate" />
					<label for="password">Password</label>
				</div>
			</div>
			<div class="row">
				<button class="btn waves-effect waves-light" type="submit" name="submit" onclick={ submit_login }>Submit</button>
			</div>
		</form>
    </div>

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
</login-tag>
