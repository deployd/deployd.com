var self = this;

dpd.blogcomments.get({post: this.id}, function (comments) {
    if (query.includeComments) self.comments = comments;
    self.numComments = comments.length || 0;
});
