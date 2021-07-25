import Logger from "./logger.js";

const logger = new Logger();

function secondRun(){

    logger.printCount();
    logger.log('Hello World 2');
    logger.printCount();
};

export {
    secondRun
};