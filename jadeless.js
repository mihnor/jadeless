if (Meteor.isClient) {

    Session.set("Mongol", {
        'collections': ['Canvas', 'CanvasSimple'],
        'display': true,
        'opacity_normal': ".7",
        'opacity_expand': ".9",
    });
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Meteor.call("checkEventos", function (err, results) {

    if(err) {
      Session.set('catracaEventos', "Error:" + err.reason);
      return;
    }
    //console.log(results.content); //results.data should be a JSON object
    var foo = JSON.parse(results.content);
    Session.set("catracaEventos",foo.results.collection1);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    checkEventos: function () {
      this.unblock();
      return Meteor.http.call("GET", "https://www.kimonolabs.com/api/434rgm1i?apikey=Bhu6t0fK38Q3Q8wz2HM3GPuIAegBVbAf");
    }
  });
}

