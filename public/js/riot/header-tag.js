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
        
        self.store = opts.store;

        self.sections = ['Service', 'Registration', 'Directory', 'Login'];

        self.go_to = function(e) {
            var section = e.item.section;
            $.ajax("/" + section.toLowerCase(), {
                method: "GET",
                success: function(data, status, xhr) {
                    //RiotControl.trigger('set_contents', {ref: section.toLowerCase() + '_contents', contents: data});
                    for (var i = 0; i < self.sections.length; i++) {
						if (section == self.sections[i]) {
							RiotControl.trigger('show', {ref: self.sections[i].toLowerCase() + '_contents'});
						} else {
							RiotControl.trigger('hide', {ref: self.sections[i].toLowerCase() + '_contents'});
						}
					}
                    //riot.route("/" + section.toLowerCase(), section);
                },
                error: function(xhr, status, error) {
                    console.log("Error encountered: " + error);
                }
            });
        };
    </script>
</header-tag>
