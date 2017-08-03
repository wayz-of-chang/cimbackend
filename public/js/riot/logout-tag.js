<logout-tag>
    <span>Logging out</span>


    <script>
        var self = this;

        self.update_contents = function(args) {
            RiotControl.trigger('logout');
            return false;
        };

        self.on('mount', function() {
        });

    </script>
</logout-tag>
