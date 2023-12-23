const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf,colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}] [${label}]: ${message}`;
});

const devLogger = () =>{
  return createLogger({
    level: 'debug',
    format: combine(
      label({
        label: "dev log"
      }),
      colorize(),
      timestamp({format:"HH:mm:ss"}),
      myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console()
    ],
  });

}

module.exports = devLogger