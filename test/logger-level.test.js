import winston from "winston";

test("create new logger with level", () => {
  // level logger ini berurutan mulai dari error sampai silly
  // secara default, logger ini akan menampilkan level info keatas, sedangkan level info kebawah tidak ditampilkan
  // kita bisa mendefinisikan level pada option createlogger dibawah untuk menampilkan level tertentu keatasnya, misal level : verbose, maka akan menampilkan verbose, http, info, warn dan error
  const logger = winston.createLogger({
    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  // logger.log({ level: "error", message: "Hello error" });
  // logger.log({ level: "warn", message: "Hello warn" });
  // logger.log({ level: "info", message: "Hello info" });
  // logger.log({ level: "http", message: "Hello http" });
  // logger.log({ level: "verbose", message: "Hello verbose" });
  // logger.log({ level: "debug", message: "Hello debug" });
  // logger.log({ level: "silly", message: "Hello silly" });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
  logger.http("Hello http");
  logger.verbose("Hello verbose");
  logger.debug("Hello debug");
  logger.silly("Hello silly");
});
