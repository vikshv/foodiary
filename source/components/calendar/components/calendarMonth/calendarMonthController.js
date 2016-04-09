let moment;
let DateService;

const baseclassName = 'week__day';
const dayClassNames = {
    otherMonth: `${baseclassName}--otherMonth`,
    weekend: `${baseclassName}--weekend`,
    currentDay: `${baseclassName}--currentDay`
};

export default class CalendarMonthController {
    constructor(_DateService_) {
        DateService = _DateService_;
        moment = DateService.getMoment();
    }

    getWeeks() {
        const date = moment(this.date, 'DD.MM.YYYY').startOf('month').startOf('week');
        const stopDate = moment(this.date, 'DD.MM.YYYY').endOf('month').endOf('week');
        let result = [];
        
        do {
            const week = date.format('X');
            date.add(7, 'd');
            result.push(week);
        } while (date < stopDate);

        return result;
    }

    getWeekNumber(week) {
        return moment(week, 'X').week();
    }

    getDay(week, day) {
        return this._getDate(week, day).date();
    }

    getWeekendClassName(day) {
        if (4 < day) {
            return dayClassNames.weekend;
        }
    }

    getOtherMonthClassName(week, day) {
        const isCurrentMonth = this._isMainMonth(week, day);
        if (!isCurrentMonth) {
            return dayClassNames.otherMonth;
        }
    }

    getCurrentDayClassName(week, day) {
        const date = this._getDate(week, day);
        const isCurrentDate = DateService.isCurrentDay(date);
        if (isCurrentDate) {
            return dayClassNames.currentDay;
        }
    }

    onClickWeek(week) {
        const date = moment(week, 'X');
        this.handlers.onClickWeek(date);
    }

    onClickDay(week, day) {
        const date = this._getDate(week, day);
        this.handlers.onClickDay(date);
    }

    _initWeeks() {
        this.weeks = this._getWeeks();
    }

    _isMainMonth(week, day) {
        const mainMonth = moment(this.date, 'DD.MM.YYYY').month();
        return this._getDate(week, day).month() === mainMonth;
    }

    _getDate(week, day) {
        return moment(week, 'X').add(day, 'd');
    }
};
