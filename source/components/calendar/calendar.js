import app from './app';
import './calendarConfig';

import './components/calendarToolbar';
import './components/calendarYear';
import './components/calendarMonth';
import './components/calendarWeek';
import './components/calendarDay';

import controller from './calendarController';
import template from './template.html';
import './style.less';

export default app.component('calendar', {
    template,
    controller,
    bindings: {
        date: '<',
        period: '<',
        handlers: '<'
    }
});
