(function () {
    'use strict';
    angular
        .module('app')
        .directive('pplbox', function () {
            return {
                restrict: 'E',
                scope: {
                    list: '='
                },
                templateUrl: 'templates/pplBox.html',
                controller: ['$scope', '$interval', '$timeout', function ($scope, $interval, $timeout) {

                    var timerPromise;
                    
                    $scope.ix = 0;

                    $scope.change = function () {
                        $scope.timerStart();
                        $scope.ix < $scope.list.length - 1 ? $scope.ix += 1 : $scope.ix = 0;
                    };

                    $scope.timerStart = function () {
                        
                        $scope.timerStop();
                        
                        timerPromise = $interval(function () {
                            $timeout(function () {
                                $('.pplBox').trigger("click");
                            });
                        }, 4000);                        
                    };
                    
                    $scope.timerStop = function(){
                      $interval.cancel(timerPromise);  
                    };                    
                    
                    $scope.timerStart();


                }],
                link: function (scope, element) {
                    element.on("click", function () {
                        $('.quote').hide().fadeIn("slow");
                        $('.author').hide().fadeIn("slow");
                    });
                }
            };
        });
})();