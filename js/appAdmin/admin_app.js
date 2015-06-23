var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'LoginCtrl',
            templateUrl : 'login.html',
        })
        .when('/category', {
            controller : 'CategoryCtrl',
            templateUrl : 'template/tplAdmin/category.html',
        })
        .otherwise({
            controller : 'LoginCtrl',
            templateUrl : 'login.html'
        });
}]);
// var apiIp="http://192.168.40.252/webService-finance/Api";
var apiIp="http://192.168.2.115/webService/index.php/Api";
