let $state;

export default class DiaryController {
    constructor(_$state_) {
        $state = _$state_;
        this._initCalendarHandlers();
    }

    _initCalendarHandlers() {
        this.calendarHandlers = {
            goYear: date => {
                date || (date = $state.params.date);
                $state.go('diary', {
                    date,
                    period: 'year'
                });
            },
            goMonth: date => {
                date || (date = $state.params.date);
                $state.go('diary', {
                    date,
                    period: 'month'
                });
            },
            goWeek: date => {
                date || (date = $state.params.date);
                $state.go('diary', {
                    date,
                    period: 'week'
                });
            },
            goDay: date => {
                date || (date = $state.params.date);
                $state.go('diary', {
                    date,
                    period: 'day'
                });
            },
            goDate: date => {
                const { period } = $state.params;
                $state.go('diary', {
                    period,
                    date
                })
            }
        };
    }
}
