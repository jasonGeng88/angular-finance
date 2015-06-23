//登录
app.controller('LoginCtrl',function($scope,$http,$location) {
  $scope.submit=function(){
    var data={
              username:$scope.account,
              passwd:$scope.password,
              remember:$scope.remember
    }
    $http.post(apiIp+'/GetLogin',data).
    success(function(data, status, headers, config) {
      if (data.status==0) {
        $scope.error=data.info;
      } else if (data.status==1) {
        $location.path("/category").search({info: data.info});
      };
      
    }).
    error(function(data, status, headers, config) {
      $scope.error='登录失败！';
    });
  }
});
//目录
app.controller('CategoryCtrl',function($scope,$http,$location) {
  $scope.length=$location.search().info.length;
  $scope.roleids=$location.search().info;
  $scope.entrance=function(e){
    $scope.ss=e.target.getAttribute('_entrancepro');
    $scope.pp=11;
    // var entraPro=clickEvent.getAttribute('_entrancepro');
    // var entraPro=$(this).attr('_entrancepro');
    // alert(entraPro);
  }
});