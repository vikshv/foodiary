import app from '../../../app';
import template from './template.html';
import './style.less';

export default app.component('foodTable', {
    template,

    bindings: {
        list: '<',
        loading: '<',
        handlers: '<',
    },

    controller: function() {
        this.allChecked = false;

        this.getRatio = item => {
            const protein = parseFloat(item.protein);
            const fat = parseFloat(item.fat);
            const carbohydrate = parseFloat(item.carbohydrate);
            const sum = protein + fat + carbohydrate;
            return `${this._getRatioValue(carbohydrate, sum)}/${this._getRatioValue(protein, sum)}/${this._getRatioValue(fat, sum)}`;
        };

        this.onChangeAllSelectCheckbox = () => {
            this.list.forEach(item => {
                item.checked = this.allChecked;
            });
            this.handlers.onChangeChecked();
        };

        this.onChangeSelectCheckbox = item => {
            this._syncAllCheckbox();
            this.handlers.onChangeChecked();
        };

        this._syncAllCheckbox = () => {
            const checkedCount = this.list.reduce((sum, item) => {
                return sum + item.checked;
            }, 0);
            if (checkedCount === this.list.length) {
                this.allChecked = true;
            } else {
                this.allChecked = false;
            }
        };

        this._getRatioValue = (value, sum) => {
            const n = value / sum;
            return n.toFixed(2);
        };

        this.isEmpty = () => {
            return this.list && !this.list.length && !this.loading;
        };
    },
});
