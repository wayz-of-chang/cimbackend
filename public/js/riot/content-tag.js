<content-tag>
    <div class="contents col s12"></div>

    <script>
        var self = this;

        RiotControl.on('set_contents', function(data) {
            self.root.children[0].innerHTML = data.contents;
            self.update();
        });
    </script>
</content-tag>