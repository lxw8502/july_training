var app = angular.module("app", []);
app.controller("search", ["$scope", function($scope){  
    var articles = [
        {
            img: "./img/1.jpg",
            text: "50 Must-have plugins for extending Twitter Bootstrap",
        },
        {
            img: "./img/2.jpg",
            text: "Making a Super Simple Registeration System With PHP and MySQL",
        },        
        {
            img: "./img/3.png",
            text: "Creater a slide-out footer with this neat z-index trick",
        },        
        {
            img: "./img/4.png",
            text: "How to make a Digital Clock with jQuery and CSS3",
        },
    ];


    $scope.articles = articles;
    $scope.searchItem = function(text){
        if(text=="") $scope.articles = articles;
        else{
            var filterResult = [];
            for(article of articles){
                var target = article.text.toLowerCase();
                var searchText = text.toLowerCase();
                if(target.search(searchText) != -1){
                    filterResult.push(article);
                }
            }
            $scope.articles = filterResult;
        }
    }
}])