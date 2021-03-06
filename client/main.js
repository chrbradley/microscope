Deps.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt/1000),
      user_name: Meteor.user().username,
      user_id: Meteor.user()._id,
      user_hash: Meteor.user().intercomHash,
      widget: {
        activator: "#Intercom",
        use_counter: true
      },
      app_id: "5016e18208eec71930649c46a1cd29689cd6db42"
    };
    Intercom('boot', intercomSettings);
  }
});