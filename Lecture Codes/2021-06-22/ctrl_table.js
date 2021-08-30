myapp= angular.module("myapp", []);
myapp.controller("rollcall_table", function($scope){
    $scope.rollcall= [
        {names: "Dhruvit", roll: 2},
        {names: "Jagrut", roll: 5},
        {names: "Raunak", roll: 6},
        {names: "Hatim", roll: 30}
    ];
});