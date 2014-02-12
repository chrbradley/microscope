Deps.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt/1000),
      user_name: Meteor.user().username,
      app_id: "9b593f5995da6d2bd8f418754c0411d55201258a"
    };
    Intercom('boot', intercomSettings);
  }
});
