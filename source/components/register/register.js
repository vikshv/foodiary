import app from './app';
import './registerConfig';
import controller from './registerController';
import template from './template.html';
import './style.less';

const componentName = 'register';

app.component(componentName, {
    template,
    controller
});

export default componentName;
