const testTime = ["12:05am","12:01pm","10:12pm","1:20am"];
const testPoly = ["anna","kayak"];

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
    if (arr.length > 0) {
        minimum = Math.abs(arr[0] - arr[1]);
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                let curr = Math.abs(arr[i] - arr[j]);
                console.log(curr);
                if (curr < minimum) {
                    minimum = curr;
                }
            }
        }
    }
    console.log(arr + " " + minimum);
}

function findPoly(polyArray) {

}

// findMinTimeDiff(testTime);
findPoly(testPoly);