<header-tag>
    <nav>
        <div class="nav-wrapper">
            <a href="/" class="brand-logo"><i class="material-icons"></i>Church in McKinney Backend</a>
            <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li each="{ section, i in get_sections() }"><a href="" onclick={ go_to }>{ sections[authenticated()][section].label }</a></li>
            </ul>
            <ul class="side-nav" id="mobile-menu">
                <li each="{ section, i in get_sections() }"><a href="" onclick={ go_to }>{ sections[authenticated()][section].label }</a></li>
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
                'Announcement': {
                    'label': 'Announcements'
                },
                'Directory': {
                    'label': 'Directory'
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
            $(self.root.querySelector('.button-collapse')).sideNav({
                edge: 'left',
                closeOnClick: true,
                draggable: true
            });
            if (self.authenticated() == 'unauthenticated') {
                RiotControl.trigger('show', {ref: 'login_contents', args: {}});
            }
        });
    </script>
</header-tag>
