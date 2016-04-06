import moment from 'moment';

export default class CalendarYearController {
    constructor() {
        this.months = this._getMonths();
    }

    isCurrent(index) {
        const now = moment();
        const date = moment(this.date).month(index);
        return now.year() === date.year() && now.month() === date.month();
    }

    onClickMonth(index) {
        this.handlers.onClickMonth(index);
    }

    _getMonths() {
        const date = moment(this.date).startOf('year');
        let result = [];
        for (let month = 0; month < 12; month++, date.add(1, 'M')) {
            const name = this._getMonthName(date);
            result.push(name);
        }
        return result;
    }

    _getMonthName(momentDate) {
        const monthName = momentDate.format('MMMM');
        return monthName.charAt(0).toUpperCase() + monthName.slice(1);
    }
};
