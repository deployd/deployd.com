if (query.getChildren) {
    dpd.communityposts.get({
        parentMessageId: this.id,
        $sort: {postedTime: 1}
    }, function(posts) {
        this.childPosts = posts;
    });
}