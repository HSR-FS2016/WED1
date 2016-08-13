function isGlobalThis()
{
    console.log(this == global);
}

var logEntry = {
    date : Date.now(),
    data : "System crash",
    isGlobalThis : isGlobalThis,
    showEntry : function(){
        return this.date +" : "+ this.data;
    }
};

function printer(fnToPrint){
    console.log(fnToPrint());
}

isGlobalThis();
logEntry.isGlobalThis();
console.log(logEntry.showEntry());
printer(() => logEntry.showEntry());

var showEntry = logEntry.showEntry;
showEntry();
