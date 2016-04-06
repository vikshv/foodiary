import moment from 'moment';
import dayClassNames from './dayClassNames';

export default class CalendarMonthController {
    constructor() {
    }

    getWeeks() {
        const date = moment(this.date).startOf('month').startOf('week');
        const stopDate = moment(this.date).endOf('month').endOf('week');
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
        const isCurrentDate = this._isCurrentDate(week, day); 
        if (isCurrentDate) {
            return dayClassNames.currentDay;
        }
    }

    onClickDay(week, day) {
        const date = this._getDate(week, day);
        this.handlers.onClickDay(date.month(), date.date());
    }

    _initWeeks() {
        this.weeks = this._getWeeks();
    }

    _isMainMonth(week, day) {
        const mainMonth = moment(this.date).month();
        return this._getDate(week, day).month() === mainMonth;
    }

    _isCurrentDate(week, day) {
        const now = moment();
        const date = this._getDate(week, day);
        return now.year() === date.year() && now.month() == date.month() && now.date() === date.date();
    }

    _getDate(week, day) {
        return moment(week, 'X').add(day, 'd');
    }
};
