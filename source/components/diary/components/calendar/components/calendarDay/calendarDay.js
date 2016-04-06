import app from '../../../../../../app';
import template from './template.html';
import './style.less';

class CalendarDayController {
    constructor() {
    }
};

export default app.component('calendarDay', {
    template,

    bindings: {
    },
    
    controller: [CalendarDayController]
});
