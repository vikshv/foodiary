export default class DiaryController {
    constructor($state, DateService, DiaryService) {
        this.$state = $state;
        this.DateService = DateService;
        this.DiaryService = DiaryService;

        this._initState();
        this._initCalendarHandlers();
    }

    _initState() {
        if (!this.date || !this.period) {
            const period = this.period || 'day';
            const date = this.date || this.DateService.getNowDateFormatted();
            this._goState({ date, period });
        }
    }

    _goState(options) {
        const { params } = this.$state;
        const { period = params.period, date = params.date } = options;
        this.$state.go('diary', {
            date,
            period
        });
    }

    _initCalendarHandlers() {
        this.calendarHandlers = {
            goYear: date => this._goState({ period: 'year', date }),
            goMonth: date => this._goState({ period: 'month', date }),
            goWeek: date => this._goState({ period: 'week', date }),
            goDay: date => this._goState({ period: 'day', date }),
            goDate: date => this._goState({ date }),
            getData: date => this._getData(date),
            setData: (data, date) => this._setData(data, date)
        };
    }

    _getData(date) {
        const options = this._getDateParams(date);
        return this.DiaryService.getList(options);
    }

    _setData(data, date) {
        const options = this._getDateParams(date);
        return this.DiaryService.addItem(data, options);
    }

    _getDateParams(date) {
        const format = this.DateService.getFormat();
        const moment = this.DateService.getMoment();
        const momentDate = moment(date, format);
        const year = momentDate.year();
        const month = momentDate.month();
        const day = momentDate.date();

        return {
            year,
            month,
            day
        };
    }
}
