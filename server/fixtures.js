if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope - Fixture',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor - Fixture',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book - Fixture',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });
}