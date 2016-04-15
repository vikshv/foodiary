export default class ProductAddDialogController {
    constructor($uibModalInstance, FoodService) {
        this.$uibModalInstance = $uibModalInstance;
        this.FoodService = FoodService;
    }

    onClickOk() {
        const { shortName, protein, fat, energy, carbohydrate } = this.selectedItem;
        this.$uibModalInstance.close({
            shortName,
            protein,
            fat,
            energy,
            carbohydrate,
            weight: this.weight,
            time: this.time
        });
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
