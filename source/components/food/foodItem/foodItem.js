import app from '../../../app';
import '../../../services/FoodService';
import '../../../directives/floatValue';
import FoodItemController from './FoodItemController';
import template from './template.html';
import './style.less';

export default app.component('foodItem', {
    template,
    bindings: {
        foodId: '<'
    },
    controller: ['$scope', '$state', 'FoodService', FoodItemController]
});
