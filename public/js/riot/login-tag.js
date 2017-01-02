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
					<input id="username" type="text" class="validate" value={ username }>
					<label for="username">Username</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s12">
					<input id="password" type="password" class="validate" value={ password }>
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

        self.username = '';
        self.password = '';
        
        self.status_message = '';

        self.submit_login = function(e) {
            RiotControl.trigger('login', {username: self.username, password: self.password});
        };
        
        RiotControl.on('login_response', function(data) {
			self.status_message = data.message;
		});
    </script>
</login-tag>
