module.exports = function toReadable (number) {
    if(String(number).length <= 2) return getMiddleNumber(number);
    if(String(number).length == 3) return (getNumber(parseInt(String(number)[0])) + " hundred " + getMiddleNumber(Number(String(number).slice(1)))).replace('zero', '').trim();
}

function getMiddleNumber(num){
    if(num < 14) return getNumber(num);
    if(num == 15) return 'fifteen';
    if(num < 20) return (getNumber(parseInt(String(num)[1])) + 'teen').replace('tt','t');
    return (get10Number(parseInt(String(num)[0])) +' '+ getNumber(parseInt(String(num)[1]))).replace('zero', '').trim();
}

function getNumber (num){
    switch (num){
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';        
  }
}

function get10Number(num){
    switch(num){
        case 0: 
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 8:
            return 'eighty';
        default:
            return getNumber(num) + 'ty';
        
    }
}
