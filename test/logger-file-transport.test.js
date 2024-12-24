import winston, { info } from "winston";

test("logging with file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    //jangan salah pilih format untuk combine ini bisa ambur adul
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json() //yang terakhir ini menentukan bentuk format nya, bisa undefined kalo salah pilih
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({ filename: "application.log" }),
      new winston.transports.File({ filename: "hafhis.log" }),
    ],
  });

  logger.info("Hello format");
  logger.warn("Hello format");
  logger.error("Hello format");
});
