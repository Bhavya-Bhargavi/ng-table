
angular.module("table", ["ngTable"]);
    
    angular.module("table")
        .controller("myCtrl", ["$scope","$http", "ngTableParams",  function($scope,$http,ngTableParams){
            var tableData = []
        $scope.tableParams = new ngTableParams({
            page:1, count:10
        },{
        total:tableData.length,
        //Returns the data for rendering
        getData : function($defer,params){
            $http.get('data.json').then(function(response) {
                tableData = response.data.person;
                $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                params.total(tableData.length);
            });
            }
        });
       
}]);
