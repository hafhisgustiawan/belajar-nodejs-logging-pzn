import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        level: "info",
        filename: "application-%DATE%.log",
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true, //default nya false
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });

  logger.info("Hello format");
  logger.warn("Hello format");
  logger.error("Hello format");
});
