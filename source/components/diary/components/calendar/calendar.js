import app from './app';
import './components/calendarToolbar';
import './components/calendarYear';
import './components/calendarMonth';
import './components/calendarWeek';
import './components/calendarDay';
import controller from './calendarController';
import template from './template.html';
import './style.less';

app.component('calendar', {
    template,

    bindings: {
        date: '<',
        period: '@'
    },
    
    controller: [controller]
});
