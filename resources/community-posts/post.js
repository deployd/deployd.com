this.postedTime = new Date().getTime();
protect('authorRole');

if (me) {
    this.author = me.name;
    this.authorRole = me.role;
}

emit('community:post:create', this);

