import './style.less';

import app from './app';
import './components/navbar';
import './components/footer';
import './components/home';
import './components/diary';
import './components/food';
import './components/food/foodItem';
import './components/about';

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home><home>'
        });

    $stateProvider
        .state('diary', {
            url: '/diary',
            template: '<diary></diary>'
        });

    $stateProvider
        .state('food', {
            url: '/food',
            template: '<food></food>'
        })
        .state('food.new', {
            url: '/new',
            template: '<food-item></food-item>'
        })
        .state('food.edit', {
            url: '/edit/:foodId',
            template: '<food-item food-id="$ctrl.foodId"></food-item>',
            controller: function($stateParams) {
                this.foodId = $stateParams.foodId;
            },
            controllerAs: '$ctrl'
        });

    $stateProvider
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });
});
