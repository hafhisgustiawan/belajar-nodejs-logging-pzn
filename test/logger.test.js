import winston from "winston";

test("create new logger", () => {
  // logger dibawah ini akan menghasilkan error karena option transport nya belum di definisikan
  const logger = winston.createLogger({});

  logger.log({
    level: "info",
    message: "This is info message",
  });
});
