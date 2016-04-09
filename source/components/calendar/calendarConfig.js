import app from './app';

import './services/DateService';
import './services/DatePeriodService';

app.run((DateService) => {
    DateService.initialize({
        locale: 'ru'
    });
});
