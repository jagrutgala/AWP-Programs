var myapp= angular.module("myapp", []);
myapp.controller("sLang", function($scope){
    $scope.msg= "";
    $scope.php= function() {
        $scope.msg= "PHP";
    }
    $scope.java= function() {
        $scope.msg= "Java";
    }
    $scope.custom= function(lang) {
        $scope.msg= lang;
    }
    
});