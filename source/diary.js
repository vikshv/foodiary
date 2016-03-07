import angular from 'angular';
import repastTemplate from './templates/diary/repast.html';
import repasts from './repasts';

const diary = angular.module('diary', []);

diary.directive('repastCollection', () => {
    return {
        scope: true,
        restrict: 'E',
        link: scope => {
            scope.repasts = repasts;
        },
    };
});

diary.directive('repast', () => {
    return {
        scope: true,
        restrict: 'E',
        template: repastTemplate,
    };
});
