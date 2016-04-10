import moment from 'moment';

export default class DateServiceController {
    constructor() {
        this.format = 'DD.MM.YYYY';
    }

    initialize(options) {
        const { locale } = options;
        locale && moment.locale(locale);
    }

    getMoment() {
        return moment;
    }

    getFormat() {
        return this.format;
    }

    getNowDateFormatted() {
        return moment().format(this.format);
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
        return moment(date, this.format).format('YYYY');
    }

    getDateName(date) {
        return moment(date, this.format).format('D MMMM YYYY');
    }
}
