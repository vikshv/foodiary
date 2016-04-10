let $state;
let DateService;

export default class DiaryController {
    constructor(_$state_, _DateService_) {
        $state = _$state_;
        DateService = _DateService_;

        this._initState();
        this._initCalendarHandlers();
    }

    _initState() {
        if (!this.date || !this.period) {
            const period = this.period || 'day';
            const date = this.date || DateService.getNowDateFormatted();
            this._goState({ date, period });
        }
    }

    _goState(options) {
        const { params } = $state;
        const { period = params.period, date = params.date } = options;
        $state.go('diary', {
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
            goDate: date => this._goState({ date })
        };
    }
}
