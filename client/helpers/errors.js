// Local (client-only) collection
Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.inster({message: message})
}