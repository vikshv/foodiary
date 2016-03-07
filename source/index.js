import './style.less';

import 'angular';
import 'angular-route';
import './controllers';
import './diary.js';

import homeTemplate from './templates/home.html';
import diaryTemplate from './templates/diary.html';
import aboutTemplate from './templates/about.html';


const app = angular.module('foodiaryApp', ['ngRoute', 'foodiaryControllers', 'diary']);

app.config(['$routeProvider', $routeProvider => {
    $routeProvider.
        when('/home', {
            template: homeTemplate,
            controller: 'HomeCtrl',
        }).
        when('/diary', {
            template: diaryTemplate,
            controller: 'DiaryCtrl',
        }).
        when('/about', {
            template: aboutTemplate,
            controller: 'AboutCtrl',
        }).
        otherwise({
            redirectTo: '/home',
        });
}]);
