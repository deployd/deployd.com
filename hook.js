/**
 * handles POST from github and restarts
 */

require('shelljs/global');

function restart() {
	
}

var http = require('http');

http.createServer(function (req, res) {
  var output = '';
  
  if(req.url === '/hook') {
    cd(__dirname);
    output += exec('git pull origin prod').output;
    output += exec('node build.js').output;
    output += exec('forever restart run-dpd.js').output;
    console.log('restarting deployd.com %s', new Date().toString());
  }
  
  res.end(output);
})
.listen(3000);