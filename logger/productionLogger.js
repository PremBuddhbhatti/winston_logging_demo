const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}] [${label}]: ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(
      label({
        label: "dev log"
      }),
      timestamp(),
      myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console(),
      new transports.File({ filename: "error.log" })
    ],
  });

}

module.exports = productionLogger