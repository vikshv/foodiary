import app from '../../app';
//import repast from './repast';
//import data from './data';
import template from './template.html';
import './style.less';

export default app.component('diary', {
    template,
    controller: function() {
        // this.repasts = data.today;

        // this.onClickToday = () => {
        //     this.repasts = data.today;
        // };

        // this.onClickTomorrow = () => {
        //     this.repasts = data.tomorrow;
        // };

        // this.getRepastWeight = () => _reduceAll(this.repasts, 'weight');
        // this.getRepastCalory = () => _reduceAll(this.repasts, 'calory');
        // this.getRepastProtein = () => {
        //     const value = _reduceAll(this.repasts, 'protein');
        //     return value.toFixed(1);
        // };
        // this.getRepastFat = () => {
        //     const value = _reduceAll(this.repasts, 'fat');
        //     return value.toFixed(1);
        // }
        // this.getRepastCarbs = () => {
        //     const value = _reduceAll(this.repasts, 'carbs');
        //     return value.toFixed(1);
        // }
    },
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
