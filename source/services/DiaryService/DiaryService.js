import app from '../../app';
import controller from './DiaryServiceController';

const serviceName = 'DiaryService';

app.service(serviceName, controller);

export default serviceName;
