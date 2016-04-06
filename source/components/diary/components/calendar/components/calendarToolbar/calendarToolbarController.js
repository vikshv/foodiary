import moment from 'moment';
import periodValues from '../../periodValues';

export default class CalendarToolbarController {
    constructor() {
    }

    getMonthName() {
        const monthName = moment(this.date).format('MMMM');
        return monthName.charAt(0).toUpperCase() + monthName.slice(1);
    }

    getYear() {
        return moment(this.date).format('YYYY');
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

    onClickLeft() {
        switch (this.period) {
            case periodValues.year: {
                this.date = moment(this.date).subtract(1, 'y');
                break;
            }
            case periodValues.month: {
                this.date = moment(this.date).subtract(1, 'M');
                break;
            }
            case periodValues.week: {
                this.date = moment(this.date).subtract(1, 'w');
                break;
            }
            case periodValues.day: {
                this.date = moment(this.date).subtract(1, 'd');
                break;
            }
        }
    }

    onClickRight() {
        switch (this.period) {
            case periodValues.year: {
                this.date = moment(this.date).add(1, 'y');
                break;
            }
            case periodValues.month: {
                this.date = moment(this.date).add(1, 'M');
                break;
            }
            case periodValues.week: {
                this.date = moment(this.date).add(1, 'w');
                break;
            }
            case periodValues.day: {
                this.date = moment(this.date).add(1, 'd');
                break;
            }
        }
    }

    onClickToday() {
        this.date = moment();
    }

    onClickYear() {
        this.period = periodValues.year;
    }

    onClickMonth() {
        this.period = periodValues.month;
    }

    onClickWeek() {
        this.period = periodValues.week;
    }

    onClickDay() {
        this.period = periodValues.day;
    }
}
