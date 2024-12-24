import winston, { info } from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    //jangan salah pilih format untuk combine ini bisa ambur adul
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello format");
  logger.warn("Hello format");
  logger.error("Hello format");
});
