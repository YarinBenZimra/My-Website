import winston from "winston";

const { combine, timestamp, printf, colorize, uncolorize } = winston.format;
const LOG_LEVEL = process.env.LOG_LEVEL;
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info" || LOG_LEVEL,
  format: combine(timestamp({ format: "DD/MM/YYYY HH:mm:ss" }), logFormat),
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "DD/MM/YYYY HH:mm:ss" }),
        logFormat
      ),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: combine(uncolorize(), logFormat),
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      format: combine(uncolorize(), logFormat),
    }),
  ],
});

export default logger;
