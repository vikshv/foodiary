import app from './app';

import './directives/floatValue';

import './services/AuthService';
import './services/FoodService';
import './services/DiaryService';
import './services/UrlsService';
import './services/FoodRatioService';

import './style.less';

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/promo');

    $stateProvider
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });
});
