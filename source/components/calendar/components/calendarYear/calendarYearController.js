let moment;
let DateService;

export default class CalendarYearController {
    constructor(_DateService_) {
        DateService = _DateService_;
        moment = DateService.getMoment();

        this._initMonths();
    }

    _initMonths() {
        this.months = this._getMonths();
    }

    isCurrent(month) {
        const date = moment(this.date, 'DD.MM.YYYY').month(month);
        return DateService.isCurrentMonth(date);
    }

    onClickMonth(month) {
        this.handlers.onClickMonth(month);
    }

    _getMonths() {
        let result = [];
        for (let month = 0; month < 12; month++) {
            const name = DateService.getMonthName(month);
            result.push(name);
        }
        return result;
    }
};
