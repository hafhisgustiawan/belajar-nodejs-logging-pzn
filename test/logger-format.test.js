import winston, { info } from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // default format adalah winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello format");
  logger.warn("Hello format");
  logger.error("Hello format");
});
