export default class ProductAddDialogController {
    constructor($uibModalInstance) {
        this.$uibModalInstance = $uibModalInstance;
    }

    onClickOk() {
        this.$uibModalInstance.close();
    }

    onClickCansel() {
        this.$uibModalInstance.dismiss('close');
    }
}
