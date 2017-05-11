<content-tag>
    <div class="contents col s12" show={ visible }><yield /></div>

    <script>
        var self = this;

        self.store = opts.store;
        self.ref = opts.ref;
        self.visible = false;

        RiotControl.on('set_contents', function(data) {
			if (data == undefined || (data != undefined && data.ref == self.ref)) {
				self.root.children[0].innerHTML = data.contents;
				self.update();
			}
        });
        
        RiotControl.on('show', function(data) {
			if (data == undefined || (data != undefined && data.ref == self.ref)) {
				self.visible = true;
				var child = Object.keys(self.tags);
				self.tags[child[0]].update_contents(data.args);
				self.update();
			}
		});
		
		RiotControl.on('hide', function(data) {
			if (data == undefined || (data != undefined && data.ref == self.ref)) {
				self.visible = false;
				self.update();
			}
		});
		
		RiotControl.on('toggle_visibility', function(data) {
			if (data == undefined || (data != undefined && data.ref == self.ref)) {
				self.visible = !self.visible;
				self.update();
			}
		});
    </script>
</content-tag>
