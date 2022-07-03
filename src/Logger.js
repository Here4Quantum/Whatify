import winston from 'winston';

var loggerConfig = {
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp({format: "YYY-MM-DD HH:mm:ss.SSS"}),
        winston.format.colorize(),
        winston.format.printf(({level, message, label, timestamp}) => `${timestamp} ${label || '-'} ${level}: ${message}`),
    ),
    transports: [
        new winston.transports.Console({
            level: "debug",
        }),
    ],
};

var logger = winston.createLogger(loggerConfig);

export default logger;
