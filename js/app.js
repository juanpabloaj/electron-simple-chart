angular.module('app', [])
  .controller('SimpleCtrl', function SimpleCtrl($scope){

    $scope.values = [
      ['a', 1], ['b', 3], ['c', 2]
    ];

  })
  .directive('simpleColumn', function(){
    return {
      restrict: 'C',
      replace: true,
      scope: {
        items: '='
      },
      template: '<div id="container"></div>',
      link: function (scope, element, attrs){
        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'container',
          },
          title: {
            text: 'Chart in Electron'
          },
          series: [{
            type: 'column',
            data: scope.items
          }],
          credits: {
            enabled: false
          }
        });

        scope.$watch('items', function(newValue){
          chart.series[0].setData(newValue, true);
        }, true);

      }
    };
  });
