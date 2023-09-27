//Expeience per time function
const expPerTime = (seconds,exp,time) => {
    let day = 24;
    let perMinPerHour = 60;
    let expPerMin = (perMinPerHour / seconds) * exp;
    let expPerHour = expPerMin * perMinPerHour;
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
const expFormula = mainExpFormula();

//non-skill calculator object
const nonSkillCalc = {
    woodcutting: {
//Woodcutting variables
        baseLogExp: 0,
        finalLogTime: 0,
        finalLogs: 0,
//Finds how long it takes to chop logs per/s
        woodTimeCalc (tree,cape,axe,masteryL,nature) {
            let secondsPerLog;
            let axeInterval;
//Chooses a tree
                if (tree) {
                    switch (tree) {
                        case 'normal':
                            secondsPerLog = 3;
                            this.baseLogExp = 10;
                            break;
                        case 'oak':
                            secondsPerLog = 4;
                            this.baseLogExp = 15;
                            break;
                        case 'willow':
                            secondsPerLog = 5;
                             this.baseLogExp = 22;
                            break;
                        case 'teak':
                            secondsPerLog = 6;
                            this.baseLogExp = 30;
                            break;
                        case 'maple':
                            secondsPerLog = 8;
                            this.baseLogExp = 40;
                            break;
                        case 'mahogany':
                            secondsPerLog = 10;
                            this.baseLogExp = 60;
                            break;
                        case 'yew':
                            secondsPerLog = 12;
                            this.baseLogExp = 80;
                            break;
                        case 'magic':
                            secondsPerLog = 20;
                            this.baseLogExp = 100;
                            break;
                        case 'redwood':
                            secondsPerLog = 15;
                            this.baseLogExp = 180;
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
                this.finalLogTime = secondsPerLog - secondsPerLog * axeInterval;
//Changes final log time depending on parameters
                if (cape === true && nature === true) {
                    this.finalLogTime -= this.finalLogTime * 0.3;
                } else if (cape === false && nature === true) {
                    this.finalLogTime -= this.finalLogTime * 0.15;
                } else if (cape === true && nature === false) {
                    this.finalLogTime -= this.finalLogTime * 0.15;
                } else if (cape === true) {
                    this.finalLogTime -= this.finalLogTime * 0.15;
                } else {
                    //do nothing
                };
//Apply mastery level bonus
                if (masteryL === 99) {
                    this.finalLogTime -= 0.2;
                };
                return this.finalLogTime;
//End of woodTimeCalc function
        },
//Start of logsPerTimeCalc
        logsPerTimeCalc (masteryLevel, time) {
            const masteryPercent = Math.floor(masteryLevel * 5) / 100;
            const secPerMin = 60;
            const minPerHour = 60;
            const hoursPerDay = 24;
            let logsPerMinute = secPerMin / this.finalLogTime;
            let logsPerHour = logsPerMinute * minPerHour;
            let logsPerDay = logsPerHour * hoursPerDay;
//Check to see if any values are missing
                if (!masteryLevel || !time) {
                    console.log('Invalid input. Please enter all required values for the logsPerTimeCalc function.')
                    return null;
                };
//Logs the final log count depending on the time needed
                switch (time) {
                    case 'min':
                        this.finalLogs = logsPerMinute * masteryPercent;
                        this.finalLogs = Math.floor(this.finalLogs);
                        this.finalLogs = this.finalLogs.toString();
                        console.log(this.finalLogs)
                        break;
                    case 'hour':
                        this.finalLogs = logsPerHour * masteryPercent;
                        this.finalLogs = Math.floor(this.finalLogs);
                        this.finalLogs = this.finalLogs.toString();
                        console.log(this.finalLogs)
                        break;
                    case 'day':
                        this.finalLogs = logsPerDay * masteryPercent;
                        this.finalLogs = Math.floor(this.finalLogs);
                        this.finalLogs = this.finalLogs.toString();
                        console.log(this.finalLogs)
                        break;
                    default:
                        console.log('Please pick a desired time');
                        return null;
                }
        },
    },
};

//testing Zone (tree,cape,axe,masteryL,nature)
nonSkillCalc.woodcutting.woodTimeCalc('redwood',true,'dragon',99,true);
nonSkillCalc.woodcutting.logsPerTimeCalc(99,'day');
