import app from '../../app';
import controller from './calendarDayController';
import template from './template.html';
import './style.less';

export default app.component('calendarDay', {
    template,
    controller,
    bindings: {
        date: '<',
        handlers: '<'
    }
});
