
let moment;

export default class CalendarController {
    constructor(DateService, DatePeriodService) {
        moment = DateService.getMoment();

        this.dateFormat = DateService.getFormat();

        this.periodValues = DatePeriodService.getPeriodValues();

        this.peiodKeys = {
            [this.periodValues.year]: 'y',
            [this.periodValues.month]: 'M',
            [this.periodValues.week]: 'w',
            [this.periodValues.day]: 'd'
        };

        this._initDate(this.date);
        this._initToolbarHandlers();
        this._initYearHandlers();
        this._initMonthHandlers();
        this._initWeekHandlers();
        this._initDayHandlers();
    }

    _getPeriodKey() {
        return this.peiodKeys[this.period];
    }

    _initDate(value) {
        this.date = moment(this.date, this.dateFormat);
    }

    _initToolbarHandlers() {
        this.toolbarHandlers = {
            onClickYear: this.handlers.goYear,
            onClickMonth: this.handlers.goMonth,
            onClickWeek: this.handlers.goWeek,
            onClickDay: this.handlers.goDay,
            onClickToday: () => {
                const date = moment().format(this.dateFormat);
                this.handlers.goDate(date);
            },
            onClickLeft: () => {
                const date = moment(this.date, this.dateFormat).subtract(1, this._getPeriodKey()).format(this.dateFormat);
                this.handlers.goDate(date);
            },
            onClickRight: () => {
                const date = moment(this.date, this.dateFormat).add(1, this._getPeriodKey()).format(this.dateFormat);
                this.handlers.goDate(date);
            }
        };
    }

    _initYearHandlers() {
        this.yearHandlers = {
            onClickMonth: month => {
                const formatDate = moment().month(month).startOf('month').format(this.dateFormat);;
                this.handlers.goMonth(formatDate);
            }
        };
    }

    _initMonthHandlers() {
        this.monthHandlers = {
            onClickDay: date => {
                this._onClickDay(date);
            },
            onClickWeek: date => {
                const formatDate = moment(date).startOf('week').format(this.dateFormat);
                this.handlers.goWeek(formatDate);
            }
        };
    }

    _initWeekHandlers() {
        this.weekHandlers = {
            onClickDay: date => {
                this._onClickDay(date);
            }
        };
    }

    _initDayHandlers() {
        this.dayHandlers = {
            getData: this.handlers.getData,
            setData: this.handlers.setData
        };
    }

    _onClickDay(date) {
        const formatDate = moment(date).format(this.dateFormat);
        this.handlers.goDay(formatDate);
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

    _isPeriod(value) {
        return this.period === value;
    }
};
