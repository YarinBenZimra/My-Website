import winston from "winston";

const { combine, timestamp, printf, colorize, uncolorize } = winston.format;
const NODE_ENV = process.env.NODE_ENV;
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
  level: NODE_ENV === "production" ? "info" : "debug",
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
      filename: "logs/get/error.log",
      level: "error",
      format: combine(uncolorize(), logFormat),
    }),
    new winston.transports.File({
      filename: "logs/get/combined.log",
      format: combine(uncolorize(), logFormat),
    }),
  ],
});

export const postLogger = winston.createLogger({
  level: "debug",
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
      filename: "logs/post/error.log",
      level: "error",
      format: combine(uncolorize(), logFormat),
    }),
    new winston.transports.File({
      filename: "logs/post/combined.log",
      format: combine(uncolorize(), logFormat),
    }),
  ],
});
