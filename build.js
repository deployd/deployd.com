require('shelljs/global');

/**
 * run from app directory
 */

cd('app');

if (process.platform === 'win32') {
  exec('set DEPLOYD_COM_ENV=production');
  exec('node build');
} else {
  exec('DEPLOYD_COM_ENV=production ./build');	
}

cd('../');