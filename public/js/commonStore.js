function CommonStore() {
    riot.observable(this);

    var self = this;

    self.on('login', function(data) {
        console.log(data.username);
        console.log(data.password);
    });
}