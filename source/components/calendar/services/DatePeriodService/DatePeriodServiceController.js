export default class DatePeriodServiceController {
    constructor() {
        this.values = {
            year: 'year',
            month: 'month',
            week: 'week',
            day: 'day'
        };
    }

    getPeriodValues() {
        return this.values;
    }
}
