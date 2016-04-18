export default class ProductAddDialogController {
    constructor($uibModalInstance, FoodService, data) {
        this.$uibModalInstance = $uibModalInstance;
        this.FoodService = FoodService;
        this._initForm(data);
    }

    _initForm(data) {
        if (data) {
            this.selectedItem = data;
            this.weight = data.weight;
            this.time = data.time;
        }
    }

    onClickOk() {
        const options = Object.assign({}, this.selectedItem, {
            weight: this.weight,
            time: this.time
        });
        this.$uibModalInstance.close(options);
    }

    onClickCansel() {
        this.$uibModalInstance.dismiss('close');
    }

    getItems(value) {
        return this.FoodService.getList();
    }

    onSelected() {
        
    }
}
