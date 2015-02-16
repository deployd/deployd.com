/* Authentication */
// if (!me || !me.isAdmin) {
//   cancel("You must be an admin!", 401);
// }

/* Automatic properties */
// this.creator = me.id;
// this.creatorName = me.name;
if (!me || !me.isAdmin) cancel();
if (!this.created) this.created = new Date().getTime();

if (!this.summary) {
    //Let's create a short version, 200 characters
    this.summary = this.content.replace(/<(?:.|\n)*?>/gm, '');
    //Get through the end of the sentence
    var postSummary = this.summary.slice(200, -1);
    var endPoint = postSummary.indexOf('.');
    
    this.summary = this.summary.slice(0,endPoint);
}