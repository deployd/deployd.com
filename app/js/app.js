angular.module('dpdApp', []).
  directive('installer', function () {
    return {
      restrict: 'E',
      template: [
        '<div>',
          '<span ng-hide="installCtrl.expanded">',
            '<a ng-click="installCtrl.expanded = true" class="btn-primary btn btn-large">Install deployd</a>',
            '<span class="install-version">v0.8.0 preview - <a href="https://github.com/deployd/deployd">Apache 2.0 License</a></span>',
          '</span>',
          '<span ng-show="installCtrl.expanded">',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://github.com/deployd/deployd#install-on-macosx"><img src="img/apple.gif">',
              '<br>mac</a>',
            '</div>',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://bintray.com/artifact/download/deployd/dpd-win-installer/deployd-win-0.8.0.exe"><img src="img/win.gif">',
              '<br>win</a>',
            '</div>',
            '<div class="span1 platform">',
              '<a target="_blank" href="https://github.com/deployd/deployd/zipball/v0.8.0"><img src="img/source.png">',
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
