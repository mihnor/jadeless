Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('Home', {path: '/'});
    this.route('FOOBAR', {path: '/FOOBAR'});
    this.route('eventos',{ path:'/eventos'});
    this.route('foo',{ path:'/foo'});
    this.route('bar',{ path:'/bar'});
});