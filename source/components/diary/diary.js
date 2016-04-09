import app from './app';
import './diaryConfig';
import controller from './diaryController';
import template from './template.html';
import './style.less';

export default app.component('diary', {
    template,
    controller,
    bindings: {
        period: '<',
        date: '<'
    }
});
