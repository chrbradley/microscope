var crypto = Npm.require('crypto');

IntercomHash = function( user, secret ) {
  var secret = new Buffer( secret, 'utf8' )
  return crypto.createdHmac( 'sha256', secret )
    .update(user._id).digest('hex');
}