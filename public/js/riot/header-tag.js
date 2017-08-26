<header-tag>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Church in McKinney Backend</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle main menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse float-right" id="navbarMenu">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" data-toggle="collapse" data-target="#navbarMenu" each="{ section, i in get_sections() }"><a class="nav-link" href="" onclick={ go_to }>{ sections[authenticated()][section].label }</a></li>
            </ul>
        </div>
    </nav>

    <script>
        var self = this;

        self.store = opts.store;

        self.sections = {
            'authenticated': {
                'Service': {
                    'label': 'Service Schedule'
                },
                'Contact': {
					'label': 'Contact'
				},
                'Announcement': {
                    'label': 'Announcements'
                },
                'Directory': {
                    'label': 'Attendance'
                },
                'Logout': {
                    'label': 'Logout'
                }
            },
            'unauthenticated': {
                'Login': {
                    'label': 'Login'
                }
            }
        };

        self.get_sections = function() {
            return Object.keys(self.sections[self.authenticated()]);
        };

        self.authenticated = function() {
            if (self.store.authenticated) {
                return 'authenticated';
            } else {
                return 'unauthenticated';
            }
        };

        self.go_to = function(e) {
            var section = e.item.section;
            self._go_to(section);
        };

        self._go_to = function(section) {
            $.ajax("/" + section.toLowerCase(), {
                method: "GET",
                contentType: "json",
                success: function(data, status, xhr) {
                    //RiotControl.trigger('set_contents', {ref: section.toLowerCase() + '_contents', contents: data});
                    var sections = Object.keys(self.sections[self.authenticated()]);
                    for (var i = 0; i < sections.length; i++) {
                        if (section == sections[i]) {
                            RiotControl.trigger('show', {ref: sections[i].toLowerCase() + '_contents', args: data});
                        } else {
                            RiotControl.trigger('hide', {ref: sections[i].toLowerCase() + '_contents', args: data});
                        }
                    }
                    //riot.route("/" + section.toLowerCase(), section);
                },
                error: function(xhr, status, error) {
                    console.log("Error encountered: " + error);
                }
            });
        };

        RiotControl.on('login_response', function(data) {
            self.update();
        });

        self.on('mount', function() {
            if (self.authenticated() == 'unauthenticated') {
                RiotControl.trigger('show', {ref: 'login_contents', args: {}});
            }
        });
    </script>
</header-tag>
