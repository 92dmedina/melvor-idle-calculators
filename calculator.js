//global scope
//woodcutting global
let baseLogExp;
let finalLogTime;
let finalLogs;
let possibleLogs;
//exp per time function
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

//exp left till max level
const expLeft = exp => {
    let maxExp = 13034431;
    let expDiff = maxExp - exp;
    console.log(expDiff);
};

//formula to get level from exp and vice versa
class expFormula {
    constructor() {
        this.equate = function (xp) {
            return Math.floor(xp + 300 * Math.pow(2, xp / 7));
        };
        this.levelToExp = function (level) {
            var xp = 0;
            for (var i = 1; i < level; i++)
                xp += this.equate(i);
            return Math.floor(xp / 4);
        };
        this.expToLevel = function (xp) {
            var level = 1;
            while (this.levelToExp(level) < xp)
                level++;
            return level;
        };
    };
};

//makes class expFormula into a function-global
const expFromLevel = new expFormula();

//non-skill calculator object
const nonSkillCalc = {
    woodcutting: {
    //Finds how long it takes to chop logs per/s
        woodTimeCalc (tree,cape,axe,mastery,nature,) {
            let baseTime;
            let axeInterval;
            //Choose a tree
                if (tree) {
                    switch (tree) {
                        case 'normal':
                            baseTime = 3;
                            baseLogExp = 10;
                            break;
                        case 'oak':
                            baseTime = 4;
                            baseLogExp = 15;
                            break;
                        case 'willow':
                            baseTime = 5;
                             baseLogExp = 22;
                            break;
                        case 'teak':
                            baseTime = 6;
                            baseLogExp = 30;
                            break;
                        case 'maple':
                            baseTime = 8;
                            baseLogExp = 40;
                            break;
                        case 'mahogany':
                            baseTime = 10;
                            baseLogExp = 60;
                            break;
                        case 'yew':
                            baseTime = 12;
                            baseLogExp = 80;
                            break;
                        case 'magic':
                            baseTime = 20;
                            baseLogExp = 100;
                            break;
                        case 'redwood':
                            baseTime = 15;
                            baseLogExp = 180;
                            break;
                        default:
                            console.log('Please use a valid tree');
                            break;
                    };
                };
            //Choose an axe
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
                            break;
                    };
                };
            //Change base time depending on parameters
                if (cape === true && nature === true) {
                    let percent = 0.3;
                    let interval = percent * baseTime;
                    baseTime = baseTime - interval.toFixed(2);
                } else if (cape === false && nature === true) {
                    let percent = 0.15;
                    let interval = percent * baseTime;
                    baseTime = baseTime - interval.toFixed(2);
                } else if (cape === true && nature === false) {
                    let percent = 0.15;
                    let interval = percent * baseTime;
                    baseTime = baseTime - interval.toFixed(2);
                } else if (cape === true) {
                    let percent = 0.15;
                    let interval = percent * baseTime;
                    baseTime = baseTime - interval.toFixed(2);
                };
            //changes base time into the final time depnding on other factors
                 if (axe) {
                    let cutInterval = baseTime * axeInterval;
                    finalLogTime = baseTime - cutInterval;
                    finalLogTime.toFixed(1);
                    finalLogTime = finalLogTime.toString();
                } else {
                    finalLogTime = baseTime;
                    finalLogTime = finalLogTime.toString();
                }
                if (mastery === true) {
                    finalLogTime = finalLogTime - 0.2;
                    finalLogTime.toFixed(1);
                    finalLogTime = finalLogTime.toString();
                };
            //if nothing entered sends invalid/baseLogExp
                if (baseLogExp) {
                    baseLogExp = baseLogExp.toString()
                } else {
                    baseLogExp = 'Invalid';
                    finalLogTime = 'Invalid';
                };
            },//end of first function
            logsPerTimeCalc (mastery) {
                let minute = 60;
                let baseLog = 1;
                let logsPerMinute = minute / finalLogTime;
                let masteryPercent = (mastery * 5) / 100;
                finalLogs = Math.round(logsPerMinute * baseLog);
                possibleLogs = (finalLogs * masteryPercent) + finalLogs;
                }
        }
};

//testing Zone (tree,cape,axe,mastery,nature)
nonSkillCalc.woodcutting.woodTimeCalc('magic',false,'dragon',false,false);
expPerTime(finalLogTime,baseLogExp,'day');
