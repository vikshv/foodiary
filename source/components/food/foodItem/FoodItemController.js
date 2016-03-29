export default class FoodItem {
    constructor($scope, $state, FoodService) {
        this.$scope = $scope;
        this.$state = $state;
        this.foodService = FoodService;

        if (this.foodId) {
            this.item = this.foodService.getItem(this.foodId);
        } else {
            this.item = {};
        }
    }

    isHasError(attrName) {
        const item = this.$scope.foodItem[attrName];
        return item.$invalid && item.$dirty && item.$touched;
    }

    submit() {
        this._updateEnergy();
        if (this.foodId) {
            this._editItem();
        } else {
            this._addItem();
        }
    }

    _editItem() {
        this.foodService.editItem(this.item)
            .then(() => {
                this.$state.go('^');
            })
            .catch(error => {
                throw Error(error);
            });
    }

    _addItem() {
        const data = this._getItemData();
        this.foodService.addItem(data)
            .then(() => {
                this.$state.go('^');
            })
            .catch(error => {
                throw Error(error);
            });
    }

    _getItemData() {
        const { shortName, protein, fat, carbohydrate, energy } = this.item;
        return {
            shortName,
            protein,
            fat,
            carbohydrate,
            energy
        };
    }

    calcEnergy() {
        const { protein = 0, fat = 0, carbohydrate = 0 } = this.item;
        if (protein || fat || carbohydrate) {
            return protein * 4 + fat * 9 + carbohydrate * 4;
        }
    }

    _updateEnergy() {
        if (!this.item.energy) {
            this.item.energy = this.calcEnergy();
        }
    }
}
