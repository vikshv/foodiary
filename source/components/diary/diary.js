import app from '../../app';
import './components/calendar';
import template from './template.html';
import './style.less';

export default app.component('diary', {
    template,
    
    controller: function() {
        this.date = new Date();
    }
});
