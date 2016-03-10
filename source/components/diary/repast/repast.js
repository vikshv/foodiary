import 'angular';
import template from './template.html';

export default angular.module('app').component('repast', {
    bindings: {
        repast: '=',
    },
    template,
    controller: function() {
        this.onClickRepast = () => {
            this.isOpen = !this.isOpen;
        };
        this.getRepastWeight = data => _reduce(data, 'weight');
        this.getRepastCalory = data => _reduce(data, 'calory');
        this.getRepastProtein = data => _reduce(data, 'protein');
        this.getRepastFat = data => _reduce(data, 'fat');
        this.getRepastCarbs = data => _reduce(data, 'carbs');
    },
});

function _reduce(data, attr) {
    return data.reduce((sum, item) => {
        return sum + parseFloat(item[attr]);
    }, 0);
}
