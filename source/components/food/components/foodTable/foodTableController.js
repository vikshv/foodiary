export default class FoodTableController {
    constructor() {
        this.allChecked = false;
    }

    getRatio(item) {
        const protein = parseFloat(item.protein);
        const fat = parseFloat(item.fat);
        const carbohydrate = parseFloat(item.carbohydrate);
        const sum = protein + fat + carbohydrate;
        return `${this._getRatioValue(carbohydrate, sum)}/${this._getRatioValue(protein, sum)}/${this._getRatioValue(fat, sum)}`;
    }

    onChangeAllSelectCheckbox() {
        this.list.forEach(item => {
            item.checked = this.allChecked;
        });
        this.handlers.onChangeChecked();
    }

    onChangeSelectCheckbox(item) {
        this._syncAllCheckbox();
        this.handlers.onChangeChecked();
    }

    _syncAllCheckbox() {
        const checkedCount = this.list.reduce((sum, item) => {
            return sum + item.checked;
        }, 0);
        if (checkedCount === this.list.length) {
            this.allChecked = true;
        } else {
            this.allChecked = false;
        }
    }

    _getRatioValue(value, sum) {
        const n = value / sum;
        return n.toFixed(2);
    }

    isEmpty() {
        return this.list && !this.list.length && !this.loading;
    }
}
