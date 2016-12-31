<login-tag>
    <form class="col s12">
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Username" id="username" type="text" class="validate" value={ username }>
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

    <script>
        var self = this;

        self.username = '';
        self.password = '';

        self.submit_login = function(e) {
            RiotControl.trigger('login', {username: self.username, password: self.password});
        };
    </script>
</login-tag>