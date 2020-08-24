var app = angular.module("app", []);
app.controller("count", ["$scope", function($scope){  
    var services = [
        {
            type: "Web Development",
            price: 300,
            selected: false
        },
        {
            type: "Design",
            price: 400,
            selected: false
        },        
        {
            type: "Integration",
            price: 250,
            selected: false
        },        
        {
            type: "Training",
            price: 220,
            selected: false
        }
    ];
    
    $scope.services = services;
    $scope.total = 0;
    $scope.add = function(item){
        console.log(event)
        if(!item.selected){
            $scope.total = $scope.total + item.price;
            item.selected = true;
            if(event.target.tagName == "SPAN"){
                event.target.parentElement.style.backgroundColor = "#8DC16E";
            }else{
                event.target.style.backgroundColor = "#8DC16E";
            }
        }else{
            $scope.total = $scope.total - item.price;
            item.selected = false;
            if(event.target.tagName == "SPAN"){
                event.target.parentElement.style.backgroundColor = "#db626c";
            }else{
                event.target.style.backgroundColor = "#db626c ";
            }
        }
    }
}])