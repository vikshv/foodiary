import productAddDialogTemplate from './productAddDialog/template.html';
import productAddDialogController from './productAddDialog/productAddDialogController.js';

export default class CalendarDayController {
    constructor(DateService, $uibModal, FoodRatioService) {
        this.DateService = DateService;
        this.$uibModal = $uibModal;
        this.moment = DateService.getMoment();
        this.FoodRatioService = FoodRatioService;

        this._initData();
    }

    _initData() {
        this.items = [];
        this.loading = true;
        this.handlers.getData(this.date)
            .then(result => {
                this.items = result;
                this.total = this._initTotal();
                this.loading = false;
            });
    }

    _initTotal() {
        const carbohydrate = this._getTotal('carbohydrate');
        const protein = this._getTotal('protein');
        const fat = this._getTotal('fat');
        const ratio = this.FoodRatioService.getRatio(carbohydrate, protein, fat);
        return {
            weight: this._getTotal('weight'),
            energy: this._getTotal('energy'),
            carbohydrate,
            protein,
            fat,
            ratio
        };
    }

    isEmpty() {
        return !this.items.length;
    }

    onClickAdd() {
        const modal = this.$uibModal.open({
            animation: true,
            template: productAddDialogTemplate,
            controller: productAddDialogController,
            controllerAs: '$ctrl'
        });
        modal.result.then(data => {
            this._addItem(data);
        });
    }

    getRatio(item) {
        const { carbohydrate, protein, fat } = item;
        return this.FoodRatioService.getRatio(carbohydrate, protein, fat);
    }

    _getTotal(paramName) {
        const result = this.items.reduce((sum, item) => {
            return sum + parseFloat(item[paramName]);
        }, 0);
        return result.toFixed(0);
    }

    _addItem(data) {
        const { shortName, protein, fat, energy, carbohydrate, weight, time } = data;
        const k = weight / 100;
        const item = {
            shortName,
            protein: this._scaleValue(protein, k),
            fat: this._scaleValue(fat, k),
            energy: this._scaleValue(energy, k),
            carbohydrate: this._scaleValue(carbohydrate, k),
            weight,
            time
        };
        this.handlers.setData(item, this.date)
            .then(result => {
                debugger;
            });
    }

    _scaleValue(value, k) {
        const result = value * k;
        return result.toFixed(2);
    }
};
