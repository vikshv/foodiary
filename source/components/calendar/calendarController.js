
let moment;

export default class CalendarController {
    constructor(DateService, DatePeriodService) {
        moment = DateService.getMoment();

        this.periodValues = DatePeriodService.getPeriodValues();

        this._initDate(this.date);
        this._initToolbarHandlers();
        this._initYearHandlers();
        this._initMonthHandlers();
        this._initWeekHandlers();
    }

    _initDate(value) {
        this.date = moment(this.date, 'DD.MM.YYYY');
    }

    _initToolbarHandlers() {
        this.toolbarHandlers = {
            onClickYear: this.handlers.goYear,
            onClickMonth: this.handlers.goMonth,
            onClickWeek: this.handlers.goWeek,
            onClickDay: this.handlers.goDay,
            onClickToday: () => {
                const date = moment().format('DD.MM.YYYY');
                this.handlers.goDate(date);
            }
        };
    }

    _initYearHandlers() {
        this.yearHandlers = {
            onClickMonth: month => {
                const formatDate = moment().month(month).startOf('month').format('DD.MM.YYYY');;
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
                const formatDate = moment(date).startOf('week').format('DD.MM.YYYY');
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

    _onClickDay(date) {
        const formatDate = moment(date).format('DD.MM.YYYY');
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
