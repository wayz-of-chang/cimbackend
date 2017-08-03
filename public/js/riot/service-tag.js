<service-tag>
    <!--<div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn-large red">
            <i class="material-icons">menu</i>
        </a>
        <ul>-->
            <!--<li><a class="btn-floating red"><i class="material-icons">add</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>-->
            <!--<li><a class="btn-floating blue" onclick={ open_upload_dialog }>
                <i class="material-icons">attach_file</i>
            </a></li>
        </ul>
    </div>
    <input show={ false } id="service_fileupload" type="file" name="files[]" data-url="/service/upload" multiple>-->
    <iframe style="display: flex; flex-grow: 1; width: 100%; height: 100%;" src="https://docs.google.com/spreadsheets/d/1QYTWY2zUc_AS9D3PQZpa6Q8ie3KzcdZWRyot343MnAY/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false">
    </iframe>

    <script>
        var self = this;

        self.upload_service_schedule = function(e) {
            RiotControl.trigger('login', {username: $('#username').val(), password: $('#password').val()});
        };

        self.open_upload_dialog = function(e) {
            $('#service_fileupload').click();
        };

        self.update_contents = function(args) {
            console.log(args);
        };

        self.on('mount', function() {
            var url = '/service/upload';
            $('#service_fileupload').fileupload({
                url: url,
                dataType: 'json',
                done: function (e, data) {
                    console.log(data.result.files);
                },
                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    console.log(progress);
                }
            }).prop('disabled', !$.support.fileInput)
                .parent().addClass($.support.fileInput ? undefined : 'disabled');
        });

    </script>
</service-tag>
