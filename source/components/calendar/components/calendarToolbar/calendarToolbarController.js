let moment;
let DateService;

export default class CalendarToolbarController {
    constructor(_DateService_, DatePeriodService) {
        moment = _DateService_.getMoment();
        DateService = _DateService_;

        this.periodValues = DatePeriodService.getPeriodValues();

        this.peiodKeys = {
            [this.periodValues.year]: 'y',
            [this.periodValues.month]: 'M',
            [this.periodValues.week]: 'w',
            [this.periodValues.day]: 'd'
        };
    }

    getDate() {
        let result;
        if (this.isDay()) {
            result = DateService.getDateName(this.date);
        } else {
            const month = this._getMonthName();
            const year = this._getYearName();
            result = `${month} ${year}`;
        }
        return result;
    }

    _getMonthName() {
        const month = moment(this.date, 'DD.MM.YYYY').month();
        return DateService.getMonthName(month);
    }

    _getYearName() {
        return DateService.getYearName(this.date);
    }

    isYear() {
        return this._isPeriod(this.periodValues.year);
    }

    isMonth() {
        return this._isPeriod(this.periodValues.month);
    }

    isWeek() {
        return this._isPeriod(this.periodValues.week);
    }

    isDay() {
        return this._isPeriod(this.periodValues.day);
    }

    isCurrentDate() {
        const date = moment(this.date, 'DD.MM.YYYY');
        if (this.isYear()) {
            return DateService.isCurrentMonth(date);
        } else {
            return DateService.isCurrentDay(date); 
        }
    }

    _isPeriod(value) {
        return this.period === value;
    }

    _getPeriodKey() {
        return this.peiodKeys[this.period];
    }

    onClickLeft() {
        this.date = moment(this.date, 'DD.MM.YYYY').subtract(1, this._getPeriodKey());
    }

    onClickRight() {
        this.date = moment(this.date, 'DD.MM.YYYY').add(1, this._getPeriodKey());
    }

    onClickToday() {
        this.handlers.onClickToday();
    }

    onClickYear() {
        this.handlers.onClickYear();
    }

    onClickMonth() {
        this.handlers.onClickMonth();
    }

    onClickWeek() {
        this.handlers.onClickWeek();
    }

    onClickDay() {
        this.handlers.onClickDay();
    }
}
