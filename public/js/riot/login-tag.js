<login-tag class="container-fluid">
    <div class="row"></div>
    <div class="row justify-content-md-center">
        <div class="col col-lg-6">
            { status_message }
        </div>
    </div>
    <div class="row"></div>
    <div class="row justify-content-md-center">
        <form class="col col-lg-6">
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" name="username" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" class="form-control" />
            </div>
            <button class="btn btn-primary" type="submit" name="submit" onclick={ submit_login }>Submit</button>
        </form>
    </div>

    <script>
        var self = this;

        self.status_message = '';

        self.submit_login = function(e) {
            RiotControl.trigger('login', {username: $('#username').val(), password: $('#password').val()});
            return false;
        };

        self.update_contents = function(args) {
            console.log(args);
        };

        RiotControl.on('login_response', function(data) {
            self.status_message = data.message;
            self.update();
        });

        self.on('mount', function() {
            $(self.root.querySelector('#username')).focus();
        });
    </script>
</login-tag>
