import productAddDialogTemplate from './productAddDialog/template.html';
import productAddDialogController from './productAddDialog/productAddDialogController.js';

export default class CalendarDayController {
    constructor(DateService, $uibModal) {
        this.DateService = DateService;
        this.$uibModal = $uibModal;
        this.moment = DateService.getMoment();

        this.allChecked = false;

        this.items = [];
    }

    isEmpty() {
        return !this.items.length;
    }

    onClickAdd() {
        this.$uibModal.open({
            animation: true,
            template: productAddDialogTemplate,
            controller: productAddDialogController,
            controllerAs: '$ctrl'
        });
    }
};
