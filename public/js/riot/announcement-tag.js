<announcement-tag>
  	<object style="display: flex; flex-grow: 1; width: 100%; height: 100%;" data="">
	</object>
	
    <script>
        var self = this;

		self.update_contents = function(args) {
			self.root.querySelector('object').data = args.url;
		};

		self.on('mount', function() {
		});
        
    </script>
</announcement-tag>
