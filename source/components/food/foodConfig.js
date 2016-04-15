import app from './app';

app.config(function($stateProvider) {
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
});
