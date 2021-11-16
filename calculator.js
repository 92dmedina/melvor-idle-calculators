const woodcutting = (tree,cape,axe,mastery,nature) => {
    let baseTime;
    let baseExp;
    let axeInterval;
    let finalTime;
    //Choose a tree
        if (tree) {
            switch (tree) {
                case 'normal':
                    baseTime = 3;
                    baseExp = 10;
                    break;
                case 'oak':
                    baseTime = 4;
                    baseExp = 15;
                    break;
                case 'willow':
                    baseTime = 5;
                    baseExp = 22;
                    break;
                case 'teak':
                    baseTime = 6;
                    baseExp = 30;
                    break;
                case 'maple':
                    baseTime = 8;
                    baseExp = 40;
                    break;
                case 'mahogany':
                    baseTime = 10;
                    baseExp = 60;
                    break;
                case 'yew':
                    baseTime = 12;
                    baseExp = 80;
                    break;
                case 'magic':
                    baseTime = 20;
                    baseExp = 100;
                    break;
                case 'redwood':
                    baseTime = 15;
                    baseExp = 180;
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
        }
        if (axe) {
            let cutInterval = baseTime * axeInterval;
            finalTime = baseTime - cutInterval;
        } else {
            finalTime = baseTime;
        }
        if (mastery === true) {
            finalTime = finalTime - 0.2;
        };
        console.log(finalTime.toFixed(1),baseExp);
};
//exp left till max level
const expLeft = exp => {
    let maxExp = 13034431;
    let expDiff = maxExp - exp;
    console.log(expDiff);
}

//Formula to get level from exp and vice versa
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
    }
}
let expLevelCalculator = new expFormula();


//Testing Zone
woodcutting('yew',false,'rune',false,false);
/* let day = 24;
            let perMinPerHour = 60;
            let expPerMin = (perMinPerHour / seconds) * exp;
            let expPerHour = expPerMin * perMinPerHour;
            let expPerDay = expPerHour * day;
            switch (time) {
                case 'minute':
                    console.log(expPerMin);
                    break;
                case 'hour':
                    console.log(expPerHour);
                    break;
                case 'day':
                    console.log(expPerDay);
                    break;
                default:
                    console.log('use either minute, hour or day');
                    break;
            };
*/