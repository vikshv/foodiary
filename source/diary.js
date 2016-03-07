import 'angular';
import 'angular-animate';
import repastTemplate from './templates/diary/repast.html';
import data from './data';
import './animations.less';

const diary = angular.module('diary', []);

diary.controller('DiaryCtrl', ['$scope', $scope => {
    $scope.repasts = data.today;

    $scope.onClickToday = () => {
        $scope.repasts = data.today;
    };

    $scope.onClickTomorrow = () => {
        $scope.repasts = data.tomorrow;
    };

    $scope.getRepastWeight = () => _reduceAll($scope.repasts, 'weight');
    $scope.getRepastCalory = () => _reduceAll($scope.repasts, 'calory');
    $scope.getRepastProtein = () => {
        const value = _reduceAll($scope.repasts, 'protein');
        return value.toFixed(1);
    };
    $scope.getRepastFat = () => {
        const value = _reduceAll($scope.repasts, 'fat');
        return value.toFixed(1);
    }
    $scope.getRepastCarbs = () => {
        const value = _reduceAll($scope.repasts, 'carbs');
        return value.toFixed(1);
    }
}]);

diary.directive('repast', () => {
    return {
        scope: true,
        restrict: 'E',
        template: repastTemplate,
        link: scope => {
            scope.onClickRepast = () => {
                scope.isOpen = !scope.isOpen;
            };
            scope.getRepastWeight = data => _reduce(data, 'weight');
            scope.getRepastCalory = data => _reduce(data, 'calory');
            scope.getRepastProtein = data => _reduce(data, 'protein');
            scope.getRepastFat = data => _reduce(data, 'fat');
            scope.getRepastCarbs = data => _reduce(data, 'carbs');
        },
    };
});

function _reduce(data, attr) {
    return data.reduce((sum, item) => {
        return sum + parseFloat(item[attr]);
    }, 0);
}

function _reduceAll(repasts, attr) {
    return repasts.reduce((sum, repast) => {
        return sum + _reduce(repast.data, attr);
    }, 0);
}
