const testTime = ["12:05am","12:01pm","10:12pm","1:20am"];

function findMinTimeDiff(timeArray) {
    let hours = 0;
    let minutes = 0;
    let minimum;
    let arr = new Array();
    for (var i = 0; i < timeArray.length; i++) {
        hours = parseInt(timeArray[i].split(":")[0]);
        if (timeArray[i].search("am") >= 0 && hours < 12) {
            minutes += parseInt(timeArray[i].split(":")[1].split("am")[0]);
        } else if (timeArray[i].search("am") >= 0 && hours == 12) {
            minutes += parseInt(timeArray[i].split(":")[1].split("am")[0]);
        } else if (timeArray[i].search("pm") >= 0 && hours == 12) {
            minutes += parseInt(timeArray[i].split(":")[1].split("pm")[0]);
        } else if (timeArray[i].search("pm") >= 0 && hours < 12) {
            hours += 12;
            minutes += parseInt(timeArray[i].split(":")[1].split("pm")[0])
        }
        if (timeArray[i].search("am") >= 0 && hours == 12) {
            arr.push(hours * 60 * 2 + minutes);
        } else {
            arr.push(hours * 60 + minutes);
        }
    }    
    console.log(arr);
}

findMinTimeDiff(testTime);