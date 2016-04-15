import app from './app';
import './promoConfig';
import controller from './PromoController';
import template from './template.html';
import './style.less';

const componentName = 'promo';

app.component(componentName, {
    template,
    controller
});

export default componentName;
