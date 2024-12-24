import winston from "winston";

const callAsync = async () => {
  return Promise.reject("Upps");
};

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleRejections: true,
      filename: "src/rejection.log",
    }),
  ],
});

callAsync();
