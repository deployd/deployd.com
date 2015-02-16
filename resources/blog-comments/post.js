/* Authentication */
// if (!me || !me.isAdmin) {
//   cancel("You must be an admin!", 401);
// }

/* Automatic properties */
// this.creator = me.id;
// this.creatorName = me.name;
this.created = new Date().getTime();

emit("newComment", this);