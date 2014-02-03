// chrck that the userId specified own the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}