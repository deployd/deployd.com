angular.module('dpdApp', []).
  directive('installer', function () {
    return {
      restrict: 'E',
      template: [
        '<div>',
          '<span ng-hide="installCtrl.expanded">',
            '<a ng-click="installCtrl.expanded = true" class="btn-primary btn btn-large">Install deployd</a>',
            '<span class="install-version">v0.6.10 preview - <a href="https://github.com/deployd/deployd">Apache 2.0 License</a></span>',
          '</span>',
          '<span ng-show="installCtrl.expanded">',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://docs.google.com/file/d/0Bw6GBXhPGkUGazBiaEFmbERZVVE
"><img src="/deployd.com/img/apple.gif">',
              '<br>mac</a>',
            '</div>',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://docs.google.com/file/d/0Bw6GBXhPGkUGa0c1VldLOGNZNjg"><img src="/deployd.com/img/win.gif">',
              '<br>win</a>',
            '</div>',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://github.com/deployd/deployd/zipball/v0.6.10"><img src="/deployd.com/img/source.png">',
              '<br>source</a>',
            '</div>',
            '<a class="cancel" ng-click="installCtrl.expanded = false">cancel</a>',
          '</span>',
        '</div>'
      ].join('\n'),
      controllerAs: 'installCtrl',
      controller: function () {
        this.expanded = false;
      }
    }
  });
