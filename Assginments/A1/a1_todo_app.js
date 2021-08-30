var myapp= angular.module("myapp", ["ngRoute"]);

myapp.service("ToDoService", function() {
    this.addTsk= function(arr, t) {
        arr.push(t);
        return(arr);
    }
    this.deleteTsk= function(arr, val) {
        for(let i=0; i< arr.length; i++) {
            if(arr[i]=== val) {
                arr.splice(i, 1);
                break;
            }
        }
        return(arr);
    }
});

myapp.controller("content_ctrl", ($scope, ToDoService) => {
    $scope.task_list= new Array();
    $scope.t_name= "";

    $scope.addTask= function() {
        if($scope.t_name) {
            ToDoService.addTsk($scope.task_list, $scope.t_name);
        }
        $scope.t_name= "";
    }

    $scope.completeTask= function(arr, val) {
        console.log("Removing ", val);
        ToDoService.deleteTsk($scope.task_list, val);
    }
});