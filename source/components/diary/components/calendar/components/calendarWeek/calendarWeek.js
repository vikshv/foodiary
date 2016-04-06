import app from '../../../../../../app';
import template from './template.html';
import './style.less';

class CalendarWeekController {
    constructor() {
    }
};

export default app.component('calendarWeek', {
    template,

    bindings: {
    },
    
    controller: [CalendarWeekController]
});
