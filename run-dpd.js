require('shelljs/global');

var port = 80
	, deployd = require('deployd')
	, httpProxy = require('http-proxy')
	,	dpd = deployd({
	  port: port,
		db: {
			port: 27017,
			host: 'localhost',
			name: 'deployd-com-2000'
		}
	});

dpd
	.listen()
	.on('error', function (err) {
	 console.error(err);
	})
	.on('listening', function () {
		console.log('listening on port %s', port);
	});
