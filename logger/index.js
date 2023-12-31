const devLogger = require('./devLogger');
const productionLogger = require('./productionLogger');

let logger = null;

if (process.env.NODE_ENV !== 'production') {
  logger = devLogger()
}else {
  logger = productionLogger()
}

module.exports = logger;