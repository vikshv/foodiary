import moment from 'moment';
import app from '../../app';

class DateService {
    constructor() {
        moment.locale('ru');
    }

    createDate(val) {
        return moment(val);
    }
};

export default app.service('DateService', [DateService]);
