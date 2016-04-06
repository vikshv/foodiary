import app from '../../../../../../app';
import controller from './CalendarYearController';
import template from './template.html';
import './style.less';

export default app.component('calendarYear', {
    template,

    bindings: {
        date: '<',
        handlers: '<'
    },
    
    controller: [controller]
});
