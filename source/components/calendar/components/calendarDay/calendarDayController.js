let moment;
let DateService;

export default class CalendarDayController {
    constructor(_DateService_) {
        DateService = _DateService_;
        moment = DateService.getMoment();

        this.allChecked = false;

        this.items = [];
    }

    isEmpty() {
        return !this.items.length;
    }
};
