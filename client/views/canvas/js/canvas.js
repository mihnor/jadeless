Template.canvas.events({
    'mouseenter [rel=popover]': function (event) {
        // increment the counter when button is clicked
        //var a = event.target;
        //console.log(event.target);
        //a.popover('show');
        //alert("whoa!");
        //var checked = $(event.target);
        //checked.popover('show');


    }
});

$(document).ready(function() {
  $('a[rel=popover]').click(function() {
    $(this).popover('toggle');
  });

  $('a[rel=popover]').hover(function() {
    $(this).popover(('show'));
  }, function() {
    $(this).popover('hide');
  });
});

