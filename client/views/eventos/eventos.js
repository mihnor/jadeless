/**
 * Created by apple on 20/02/15.
 */
if(Meteor.isClient){

Template.eventos.helpers({
    catraca: function () {
        return Session.get('catracaEventos');
    }
});


Meteor.call("checkEventos", function (err, results) {

    if(err) {
        Session.set('catracaResponse', "Error:" + err.reason);
        return;
    }
    Session.set('catracaResponse', results.content);
});

    //return results.content; //results.data should be a JSON object

}