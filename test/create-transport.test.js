import winston from "winston";
import TransportStream from "winston-transport";

test("create new transport", () => {
  //disini kita membuat transport sendiri yang nantinya kita manipulasi bagian method log() di dalam nya
  //fungsinya bisa beragam, bisa ngirim log ke email atau chat sebebasnya

  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      //disini manupulasi aja sebebasnya
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.info("Hello format");
  logger.warn("Hello format");
  logger.error("Hello format");
});
