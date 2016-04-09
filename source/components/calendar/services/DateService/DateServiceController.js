import moment from 'moment';

export default class DateServiceController {
    constructor() {
    }

    initialize(options) {
        const { locale } = options;
        locale && moment.locale(locale);
    }

    getMoment() {
        return moment;
    }

    isCurrentMonth(date) {
        const now = moment();
        return now.year() === date.year() && now.month() === date.month();
    }

    isCurrentDay(date) {
        const now = moment();
        return this.isCurrentMonth(date) && now.date() === date.date();
    }

    getMonthName(month) {
        return moment().startOf('year').month(month).format('MMMM');
    }

    getYearName(date) {
        return moment(date, 'DD.MM.YYYY').format('YYYY');
    }

    getDateName(date) {
        return moment(date, 'DD.MM.YYYY').format('D MMMM YYYY');
    }
}
