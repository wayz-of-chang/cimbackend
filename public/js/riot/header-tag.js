<header-tag>
    <nav>
        <div class="nav-wrapper">
            <a href="/" class="brand-logo"><i class="material-icons"></i>Church in McKinney Backend</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li each="{ section, i in sections }"><a href="" onclick={ go_to }>{ section }</a></li>
            </ul>
        </div>
    </nav>

    <script>
        var self = this;

        self.sections = ['Service', 'Registration', 'Directory', 'Login'];

        self.go_to = function(e) {
            var section = e.item.section;
            $.ajax("/" + section.toLowerCase(), {
                method: "GET",
                success: function(data, status, xhr) {
                    RiotControl.trigger('set_contents', {contents: data});
                    //riot.route("/" + section.toLowerCase(), section);
                },
                error: function(xhr, status, error) {
                    console.log("Error encountered: " + error);
                }
            });
        };
    </script>
</header-tag>
