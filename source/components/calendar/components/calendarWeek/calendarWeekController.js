let moment;
let DateService;

const baseclassName = 'week__day';
const dayClassNames = {
    otherMonth: `${baseclassName}--otherMonth`,
    weekend: `${baseclassName}--weekend`,
    currentDay: `${baseclassName}--currentDay`
};

export default class CalendarWeekController {
    constructor(_DateService_) {
        DateService = _DateService_;
        moment = DateService.getMoment();
    }

    getWeekNumber() {
        return moment(this.date, 'DD.MM.YYYY').week();
    }

    onClickDay(day) {
        const date = this._getDate(day);
        this.handlers.onClickDay(date);
    }

    getWeekendClassName(day) {
        if (4 < day) {
            return dayClassNames.weekend;
        }
    }

    getDay(day) {
        return this._getDate(day).date();
    }

    getCurrentDayClassName(day) {
        const date = this._getDate(day);
        const isCurrentDate = DateService.isCurrentDay(date);
        if (isCurrentDate) {
            return dayClassNames.currentDay;
        }
    }

    _getDate(day) {
        return moment(this.date, 'DD.MM.YYYY').startOf('week').add(day, 'd');
    }
};
