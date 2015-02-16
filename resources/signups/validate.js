// require email
if(this.email) {
  var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if(this.email.match(pattern)) {
    this.created = new Date().getTime();   
  } else {
    error('email', 'invalid email');
  }  
} else {
  error('email', 'required');
}