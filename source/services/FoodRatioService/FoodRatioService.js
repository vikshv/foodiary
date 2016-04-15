import app from '../../app';
import controller from './FoodRatioServiceController';

const serviceName = 'FoodRatioService';

app.service(serviceName, controller);

export default serviceName;
