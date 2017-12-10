<shepherding-tag>
    <div class="fixed-action">
        <a role="button" class="btn btn-primary" href="https://docs.google.com/spreadsheets/d/1QYTWY2zUc_AS9D3PQZpa6Q8ie3KzcdZWRyot343MnAY/edit?usp=sharing" target="_blank">
                <i class="material-icons">edit</i>
        </a>
    </div>
    <input show={ false } id="service_fileupload" type="file" name="files[]" data-url="/service/upload" multiple>
    <iframe style="display: flex; flex-grow: 1; width: 100%; height: 100%;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3RN6l--WsK3S1BjxCK0x7pcl8Zjc5C8AoeQHyNj0xInXbdtY5u2TnLVYeNvF_5WUd8s7hP5NfPM3g/pubhtml?gid=643606701&single=true"></iframe>
    
    <style>
	    .fixed-action {
		    position: fixed;
		    bottom: 7px;
		    right: 15px;
		}
    
    </style>
    
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
</shepherding-tag>
