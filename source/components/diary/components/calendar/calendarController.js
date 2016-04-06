import moment from 'moment';
import periodValues from './periodValues';

export default class CalendarController {
    constructor() {
        moment.locale('ru');

        this._initPeriod();
        this._initYearHandlers();
        this._initMonthHandlers();
    }

    isYear() {
        return this.period === periodValues.year;
    }

    isMonth() {
        return this.period === periodValues.month;
    }

    isWeek() {
        return this.period === periodValues.week;
    }

    isDay() {
        return this.period === periodValues.day;
    }

    _initPeriod() {
        if (!this.period) {
            this.period = periodValues.month;
        }
    }

    _initYearHandlers() {
        this.yearHandlers = {
            onClickMonth: month => {
                this.date = moment(this.date).month(month);
                this.period = periodValues.month;
            }
        };
    }

    _initMonthHandlers() {
        this.monthHandlers = {
            onClickDay: (month, date) => {
                this.date = moment(this.date).month(month).date(date);
                this.period = periodValues.week;
            }
        };
    }
};
