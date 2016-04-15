export default class FoodRatioServiceController {
    /* @ngInject */
    constructor() {
    }

    getRatio(carbohydrate, protein, fat) {
        const p = parseFloat(protein);
        const f = parseFloat(fat);
        const c = parseFloat(carbohydrate);
        const sum = p + f + c;
        return `${this._getRatioValue(c, sum)}/${this._getRatioValue(p, sum)}/${this._getRatioValue(f, sum)}`;
    }

    _getRatioValue(value, sum) {
        const n = value / sum;
        return n.toFixed(2);
    }
}
