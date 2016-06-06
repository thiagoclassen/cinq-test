(function () {
    'use strict';
    angular
        .module('app')
        .service('DataService', ['$http', function ($http) {

            var service = this;
            var list = [];

            this.getList = function () {
                return $http.get('http://127.0.0.1:3000/cinq/').success(function (data) {                    
                    list = data;
                });           
            };

            this.list = function () {
                return list;
            };

        }]);
})();