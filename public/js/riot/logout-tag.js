<logout-tag>
    <span>Logging out</span>


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
</logout-tag>
