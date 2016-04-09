import app from '../../app';
import FoodItemController from './FoodItemController';
import template from './template.html';
import './style.less';

app.component('foodItem', {
    template,
    
    bindings: {
        foodId: '<'
    },

    controller: FoodItemController
});
