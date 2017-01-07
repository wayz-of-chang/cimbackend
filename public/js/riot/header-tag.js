<header-tag>
    <nav>
        <div class="nav-wrapper">
            <a href="/" class="brand-logo"><i class="material-icons"></i>Church in McKinney Backend</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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
					'label': 'Service'
				}, 
				'Registration': {
					'label': 'Registration'
				}, 
				'Directory': {
					'label': 'Directory'
				}, 
				'Login': {
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
            $.ajax("/" + section.toLowerCase(), {
                method: "GET",
                success: function(data, status, xhr) {
                    //RiotControl.trigger('set_contents', {ref: section.toLowerCase() + '_contents', contents: data});
                    var sections = Object.keys(self.sections[self.authenticated()]);
                    for (var i = 0; i < sections.length; i++) {
						if (section == sections[i]) {
							RiotControl.trigger('show', {ref: sections[i].toLowerCase() + '_contents'});
						} else {
							RiotControl.trigger('hide', {ref: sections[i].toLowerCase() + '_contents'});
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
    </script>
</header-tag>
