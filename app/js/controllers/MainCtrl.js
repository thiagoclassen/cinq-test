(function () {
    'use strict';
    angular.module('app').controller('MainCtrl', ['DataService', function (DataService) {
        var controller = this;

        controller.list = [];

        DataService.getList().then(function (data) {
            controller.list = DataService.list();
        });
    }]);
})();