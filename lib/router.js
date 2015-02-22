Router.configure({
    layoutTemplate: 'appLayout'
});

Router.map(function() {
    this.route('eventos', {path: '/'});
    this.route('FOOBAR', {path: '/FOOBAR'});
    //this.route('eventos',{ path:'/eventos'});
    this.route('foo',{ path:'/foo'});
    this.route('bar',{ path:'/bar'});
});