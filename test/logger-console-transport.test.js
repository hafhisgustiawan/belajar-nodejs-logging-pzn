import winston from "winston";

test("create new logger with console transport", () => {
  // ketika membuat logger minimal harus ada satu buah transport, jika tidak maka akan menghasilkan error
  // transport di definisikan di bawah ini
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "This is info message",
  });
});
