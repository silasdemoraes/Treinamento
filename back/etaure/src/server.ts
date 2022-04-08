import config from './shared/config/Config';
import app from './shared/http/app';
import pino from './shared/util/Pino';

(async () => {
  await app.configure();

  app.express.listen(app.express.get('port'), function () {
    showMode();
    pino.info(`Server runnig ${app.express.get('port')}`);
  });
})();

function showMode() {
  if (config.nodeEnv === 'dev') {
    pino.info(`Server starting in developer mode!`);
  }
  if (config.nodeEnv === 'hmg') {
    pino.info(`Server starting in homologation mode!`);
  }
  if (config.nodeEnv === 'prd') {
    pino.info(`Server starting in prodution mode!`);
  }
}

// TODO habilitar monitoramento
// const apiMetrics = require('prometheus-api-metrics');
// app.use(apiMetrics())
