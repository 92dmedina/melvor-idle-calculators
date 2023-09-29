//Expeience per time function
const expPerTime = (seconds,exp,time) => {
    const day = 24;
    const minPerHour = 60;
    let expPerMin = (minPerHour / seconds) * exp;
    let expPerHour = expPerMin * minPerHour;
    let expPerDay = expPerHour * day;
        switch (time) {
            case 'minute':
                expPerMin = expPerMin.toString();
                console.log(expPerMin);
                break;
            case 'hour':
                expPerHour =  Math.round(expPerHour);
                expPerHour = expPerHour.toString();
                console.log(expPerHour);
                break;
            case 'day':
                expPerDay = Math.round(expPerDay);
                expPerDay = expPerDay.toString();
                console.log(expPerDay);
                break;
            default:
                console.log('use either minute, hour or day');
                break;
            };
};

//Experience left till level 99
const expLeft = exp => {
    let maxExp = 13034431;
    let expDiff = maxExp - exp;
    console.log(expDiff);
};

// Formula to get level from exp and vice versa
const mainExpFormula= () => {
// Calculate the equivalent experience for a given experience.
    function equate(xp) {
        return Math.floor(xp + 300 * Math.pow(2, xp / 7));
    };
// Calculate the experience required to reach a given level.
    function levelToExp(level) {
        var xp = 0;
        for (var i = 1; i < level; i++) {
            xp += equate(i);
        };
    return Math.floor(xp / 4);
    };
// Calculate the level for a given experience.
    function expToLevel(xp) {
        var level = 1;
        while (levelToExp(level) < xp) {
            level++;
    };
    return level;
  };
// Return the object containing the functions.
    return {
        equate,
        levelToExp,
        expToLevel,
  };
};
//Creates a new variable for expFormula
let expFormula = mainExpFormula();

//non-skill calculator object
const nonSkillCalc = {
    woodcutting: {
//Finds how long it takes to chop logs per/s
        woodTimeCalc (tree,cape,axe,masteryL,nature) {
            let secondsPerLog;
            let axeInterval;
            let baseLogExp;
            let finalLogTime;
//Chooses a tree
                if (tree) {
                    switch (tree) {
                        case 'normal':
                            secondsPerLog = 3;
                            baseLogExp = 10;
                            break;
                        case 'oak':
                            secondsPerLog = 4;
                            baseLogExp = 15;
                            break;
                        case 'willow':
                            secondsPerLog = 5;
                             baseLogExp = 22;
                            break;
                        case 'teak':
                            secondsPerLog = 6;
                            baseLogExp = 30;
                            break;
                        case 'maple':
                            secondsPerLog = 8;
                            baseLogExp = 40;
                            break;
                        case 'mahogany':
                            secondsPerLog = 10;
                            baseLogExp = 60;
                            break;
                        case 'yew':
                            secondsPerLog = 12;
                            baseLogExp = 80;
                            break;
                        case 'magic':
                            secondsPerLog = 20;
                            baseLogExp = 100;
                            break;
                        case 'redwood':
                            secondsPerLog = 15;
                            baseLogExp = 180;
                            break;
                        default:
                            console.log('Please use a valid tree');
                            return null;
                    };
                };
//Chooses an axe
                if (axe) {
                    switch (axe) {
                        case 'iron':
                            axeInterval = 0.05;
                            break;
                        case 'steel':
                            axeInterval = 0.1;
                            break;
                        case 'black':
                            axeInterval = 0.2;
                            break;
                        case 'mithril':
                            axeInterval = 0.3;
                            break;
                        case 'adamant':
                            axeInterval = 0.35;
                            break;
                        case 'rune':
                            axeInterval = 0.4;
                            break;
                        case 'dragon':
                            axeInterval = 0.5;
                            break;
                        default:
                            console.log('Please use a valid axe');
                            return null;
                    };
                };
//Calculate the final log time
                finalLogTime = secondsPerLog - secondsPerLog * axeInterval;
//Changes final log time depending on parameters
                if (cape === true && nature === true) {
                    finalLogTime -= finalLogTime * 0.3;
                } else if (cape === false && nature === true) {
                    finalLogTime -= finalLogTime * 0.15;
                } else if (cape === true && nature === false) {
                    finalLogTime -= finalLogTime * 0.15;
                } else if (cape === true) {
                    finalLogTime -= finalLogTime * 0.15;
                } else {
                    //do nothing
                };
//Apply mastery level bonus
                if (masteryL === 99) {
                    finalLogTime -= 0.2;
                };
                return finalLogTime;
//End of woodTimeCalc function
        },
//Start of logsPerTimeCalc
        logsPerTimeCalc (masteryLevel, time) {
            const secPerMin = 60;
            const minPerHour = 60;
            const hoursPerDay = 24;
            let masteryPercent = Math.floor(masteryLevel * 5) / 100;
            let woodcuttingTime = nonSkillCalc.woodcutting.woodTimeCalc('redwood',true,'dragon',99,true);
            let logsPerMinute = secPerMin / woodcuttingTime;
            let logsPerHour = logsPerMinute * minPerHour;
            let logsPerDay = logsPerHour * hoursPerDay;
            let finalLogs;
//Check to see if any values are missing
                if (!masteryLevel || !time) {
                    console.log('Invalid input. Please enter all required values for the logsPerTimeCalc function.')
                    return null;
                };
//Logs the final log count depending on the time needed
                switch (time) {
                    case 'min':
                        finalLogs = logsPerMinute * masteryPercent;
                        finalLogs = Math.floor(finalLogs);
                        finalLogs = finalLogs.toString();
                        console.log(finalLogs)
                        break;
                    case 'hour':
                        finalLogs = logsPerHour * masteryPercent;
                        finalLogs = Math.floor(finalLogs);
                        finalLogs = finalLogs.toString();
                        console.log(finalLogs)
                        break;
                    case 'day':
                        finalLogs = logsPerDay * masteryPercent;
                        finalLogs = Math.floor(finalLogs);
                        finalLogs = finalLogs.toString();
                        console.log(finalLogs)
                        break;
                    default:
                        console.log('Please pick a desired time');
                        return null;
                };
        },
    },
};
//testing Zone (tree,cape,axe,masteryL,nature)
nonSkillCalc.woodcutting.logsPerTimeCalc(99,'day');
