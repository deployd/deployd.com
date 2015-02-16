/* Validation */
// if (this.name.length < 10) {
//   error("name", "Must be at least 10 characters");
// }

if (!this.post) {
    error("post", "Comment must be attached to a post");
}
if (!this.commentor) {
    error("commentor", "A commentor must be provided");
}
if (!this.commentText) {
    error("commentText", "A comment must be provided");
}