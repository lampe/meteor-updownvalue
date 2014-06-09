if (Meteor.isClient) {
  Meteor.startup(function() {
    Session.set("value", 0);
  })
  Template.hello.events({
    'keydown input' : function(e) {
      console.log(e.which)
      switch ( e.which ) {
        // UP ARROW
        case 38:
          Session.set("value", Session.get("value")+1)
          break;
        // DOWN ARROW
        case 40:
          Session.set("value", Session.get("value")-1)
          break;
      }
     }
  });

  Deps.autorun(function () {
    if (Session.get("value")) {
      document.getElementById('myin').value = Session.get("value");
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
