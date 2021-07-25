import Logger from "./logger.js";

const logger = new Logger();

function firstRun(){

    logger.printCount();
    logger.log('Hello World');
    logger.printCount();
};

export {
    firstRun
};