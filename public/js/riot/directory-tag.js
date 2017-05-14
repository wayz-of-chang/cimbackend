<directory-tag>
	<span>This section is hosted by the church in Plano website.  Click <a href="" onclick={ redirect_to_cip }>here</a> to go there.</span>
	
	
    <script>
        var self = this;

		self.update_contents = function(args) {
			if (confirm("Redirect to the church in Plano website?")) {
				self.redirect_to_cip();
			}
		};
		
		self.redirect_to_cip = function() {
			window.location = "http://churchinplano.org/weeklynews/AR.htm";
		};

		self.on('mount', function() {
		});
        
    </script>
</directory-tag>
