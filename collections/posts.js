// omitting var keyword here to make the posts collection
// available to the whole application
Posts = new Meteor.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		//only allow posting if you are logged in
		return !! userId;
	}
});
