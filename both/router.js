Router.configure({
    layoutTemplate: 'appLayout'
});

//Router.map(function() {
//    this.route('eventos', {path: '/'});
//    this.route('FOOBAR', {path: '/FOOBAR'});
//    //this.route('eventos',{ path:'/eventos'});
//    this.route('foo',{ path:'/foo'});
//    this.route('bar',{ path:'/bar'});
//    this.route('canvas',{path:'canvas'});
//});


Router.route('/', {
    name: 'index'
});

Router.route('/eventos', {
    name: 'eventos'
});
//
//Router.route('/products/:_id', {
//    name: 'products.show'
//});

//Router.route('/users/:_id', {
//    name: 'users.show'
//});

Router.route('/canvasIonic', {
    name: 'canvasIonic'
});

Router.route('/foobar', {
    name: 'foobar'
});