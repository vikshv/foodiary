export default class FoodTableController {
    constructor(FoodRatioService) {
        this.FoodRatioService = FoodRatioService;
        this.allChecked = false;
    }

    getRatio(item) {
        const { carbohydrate, protein, fat } = item;
        return this.FoodRatioService.getRatio(carbohydrate, protein, fat);
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

    isEmpty() {
        return this.list && !this.list.length && !this.loading;
    }
}
