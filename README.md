# deployd.com homepage
This repository contains the source of the website [deployd.com](http://www.deployd.com).

It is hosted via [github pages](https://pages.github.com/).

### To update the website

1. Create a new branch `git checkout -b new-change`
2. Make your changes in the angular app (in the `/app`folder)
3. Build the sources with Grunt `grunt production`
4. Test locally your changes `python -m SimpleHTTPServer`
5. Push your branch on github `git push origin new-change`
6. [Create a PR](https://github.com/deployd/deployd.com/) and assign it to another contributor


If you have any questions, join us in [the gitter chat room](https://gitter.im/deployd/deployd).
