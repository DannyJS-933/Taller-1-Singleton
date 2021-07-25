class Logger{

    constructor(){
        this.logs = [];
    }

    log(message){
        this.log.push(message);
        console.log(`LOG: ${message}`);

    }
        printCout(){
            console.log(`${this.logs.length} logs printed.`);
        }
};

export default Logger;