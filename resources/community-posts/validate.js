this.message = (this.message || "").trim();

if (!this.message) {
    error('body', "Message is required");
}
if (this.message.length > 500) {
    error('body', "Message must be less than 500 characters");
}

this.author = (this.author || "").trim();

if (!this.author) {
    error('author', "Your name is required");
}
if (this.author.length > 20) {
    error('author', "Name must be less than 20 characters");
}