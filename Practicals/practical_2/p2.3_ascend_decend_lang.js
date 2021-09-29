myapp = angular.module("myapp", []);
myapp.controller("lang_ctrl", function ($scope) {
    $scope.languages = [
        {"tut": "HTML"},
        {"tut": "Python"},
        {"tut": "Java"},
        {"tut": "Android"},
        {"tut": "CSS"},
        {"tut": "AngularJS"},
        {"tut": "ReactJs"}
    ];
});